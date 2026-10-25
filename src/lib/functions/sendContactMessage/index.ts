import type { ContactFormSchemaType } from '$lib/schemas/types';

import { PUBLIC_WEB3FORMS_ACCESS_KEY } from '$env/static/public';

const WEB3FORMS_SUBMIT_URL = 'https://api.web3forms.com/submit';

/**
 * Web3Forms経由で問い合わせ内容を自分宛てに送信する
 * @param botcheck - ハニーポット欄の入力有無（trueの場合Web3Forms側で破棄される）
 */
export const sendContactMessage = async (
	{ name, email, message }: ContactFormSchemaType,
	botcheck: boolean
): Promise<boolean> => {
	try {
		const response = await fetch(WEB3FORMS_SUBMIT_URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
			body: JSON.stringify({
				access_key: PUBLIC_WEB3FORMS_ACCESS_KEY,
				subject: 'ポートフォリオサイトから問い合わせの受付',
				from_name: 'morimorig3.com',
				name,
				email,
				message,
				botcheck
			})
		});
		const data = (await response.json()) as { success: boolean };
		return data.success;
	} catch {
		return false;
	}
};
