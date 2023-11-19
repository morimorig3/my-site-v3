import type { ContactFormSchemaType } from '$lib/schemas/types';

import { env } from '$env/dynamic/private';
import { TRANSPORTER } from '$lib';

/**
 * Gmailからtoへメールを送信する
 * @param to - 宛先
 * @param subject - タイトル
 * @param text - 本文
 */
const sendMail = (to: string, subject: string, text: string) =>
	TRANSPORTER.sendMail({
		to,
		subject,
		text
	});

/**
 * 問い合わせメールを自分に送信する
 */
export const sendReceiveMail = ({ name, email, message }: ContactFormSchemaType) =>
	sendMail(
		env.CONTACT_FORM_RECEIVE_EMAIL as string,
		'ポートフォリオサイトから問い合わせの受付',
		`以下の内容で問い合わせを受け付けました
        ====
        Name: ${name}
        メールアドレス: ${email}
        本文：
        ${message}
        ====`
	);
