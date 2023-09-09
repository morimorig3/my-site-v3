export const zeroPadding = (number: number, maxLength = 2) =>
	String(number).padStart(maxLength, '0');
