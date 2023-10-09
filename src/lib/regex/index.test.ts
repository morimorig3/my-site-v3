import { describe, expect, it } from 'vitest';

import { regexYearMonth } from '.';

describe('regexYearMonth', () => {
	it('正常系', () => {
		expect(regexYearMonth.test('2020-04')).toBeTruthy();
		expect(regexYearMonth.test('0000-01')).toBeTruthy();
		expect(regexYearMonth.test('9999-12')).toBeTruthy();
	});
	it('異常系', () => {
		expect(regexYearMonth.test('')).toBeFalsy();
		expect(regexYearMonth.test('0000-00')).toBeFalsy();
		expect(regexYearMonth.test('9999-99')).toBeFalsy();
		expect(regexYearMonth.test('99-9999')).toBeFalsy();
		expect(regexYearMonth.test('1234567890')).toBeFalsy();
		expect(regexYearMonth.test('あいうえお')).toBeFalsy();
	});
});
