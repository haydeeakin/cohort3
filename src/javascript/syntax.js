// define attributes / variables
// number
// string
// boolean
// array
// dictionary / objects
// undefined
// sample if / else
// functions
// parameters
// returns
// arrays
// add to the front
// add to the end
// update values
// loops 
// for
// for/in
// while
// do while
// forEach (with array and function)
// Objects / Dictionaries
// declare object
// lookup key to retrieve value

// const funcSyntax = {
//   xNum: () => console.log("we are in syntax")
// subtract: (num1, num2) => {
//     return num1 - num2;
// }
//   rUNum: () => {
//     return 0;
//   }
// };

// for (initialization; condition; final expression) {
    // code to be executed
// }

// Check if input is a number
const functions = {
    //Check if input is a number
    isNumber: num => {
      if (typeof num == "number") {
        return "true";
      }
    },
    //Check if input is a string
    isString: text => {
      if (typeof text == "string") {
        return "true";
      }
    },
    //Check if input is a boolean
    isBoolean: boo => {
      if (typeof boo == "boolean") {
        return "true";
      }
    },
    //Check if input is an array
    isArr: arr => {
      if (Array.isArray(arr) == true) {
        return true;
      }
    },
    //Check if input is an object
    isObj: obj => {
      if (typeof { a: 1 } === "object") {
        return true;
      }
    },
    //Check if input is undefined
    isUndef: val => {
      if (typeof undefined === "undefined") {
        return true;
      }
    },
    //Check if/else
    isIfElse: value => {
      if ((value >= 6) & (value <= 12)) {
        return "end of second half of the year";
      } else if ((value >= 1) & (value < 6)) {
        return "first half of the year";
      } else {
        return "Not a month of the year";
      }
    },
    //Check functions parameters
    isParam: param => {
      return param;
    },
    //Check functions returns
    isReturn: val1 => {
      let ret = val1 + 2;
      return ret;
    },
    //Check arrays add to the front
  
    isAddFront: addFront => {
      const myArray = [100, 150, 200];
      myArray.unshift(addFront);
      return myArray;
    },
  
    //Check arrays add to the end
  
    isAddEnd: addEnd => {
      const anArray = [100, 150, 200];
      anArray.push(addEnd);
      return anArray;
    },
  
    //Check arrays update values
  
    isUpdate: addUpdate => {
      const anArray = [100, 150, 200];
      anArray[0] = addUpdate;
      return anArray;
      // return 0;
    },
  
    //Check loops for
  
    forLoop: () => {
      let sum = 0;
      for (let i = 1; i < 6; i++) {
        sum += i;
      }
      // return 0;
      return sum;
    },
  
    // Check loops for in
    loopForIn: () => {
      const person = { fname: "Alex", lname: "Smith", age: 35 };
      let result = "";
      let i;
      for (i in person) {
        result += person[i] + " ";
      }
      //return 0;
      return result;
    },
  
    // Check While Loop
    loopWhile: () => {
      let loopResult = "";
      let i = 0;
      while (i < 5) {
        loopResult += i + ", ";
        i++;
      }
      // return 0;
      return loopResult;
    },
  
    // Check Do While Loop
    loopDoWhile: () => {
      var doResult = "";
      var i = 0;
      do {
        doResult += i + ", ";
        i++;
      } while (i < 5);
      // return 0;
      return doResult;
    },
  
    // Check forEach
    checkForEach: () => {
      let result = "";
      const animals = ["insect", "cat", "dog"];
      animals.forEach(element => {
        result += element + ", ";
      });
      // return 0;
      return result;
    },
  
    //check Object
    checkObject: anObject => {
      let result = "";
      result = anObject.name + " is " + anObject.age;
      return result;
      // return 0;
    },
  
    //check lookup key to retrieve a value
    checkLookUpKey: key => {
      let result = "";
      const person = { name: "Bob", age: 40 };
      result = person[key];
      return result;
      // return 0;
    }
  };
  
  export default functions;

