import { expect, it } from 'vitest';

import { toSingleByteChar } from '.';

it('toSingleByteChar', () => {
	expect(toSingleByteChar('Ｒｏｂｅｒｔ　Ｃ．Ｍａｒｔｉｎ')).toBe('Robert C.Martin');
	expect(toSingleByteChar('０１２３４５６７８９')).toBe('0123456789');
	expect(toSingleByteChar('Robert C.Martin')).toBe('Robert C.Martin');
	expect(toSingleByteChar('0123456789')).toBe('0123456789');
	expect(toSingleByteChar('ボブおじさん')).toBe('ボブおじさん');
});
