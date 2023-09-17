import { sum } from "../sum";

test("Sum of the two inputs should return the addition value", () => {
  const result = sum(4, 7);

  //Assertion
  expect(result).toBe(11);
});
