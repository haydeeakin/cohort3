

import functions from './daily.js'




// test loopStaff - October 22, 2019
const data = {
    staff: [
        { fname: "Jane", lname: "Smith", balance: 10 },
        { fname: "Liam", lname: "Henry", balance: 1000 },
        { fname: "Emma", lname: "Jones", balance: 1330 },
        { fname: "Olivia", lname: "Notly", balance: 310 },
        { fname: "Noah", lname: "Ho", balance: 503 },
        { fname: "William", lname: "Lee", balance: 520 },
        { fname: "Benjamin", lname: "Amis", balance: 150 },
    ],
    company: "EvolveU",
    city: "Calgary",
    prov: "Alberta"
};

// test loopStaff each / map - October 25, 2019
// loopStaff for Each
test('loopStaff using forEach', () => {
    const staffEmail = functions.loopStaffForEach(data.staff);
    expect(staffEmail[0])
        .toEqual("jane.smith@evolveu.ca");
    expect(staffEmail[3])
        .toEqual("olivia.notly@evolveu.ca");
    expect(staffEmail[6])
        .toEqual("benjamin.amis@evolveu.ca");
});

// loopStaff Map
test('loopStaff using Map', () => {
    const staffEmail = functions.loopStaffMap(data.staff);
    expect(staffEmail[0])
        .toEqual("jane.smith@evolveu.ca");
    expect(staffEmail[3])
        .toEqual("olivia.notly@evolveu.ca");
    expect(staffEmail[6])
        .toEqual("benjamin.amis@evolveu.ca");
});


// test loofStaff: in/of - October 24, 2019
// loopStaffIn
test('email builder using for in', () => {
    const staffEmail = functions.loopStaffIn(data.staff);
    expect(staffEmail[0])
        .toEqual("jane.smith@evolveu.ca");
    expect(staffEmail[3])
        .toEqual("olivia.notly@evolveu.ca");
    expect(staffEmail[6])
        .toEqual("benjamin.amis@evolveu.ca");
});

// loopStaffOf
test('email builder using for of', () => {
    const staffEmail = functions.loopStaffOf(data.staff);
    expect(staffEmail[0])
        .toEqual("jane.smith@evolveu.ca");
    expect(staffEmail[3])
        .toEqual("olivia.notly@evolveu.ca");
    expect(staffEmail[6])
        .toEqual("benjamin.amis@evolveu.ca");
});
// write test here

// test loopStaff - October 22, 2019 (this test uses the const "data")
test('email builder for company', () => {
    const staffEmail = functions.loopStaff(data.staff);
    expect(staffEmail[0])
        .toEqual("jane.smith@evolveu.ca");
    expect(staffEmail[3])
        .toEqual("olivia.notly@evolveu.ca");
    expect(staffEmail[6])
        .toEqual("benjamin.amis@evolveu.ca");
});

// test - More array work Oct 16 - 17
// Slice
test('use slice to extract elements', () => {
    const data = ["milk", "bread", "tomatoes", "cheese", "lettuce"];
    expect(functions.useSlice(data)).toEqual(["tomatoes", "cheese"]);
});

// Splice
test('use splice to extract elements', () => {
    const data = ["milk", "bread", "tomatoes", "cheese", "lettuce"];
    expect(functions.useSplice(data)).toEqual(["tomatoes", "cheese"]);
});

// forEach
test('use forEach to double each number of input array', () => {
    const data = [4, 7, 10, 22];
    expect(functions.useForEach(data)).toEqual([8, 14, 20, 44]);
});

// Map
test('use Map to double each number of input array', () => {
    const data = [4, 7, 10, 22];
    expect(functions.useMap(data)).toEqual([8, 14, 20, 44]);
});

// test - Prepare for Array Work - October 15, 2019
test('sorting array using for loop', () => {
    const data = [77, 47, 67, 7, 27, 17];
    expect(functions.forLoopToSort(data)).toEqual([77, 67, 47, 27, 17, 7]);
});

test('print new array using while loop', () => {
    const data = [11, 33, 44];
    expect(functions.makeWhileLoop(data)).toEqual(["This is 11", "This is 33", "This is 44"]);
});

test('print new array using while do loop', () => {
    const data = [11, 33, 44];
    expect(functions.makeDoWhile(data)).toEqual(["This is 11", "This is 33", "This is 44"]);
});

test('example using for in loop', () => {
    const data = {height: "170", weight: "65", age: "30"};
    expect(functions.makeForIn(data)).toEqual(["obj.height = 170", "obj.weight = 65", "obj.age = 30"]);
});

test('example using for of loop', () => {
    const data = [10, 20, 30, 40];
    expect(functions.makeForOf(data)).toEqual([11, 21, 31, 41]);
});

// test - makeEmailObj - Oct 11, 2019
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


