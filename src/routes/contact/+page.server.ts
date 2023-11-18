import { fail } from '@sveltejs/kit';

import { superValidate } from 'sveltekit-superforms/server';

import type { Actions } from './$types';

import { contactFormSchema } from '$lib/schemas';
import { sendReceiveMail } from '$lib/server/nodeMailer';

export const prerender = false;

export const load = async () => {
	const form = await superValidate(contactFormSchema);
	return { form };
};

export const actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, contactFormSchema);
		if (!form.valid) {
			return fail(400, { form });
		}
		// TODO: reCAPTCHA

		try {
			await sendReceiveMail(form.data);
		} catch (error) {
			// TODO: エラーハンドリング
			return fail(400);
		}
	}
} satisfies Actions;
