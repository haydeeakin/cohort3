
// Daily test 1 //

import myFunction from './daily.js'

test('Compare numbers', () => {
    expect(myFunction.assertEquals("a","b")).toBe(false);
    expect(myFunction.assertEquals("a","a")).toBe(true);
    expect(myFunction.assertEquals(1,2)).toBe(false);
    expect(myFunction.assertEquals(2,2)).toBe(true);
    expect(myFunction.assertEquals("2",2)).toBe(false);
});

// assertEquals("This value","This value");

// Daily test 2 //

import myEmail from './daily.js'

test('email builder from an object / map', () => {
    const name = { fname: 'first', lname: 'last' };
    // expect(myEmail(name)).toEqual("first.last@evolveu.ca");
    // expect(myEmail.makeEmailObj({ fname: 'First', lname: 'Last' }))
    //     .toEqual("first.last@evolveu.ca");
    // expect(myEmail.makeEmailObj({ fname: "Bill", lname: "Smith" }))
    //     .toEqual("bill.smith@evolveu.ca");
});
