/* Write the function that will create this output
*** the two values are not the same:
    p1 --> a
    p2 --> b
*** the two values are not the same:
    p1 --> 1
    p2 --> 2
*** the two values are not the same:
    p1 --> 2
    p2 --> 2
*/

// Function

const myFunction = {

    assertEquals: (num1, num2) => {
        if (num1 === num2) return true;
        console.log("the two values are not the same");
        return false;
    }
};

export default myFunction;

