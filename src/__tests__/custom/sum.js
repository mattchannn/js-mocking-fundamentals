const math = require("../../custom/math");

/* This test is basically used for verifying whether the jest object affects the one in add.js */
test("sum return value with spyOn", () => {
  const sumFun = jest.spyOn(math, "sum");
  // override the original implementation
  sumFun.mockImplementation((arg1, arg2) => arg1 - arg2);
  const sumResult = sumFun(1, 2);
  expect(sumResult).toBe(-1);
});

test("subtract return value without any mocking", () => {
  const subtractResult = math.subtract(1, 2);
  expect(subtractResult).toBe(-1);
});
