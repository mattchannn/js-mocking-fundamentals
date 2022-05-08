const math = require("../../custom/math");

jest.mock("../../custom/math", () => {
  return {
    sum: jest.fn((arg1, arg2) => 10),
  };
});

test("sum return value with mock", () => {
  const sumResult = math.sum(1, 2);
  expect(sumResult).toBe(10);
});
