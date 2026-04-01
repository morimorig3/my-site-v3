import { fail } from '@sveltejs/kit';

import { superValidate } from 'sveltekit-superforms';
import { zod4 } from 'sveltekit-superforms/adapters';

import type { Actions } from './$types';

import { contactFormSchema, type ContactFormData } from '$lib/schemas';
import { sendReceiveMail } from '$lib/server/nodeMailer';
import { verifyTurnstile } from '$lib/server/turnstile';

export const prerender = false;

export const load = async () => {
	const form = await superValidate(zod4(contactFormSchema));
	return { form };
};

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const turnstileToken = formData.get('cf-turnstile-response');

		const form = await superValidate(formData, zod4(contactFormSchema));
		if (!form.valid) {
			return fail(400, { form, success: false });
		}

		if (typeof turnstileToken !== 'string' || !turnstileToken) {
			return fail(400, { form, success: false });
		}

		try {
			const isHuman = await verifyTurnstile(turnstileToken);
			if (!isHuman) {
				return fail(400, { form, success: false });
			}

			await sendReceiveMail(form.data as ContactFormData);
			return { form, success: true };
		} catch (_error) {
			return fail(400, { form, success: false });
		}
	}
} satisfies Actions;
