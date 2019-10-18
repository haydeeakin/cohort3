


const functions = {

    // Prepare for Array Work - October 15, 2019
    // For loop
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

    // While loop
    makeWhileLoop: (arr) => {
        var i = 0;
        var arr1 = [];
        while (i < arr.length) {
            let temp = "This is " + arr[i];
            arr1[i] = temp;
            i++;
            };
        return arr1;
    },

    // Do while
    makeDoWhile: (arr) => {
        var i = 0;
        var arri = [];
        do {
            let temp = "This is " + arr1[i];
            arr1[i] = temp;
            i++;
        }
        while (i < arr.length);
        return arr1;
    },


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

