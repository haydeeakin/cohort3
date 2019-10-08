
import myFunction from './daily.js'

test('Compare numbers', () => {
    expect(myFunction.assertEquals("a","b")).toBe(false);
    expect(myFunction.assertEquals("a","a")).toBe(true);
    expect(myFunction.assertEquals(1,2)).toBe(false);
    expect(myFunction.assertEquals(2,2)).toBe(true);
    expect(myFunction.assertEquals("2",2)).toBe(false);
});

// assertEquals("This value","This value");



