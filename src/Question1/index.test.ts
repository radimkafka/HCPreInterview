import { arraySum } from ".";

describe("question 1", () => {
  test("get question right", () => {
    const arr = [[3, 2], [1], [4, 12], [2, [3, 7]]];
    const expected = 34;
    const result = arraySum(arr);
    expect(result).toEqual(expected);
  });

  test("get question right with more nested arrays", () => {
    const arr = [
      [3, [2, 5, [4, 8]]],
      [1, [2, [3, 7]]],
      [4, 12],
      [2, [3, 7]]
    ];
    const expected = 63;
    const result = arraySum(arr);
    expect(result).toEqual(expected);
  });

  test("get question right for deeply nested arrays", () => {
    type ValueOrArray = number | Array<ValueOrArray>;
    const createDeeplyNestedArray = (depth: number): ValueOrArray => {
      let retval: ValueOrArray = [1];
      for (let i = 0; i < depth - 1; i++) {
        retval = [1, retval];
      }
      return retval;
    };

    const NUMBER_OF_ELEMENTS = 100000;
    const arr = createDeeplyNestedArray(NUMBER_OF_ELEMENTS);
    expect(arraySum(arr)).toEqual(NUMBER_OF_ELEMENTS);
  });
});
