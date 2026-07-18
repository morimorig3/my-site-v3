import type { blogFrontmatterSchema, contactFormSchema } from '.';
import type { z } from 'zod';

export type ContactFormSchemaType = z.infer<typeof contactFormSchema>;
export type BlogFrontmatter = z.infer<typeof blogFrontmatterSchema>;
