

// Daily test 1 //

import functions from './daily.js'

// test - Prepare for Array Work - October 15, 2019

test('sorting array using for loop', () => {
    const data = [77, 47, 67, 7, 27, 17]
    expect(functions.forLoopToSort(data)).toEqual([77, 67, 47, 27, 17, 7]);
  });

test('print new array using while loop', () => {
    const data = [11, 33, 44]
    expect(functions.makeWhileLoop(data)).toEqual(["This is 11", "This is 33", "This is 44"]);
});

test('email builder from an object / map', () => {
    const name = { fname: 'first', lname: 'last' };
    expect(functions.makeEmailObj(name))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailObj({ fname: 'First', lname: 'Last' }))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailObj({ fname: "Bill", lname: "Smith" }))
        .toEqual("bill.smith@evolveu.ca");
});

// test - makeEmailArr - October 9, 2019

test('email builder from an array', () => {
    const name = ["first", "last"];
    expect(functions.makeEmailArr(name))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailArr(["First", "Last"]))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailArr(["Bill", "Smith"]))
        .toEqual("bill.smith@evolveu.ca");
});

// test - assertEquals - October 7, 2019

test('Compare numbers', () => {
    expect(functions.assertEquals("a","b")).toBe(false);
    expect(functions.assertEquals("a","a")).toBe(true);
    expect(functions.assertEquals(1,2)).toBe(false);
    expect(functions.assertEquals(2,2)).toBe(true);
    expect(functions.assertEquals("2",2)).toBe(false);
    expect(functions.assertEquals("3","3")).toBe(true);

});


