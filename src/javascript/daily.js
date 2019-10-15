
// Daily Num 1 //

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


// Daily Num 2 //

/* Write a function that will receive an array.
The first entree in the array is the first name,
the second entree is the last name.
The array only has one person in it.
Create an evolveu email from the array.
*/

const myEmail = {
    
    makeEmailObj: () => {
        return makeEmailObj["fname"] + makeEmailObj["lname"] + "@evolveu.ca"
    }
};
  
export default myEmail;
