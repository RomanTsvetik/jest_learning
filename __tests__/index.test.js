const { sum, reversedString } = require('../src/index')

test('Sum should return sum of two values', () => {
    expect(sum(1, 3)).toBe(4)
    expect(sum(1, 3)).toEqual(4)
})

test("Sum should return value correctly comparing to other", () => {
    expect(sum(2, 3)).toBeGreaterThan(4)
    expect(sum(2, 3)).toBeGreaterThanOrEqual(5)
    expect(sum(2, 3)).toBeLessThan(10)
    expect(sum(2, 3)).toBeGreaterThanOrEqual(5)
})

test("reversedString", () => {
    expect(reversedString("hello")).toEqual("olleh");
    expect(reversedString("")).toEqual("");
});