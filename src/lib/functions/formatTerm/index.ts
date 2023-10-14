import { transformDateString } from '../transformDateString';

import type { Term } from '$lib/server/types';

/**
 * Term型を期間文字列に変換する
 * ex. from: 2020-04, to: 2021-04 => Apr. 2020 ~ Apr. 2021（1年）
 */
export const formatTerm = ({ from, to }: Term) => {
	const hasToLabel = !!to;

	const fromLabel = transformDateString(from); // input: 2020-04 output:Apr. 2020
	const toLabel = hasToLabel ? transformDateString(to) : '現在';

	const toTimeStamp = hasToLabel ? new Date(to).getTime() : new Date().getTime();
	const fromTimeStamp = new Date(from).getTime();

	// 経過日数
	const elapsedDays = (toTimeStamp - fromTimeStamp) / 1000 / 60 / 60 / 24;

	// 経過年数
	const elapsedYears = Math.floor(elapsedDays / 365);
	const formattedYear = elapsedYears ? `${elapsedYears}年` : '';

	// 経過年数を除いた経過月の計算
	const restOfDays = elapsedYears ? elapsedDays % (elapsedYears * 365) : elapsedDays;
	const elapsedMonths = Math.floor(restOfDays / 30);

	const formattedMonth = elapsedMonths ? `${elapsedMonths}ヶ月` : '';
	const term = formattedYear || formattedMonth ? `（${formattedYear}${formattedMonth}）` : '';

	return `${fromLabel} ~ ${toLabel}${term}`;
};
