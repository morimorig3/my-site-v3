import { createTransport } from 'nodemailer';

import type { Actions } from './$types';

import { env } from '$env/dynamic/private';

export const prerender = false;

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const admin = env.CONTACT_FORM_RECEIVE_EMAIL;
		const name = data.get('name') as string; // TODO: 型ガードにする？
		const user = data.get('email') as string;
		const message = data.get('message');

		const transporter = createTransport({
			service: 'Gmail',
			auth: {
				user: admin,
				pass: env.GOOGLE_APP_PASSWORD
			}
		});

		transporter
			.sendMail({
				to: admin,
				subject: 'ポートフォリオサイトからのお問い合わせ',
				text: `${name}さま 内容：${message}`
			})
			.then(() => {
				transporter.sendMail({
					from: admin,
					to: user,
					subject: 'お問い合わせありがとうございます',
					text: 'お問い合わせありがとうございます本文'
				});
			});
	}
} satisfies Actions;
