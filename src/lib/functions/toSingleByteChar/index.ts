/**
 * 全角英数字記号を半角英数字記号へ変換する
 * @param str - 対象文字列
 */
export const toSingleByteChar = (str: string) => {
	const regex = /[Ａ-Ｚａ-ｚ０-９！＂＃＄％＆＇（）＊＋，－．／：；＜＝＞？＠［＼］＾＿｀｛｜｝]/g;

	return (
		str
			.replace(regex, function (s) {
				return String.fromCharCode(s.charCodeAt(0) - 0xfee0);
			})
			.replace(/[‐－―]/g, '-')
			.replace(/[～〜]/g, '~')
			// eslint-disable-next-line no-irregular-whitespace
			.replace(/　/g, ' ')
	);
};
