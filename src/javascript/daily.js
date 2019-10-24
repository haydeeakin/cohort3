




const functions = {
    
    // loopStaff - October 22, 2019
    loopStaff: (emailArray) => {
       var staffEmail = [];
        for (let item of emailArray){
            let newEmail = functions.makeEmailObj(item)
            staffEmail.push(newEmail);
        }
  
        return staffEmail;
    },
    


    // More array work - 16-17 October, 2019
    // Slice
    useSlice: (obj) => {
        var arr = [];
        var i = 0;
        arr = obj.slice(-3, -1);
        i++;
        return arr;
    },

    // Splice
    useSplice: (obj) => {
        var arr = [];
        var i = 0;
        arr = obj.splice(2, 2);
        i++;
        return arr;
    },

    // forEach
    // useForEach: (input) =>{
    //     var 


        
        // var arr =[];
        // var i = 0;
        // arr = obj.forEach(fun);
        // function fun(item, index) {

    //     }
    // }


    // Map
    // useMap: () => {

        
    // },


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

    // Do while loop
    makeDoWhile: (arr) => {
        var arr1 = [];
        var i = 0;
        do {
            let temp = "This is " + arr[i];
            arr1[i] = temp;
            i++;
        }
        while (i < arr.length);
        return arr1;
    },

    // For in loop
    makeForIn: (obj) => {
        var obj1 = [];
        var i = 0;
        for (const prop in obj) {
            obj1[i] = `obj.${prop} = ${obj[prop]}`;
            i++;
        }
        return obj1
    },

    // For of loop
    makeForOf: (iterable) => {
        var itr1 = [];
        var i = 0;
        for (const value of iterable) {
            itr1[i] = value += 1;
            i++;
        }
        return itr1
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

