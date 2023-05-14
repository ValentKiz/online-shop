import { pagination } from "../components/Pages";

describe('TEST pagination', () => {
	test('function returns right answer', () => {
		expect(pagination(1000, 10)).toStrictEqual([
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
			13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
			25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
			37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48,
			49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
			61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72,
			73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84,
			85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96,
			97, 98, 99, 100
		]);
		expect(pagination(50, 10)).toStrictEqual([1, 2, 3, 4, 5]);
		expect(pagination(33, 10)).toStrictEqual([1, 2, 3, 4]);
		expect(pagination(0, 10)).toStrictEqual([]);
		expect(pagination(1, 10)).toStrictEqual([1]);
		expect(pagination(9, 10)).toStrictEqual([1]);
		expect(pagination('25', 10)).toStrictEqual([1, 2, 3]);
		expect(pagination(-20, 10)).toStrictEqual([]);
		expect(pagination(null, 10)).toStrictEqual([]);
		expect(pagination(undefined, 10)).toStrictEqual([]);
		//проверить значения лимитов
	});

	test('function returns Array type(array need for right render)', () => {
		expect(Array.isArray(pagination(50, 10))).toBe(true);
		expect(Array.isArray(pagination(33, 10))).toBe(true);
		expect(Array.isArray(pagination(0, 10))).toBe(true);
		expect(Array.isArray(pagination(1, 10))).toBe(true);
		expect(Array.isArray(pagination(9, 10))).toBe(true);
		expect(Array.isArray(pagination('25', 10))).toBe(true);
		expect(Array.isArray(pagination(-20, 10))).toBe(true);
		expect(Array.isArray(pagination(null, 10))).toBe(true);
		expect(Array.isArray(pagination(undefined, 10))).toBe(true);
	});
})