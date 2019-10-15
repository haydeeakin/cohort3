// import xxx from "./syntax";

// test("numbers working", () => {
//   console.log("we are in syntax");

//   expect(xxx.rUNum()).toBe(123);
// });

import functions from "./syntax";

test("Check if number", () => {
  expect(functions.isNumber(55)).toBe("true");
});

test("Check if string", () => {
  expect(functions.isString("string")).toBe("true");
});

test("Check if boolean", () => {
  expect(functions.isBoolean(true)).toBe("true");
});
test("Check if array", () => {
  expect(functions.isArr([1, 2, 3])).toBe(true);
});
test("Check if object", () => {
  expect(functions.isObj({ name: "will", age: 20 })).toBe(true);
});
test("Check if undefined", () => {
  expect(functions.isUndef()).toBe(true);
});
test("Check condition", () => {
  expect(functions.isIfElse(4)).toBe("first half of the year");
});
test("Check parameter", () => {
  expect(functions.isParam(20)).toBe(20);
});
test("Check returns", () => {
  expect(functions.isReturn(7)).toBe(9);
});
test("Check array add front", () => {
  expect(functions.isAddFront(5)).toEqual([5, 100, 150, 200]);
});
test("Check array add end", () => {
  expect(functions.isAddEnd(5)).toEqual([100, 150, 200, 5]);
});
test("Check array add update", () => {
  expect(functions.isUpdate(5)).toEqual([5, 150, 200]);
});
test("Check loop for, count the sum of numbers from 1 to 5", () => {
  expect(functions.forLoop()).toEqual(15);
});
test("Check loop for in", () => {
  expect(functions.loopForIn()).toEqual("Alex Smith 35 ");
});
test("Check while loop", () => {
  expect(functions.loopWhile()).toEqual("0, 1, 2, 3, 4, ");
});

test("Check do while loop", () => {
  expect(functions.loopDoWhile()).toEqual("0, 1, 2, 3, 4, ");
});

test("Check forEach", () => {
  expect(functions.checkForEach()).toEqual("insect, cat, dog, ");
});

test("Check Object", () => {
  expect(functions.checkObject({ name: "Tom", age: 35 })).toEqual("Tom is 35");
});

test("Check lookUp key", () => {
  expect(functions.checkLookUpKey("name")).toEqual("Bob");
});
