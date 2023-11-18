import { fail } from '@sveltejs/kit';

import { createTransport } from 'nodemailer';
import { superValidate } from 'sveltekit-superforms/server';

import type { Actions } from './$types';

import { env } from '$env/dynamic/private';
import { contactFormSchema } from '$lib/schemas';

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
		const admin = env.CONTACT_FORM_RECEIVE_EMAIL;
		// TODO: どっかに定数で持っておく
		const transporter = createTransport({
			service: 'Gmail',
			auth: {
				user: admin,
				pass: env.GOOGLE_APP_PASSWORD
			}
		});
		const { name, email, message } = form.data;

		transporter
			.sendMail({
				to: admin,
				subject: 'ポートフォリオサイトからのお問い合わせ',
				text: `${name}さま 内容：${message}`
			})
			.then(() => {
				transporter.sendMail({
					from: admin,
					to: email,
					subject: 'お問い合わせありがとうございます',
					text: 'お問い合わせありがとうございます本文'
				});
			});

		return { form };
	}
} satisfies Actions;
