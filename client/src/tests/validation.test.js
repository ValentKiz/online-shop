import { checkName } from "../reducers/validation";
import { validEmail } from "../reducers/validation";

const data = [{name: 'Acer', id: 1}, {name: 'Samsung', id: 2}, {name: 'Xiaomi', id: 3}, {name: 'Apple', id: 4}];

describe('TEST name validation', () => {
	test('right input', () => {
		expect(checkName('qwerty', data)).toStrictEqual(['Checked', 'qwerty']);
		expect(checkName('123456', data)).toStrictEqual(['Checked', '123456']);
		expect(checkName('LG', data)).toStrictEqual(['Checked', 'LG']);
	});

	test('not-string input', () => {
		expect(checkName(null, data)).toStrictEqual(['Error', 'Значение не является строкой']);
		expect(checkName(true, data)).toStrictEqual(['Error', 'Значение не является строкой']);
		expect(checkName(false, data)).toStrictEqual(['Error', 'Значение не является строкой']);
		expect(checkName(['x', 'y'], data)).toStrictEqual(['Error', 'Значение не является строкой']);
		expect(checkName(undefined, data)).toStrictEqual([ 'Error', 'Значение не является строкой']);
		expect(checkName(123, data)).toStrictEqual(['Error', 'Значение не является строкой']);
	});

	test('empty input', () => {
		expect(checkName('', data)).toStrictEqual(['Error', 'Пустое значение']);
		expect(checkName('   ', data)).toStrictEqual(['Error', 'Пустое значение']);
		expect(checkName(undefined, data)).toStrictEqual([ 'Error', 'Значение не является строкой']);
		expect(checkName(null, data)).toStrictEqual(['Error', 'Значение не является строкой']);
	});

	test('repeat names', () => {
		expect(checkName('Samsung', data)).toStrictEqual(['Error', 'Такое название уже существует']);
		expect(checkName('saMSung', data)).toStrictEqual(['Error', 'Такое название уже существует']);
		expect(checkName('apple', data)).toStrictEqual(['Error', 'Такое название уже существует']);
	});
 
	test('function returns Array type(array need for right render)', () => {
		expect(Array.isArray(checkName('qwerty', data))).toBe(true);
		expect(Array.isArray(checkName('', data))).toBe(true);
		expect(Array.isArray(checkName('   ', data))).toBe(true);
		expect(Array.isArray(checkName(123, data))).toBe(true);
		expect(Array.isArray(checkName('12356', data))).toBe(true);
		expect(Array.isArray(checkName(['x', 'y'], data))).toBe(true);
		expect(Array.isArray(checkName(undefined, data))).toBe(true);
		expect(Array.isArray(checkName(null, data))).toBe(true);
		expect(Array.isArray(checkName(true, data))).toBe(true);
		expect(Array.isArray(checkName(false, data))).toBe(true);
		expect(Array.isArray(checkName('apple', data))).toBe(true);
		expect(Array.isArray(checkName('Samsung', data))).toBe(true);
	});
})

describe('test e-mail validation', () => {
	test('right input', () => {
		expect(validEmail('user@yandex.ru')).toStrictEqual(true);
		expect(validEmail('login@gmail.com')).toStrictEqual(true);
		expect(validEmail('UseR@Gmail.COM')).toStrictEqual(true);
		expect(validEmail('123@gmail.COM')).toStrictEqual(true);
	});
	test('wrong input', () => {
		expect(validEmail('@yandex.ru')).toStrictEqual(false);
		expect(validEmail('user.ru')).toStrictEqual(false);
		expect(validEmail('user@mail')).toStrictEqual(false);
		expect(validEmail(' ')).toStrictEqual(false);
		expect(validEmail('   ')).toStrictEqual(false);
		expect(validEmail(null)).toStrictEqual(false);
		expect(validEmail(undefined)).toStrictEqual(false);
	})
})