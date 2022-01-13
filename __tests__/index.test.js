const {
    sum,
    reversedString,
    getIndexOf,
    getLastIndexOf,
    getIncludes,
    getSomeEl
} = require("../src/index");

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


test('getIndexOf should return index of elem in array or -1 if it is not found', () => {
    expect(getIndexOf([3, 5, 10, 2], 5)).toBe(1)
    expect(getIndexOf([3, 5, 10, 2], 4)).toEqual(-1);
    expect(getIndexOf([3, 5, 10, 2], 10)).not.toEqual(-1);
});

test('getLastIndexOf should return last index of elem in array or -1 if no one is found', () => {
    expect(getLastIndexOf([3, 4, 6, 5, 4], 4)).toBe(4)
    expect(getLastIndexOf(['Dodo', 'Tiger', 'Penguin', 'Dodo'], 'Jerry')).toEqual(-1)
    expect(getLastIndexOf([3, 4, 6, 5, 4], 4)).not.toBe(-1);
})

test('getIncludes should return true or false depending on array contains the elem', () => {
    expect(getIncludes(["cat", "dog", "bat"], "cat")).toBe(true);
    expect(getIncludes([2, 5, 6, 9], 3)).toBeFalsy();
    expect(getIncludes([2, 5, 6, 9], 9)).toBeTruthy();
})


const even = (element) => element % 2 === 0;
const isBiggerThanFive = (el) => el > 5;

test("getSomeEl should return true if any elem of arr passes the test implemented by callback func", () => {
    expect(getSomeEl(even)).toBeFalsy();
    expect(getSomeEl(isBiggerThanFive)).toBeTruthy()
    expect(getSomeEl(isBiggerThanFive)).toEqual(true)
});