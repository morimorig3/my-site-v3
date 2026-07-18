import { z } from 'zod';

import { ERROR_MAIL_ADDRESS, ERROR_MESSAGE_MAX_LENGTH, ERROR_REQUIRED } from './const';

/**
 * お問い合わせフォームのZodスキーマ
 */
export const contactFormSchema = z.object({
	name: z.string().min(1, { message: ERROR_REQUIRED }),
	email: z.string().min(1, { message: ERROR_REQUIRED }).email({ message: ERROR_MAIL_ADDRESS }),
	message: z
		.string()
		.min(1, { message: ERROR_REQUIRED })
		.max(1000, { message: ERROR_MESSAGE_MAX_LENGTH })
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

/**
 * ブログ記事frontmatterのZodスキーマ
 */
export const blogFrontmatterSchema = z.object({
	title: z.string().min(1),
	date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
	description: z.string().min(1),
	tags: z.array(z.string()).default([]),
	draft: z.boolean().default(false)
});
