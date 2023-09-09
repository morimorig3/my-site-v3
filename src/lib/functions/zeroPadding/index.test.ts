import { it, expect } from 'vitest';

import { zeroPadding } from '.';

it('0埋め', () => {
	expect(zeroPadding(1)).toBe('01');
	expect(zeroPadding(1, 2)).toBe('01');
	expect(zeroPadding(1, 3)).toBe('001');
	expect(zeroPadding(10)).toBe('10');
	expect(zeroPadding(10, 2)).toBe('10');
	expect(zeroPadding(10, 3)).toBe('010');
});
