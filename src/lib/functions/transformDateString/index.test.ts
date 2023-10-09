import { describe, expect, it } from 'vitest';

import { transformDateString } from '.';

describe('transformDateString', () => {
	it('正常系', () => {
		expect(transformDateString('2020-01')).toBe('Jan. 2020');
		expect(transformDateString('2020-02')).toBe('Feb. 2020');
		expect(transformDateString('2020-03')).toBe('Mar. 2020');
		expect(transformDateString('2020-04')).toBe('Apr. 2020');
		expect(transformDateString('2020-05')).toBe('May. 2020');
		expect(transformDateString('2020-06')).toBe('Jun. 2020');
		expect(transformDateString('2020-07')).toBe('Jul. 2020');
		expect(transformDateString('2020-08')).toBe('Aug. 2020');
		expect(transformDateString('2020-09')).toBe('Sep. 2020');
		expect(transformDateString('2020-10')).toBe('Oct. 2020');
		expect(transformDateString('2020-11')).toBe('Nov. 2020');
		expect(transformDateString('2020-12')).toBe('Dec. 2020');
	});
	it('空文字', () => {
		expect(transformDateString('')).toBe('');
	});
	it('フォーマット外文字列', () => {
		expect(transformDateString('テスト')).toBe('');
		expect(transformDateString('テスト-テスト')).toBe('');
	});
});
