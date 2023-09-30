import { describe, expect, it } from 'vitest';

import { formatDate } from '.';

describe('formatDate', () => {
	it('正常系', () => {
		expect(formatDate('2023-01-01T00:00:00Z')).toBe('2023/01/01');
		expect(formatDate('2023-12-31T00:00:00Z')).toBe('2023/12/31');
	});
	it('異常系', () => {
		expect(formatDate('')).toBe('');
		expect(formatDate('hogehoge')).toBe('');
	});
});
