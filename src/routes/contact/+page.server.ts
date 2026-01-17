import { fail } from '@sveltejs/kit';

import { superValidate } from 'sveltekit-superforms';
import { zod4 } from 'sveltekit-superforms/adapters';

import type { Actions } from './$types';

import { contactFormSchema, type ContactFormData } from '$lib/schemas';
import { sendReceiveMail } from '$lib/server/nodeMailer';

export const prerender = false;

export const load = async () => {
	const form = await superValidate(zod4(contactFormSchema));
	return { form };
};

export const actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, zod4(contactFormSchema));
		if (!form.valid) {
			return fail(400, { form, success: false });
		}

		try {
			await sendReceiveMail(form.data as ContactFormData);
			return { form, success: true };
		} catch (_error) {
			return fail(400, { form, success: false });
		}
	}
} satisfies Actions;
