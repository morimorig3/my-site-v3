import { describe, expect, it } from 'vitest';

import { formatTerm } from '.';

describe('formatTerm', () => {
	it('正常系', () => {
		expect(
			formatTerm({
				from: '2020-04',
				to: '2020-10'
			})
		).toBe('Apr. 2020 ~ Oct. 2020（6ヶ月）');
		expect(
			formatTerm({
				from: '2020-04',
				to: '2021-04'
			})
		).toBe('Apr. 2020 ~ Apr. 2021（1年）');
		expect(
			formatTerm({
				from: '2020-04',
				to: '2021-05'
			})
		).toBe('Apr. 2020 ~ May. 2021（1年1ヶ月）');
		expect(
			formatTerm({
				from: '2020-04',
				to: '2021-06'
			})
		).toBe('Apr. 2020 ~ Jun. 2021（1年2ヶ月）');
		expect(
			formatTerm({
				from: '2020-04',
				to: '2021-07'
			})
		).toBe('Apr. 2020 ~ Jul. 2021（1年3ヶ月）');
		expect(
			formatTerm({
				from: '2020-04',
				to: '2021-08'
			})
		).toBe('Apr. 2020 ~ Aug. 2021（1年4ヶ月）');
		expect(
			formatTerm({
				from: '2020-04',
				to: '2022-01'
			})
		).toBe('Apr. 2020 ~ Jan. 2022（1年9ヶ月）');
		expect(
			formatTerm({
				from: '2020-04',
				to: '2022-02'
			})
		).toBe('Apr. 2020 ~ Feb. 2022（1年10ヶ月）');
		expect(
			formatTerm({
				from: '2020-04',
				to: '2022-03'
			})
		).toBe('Apr. 2020 ~ Mar. 2022（1年11ヶ月）');
		expect(
			formatTerm({
				from: '2020-04',
				to: '2022-04'
			})
		).toBe('Apr. 2020 ~ Apr. 2022（2年）');
	});
});
