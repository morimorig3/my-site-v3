import type { contactFormSchema } from '.';
import type { z } from 'zod';

export type ContactFormSchemaType = z.infer<typeof contactFormSchema>;
