import { z } from 'zod';

import { ERROR_MAIL_ADDRESS, ERROR_REQUIRED } from './const';

/**
 * お問い合わせフォームのZodスキーマ
 */
export const contactFormSchema = z.object({
	name: z.string().min(1, { message: ERROR_REQUIRED }),
	email: z.string().email({ message: ERROR_MAIL_ADDRESS }).min(1, { message: ERROR_REQUIRED }),
	message: z.string().min(1, { message: ERROR_REQUIRED })
});
