import { createTransport } from 'nodemailer';

import type { Actions } from './$types';

export const actions = {
	default: async () => {
		const mail = '07mori.nto@gmail.com';
		/* cspell:disable-next-line */
		const pass = 'pvbg vhix ngby vici'; // TODO: 検証用のため後ほど変更する

		const transporter = createTransport({
			service: 'Gmail',
			auth: {
				user: mail,
				pass: pass
			}
		});

		await transporter.sendMail({
			from: mail,
			to: mail,
			subject: 'TestMail',
			text: 'This is a test mail'
		});
	}
} satisfies Actions;
