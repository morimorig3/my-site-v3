import { TURNSTILE_SECRET_KEY } from '$env/static/private';

const VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

export const verifyTurnstile = async (token: string): Promise<boolean> => {
	const response = await fetch(VERIFY_URL, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			secret: TURNSTILE_SECRET_KEY,
			response: token
		})
	});

	const data = (await response.json()) as { success: boolean };
	return data.success;
};
