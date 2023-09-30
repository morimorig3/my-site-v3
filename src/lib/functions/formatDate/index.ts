/**
 * ISO8601形式の日付をYYYY/MM/DD形式にフォーマット
 */
export const formatDate = (string: string) => {
	const date = new Date(string);
	if (isInvalidDate(date)) return '';

	return date.toLocaleDateString('ja-JP', {
		year: 'numeric',
		month: '2-digit',
		day: '2-digit'
	});
};

const isInvalidDate = (date: Date) => Number.isNaN(date.getTime());
