
// Daily 1 //

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

// Daily 2 //

/* Write a function that will receive an array.
The first entree in the array is the first name,
the second entree is the last name.
The array only has one person in it.
Create an evolveu email from the array.
*/


const functions = {

    // Prepare for Array Work - October 15, 2019
    forLoopToSort: (arr) => {
        for (let i = 0; i < arr.length; i++){
            for (let j = i; j < arr.length; j++) {
                if (arr[i] < arr[j]) {
                    let temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            };
            
        };
        return arr;
    },

    whileLoop: (arr) => {
        
    }

    // makeEmailObj - Oct 11, 2019
    makeEmailObj: (obj) => {
        return `${obj.fname.toLowerCase()}.${obj.lname.toLowerCase()}@evolveu.ca`;

    },

    // makeEmailArr - October 9, 2019
    makeEmailArr: (arr) => {
        return `${arr[0].toLowerCase()}.${arr[1].toLowerCase()}@evolveu.ca`;
    },

    // assertEquals - October 7, 2019
    assertEquals: (num1, num2) => {
        if (num1 === num2) return true;
        console.log("the two values are not the same");
        return false;
    },

};

export default functions

