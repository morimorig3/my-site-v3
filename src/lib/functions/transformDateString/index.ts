import { MONTH_STRING_MAP } from './const';

import { regexYearMonth } from '$lib/regex';

/**
 * YYYY-MMの文字列を 英月. YYYY の形式に変換する
 * ex. 2020-04 => Apr. 2020
 */
export const transformDateString = (date: string) => {
	if (!regexYearMonth.test(date)) return '';
	const [year, month] = date.split('-');
	const monthNumber = Number(month);

	if (!isMonthType(monthNumber)) return '';
	return `${MONTH_STRING_MAP[monthNumber]}. ${year}`;
};

type MonthType = keyof typeof MONTH_STRING_MAP;

function isMonthType(monthNumber: number): monthNumber is MonthType {
	if (Number.isNaN(monthNumber)) return false;
	if (monthNumber < 1 || monthNumber > 12) return false;
	return true;
}
