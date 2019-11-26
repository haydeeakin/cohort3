




// Destructuring-assignment - November 26, 2019
class AccountController {
    constructor() {
        this.allAccounts = [];
    }
    //Here I demonstrate a way to destructrue (not a very eficient solution,
    // for this case but just to demo the concept)
    createAccount(accountName, currentBalance) {
        let newAccount = new Account(accountName, currentBalance);
        // this.allAccounts.push(newAccount);
        this.allAccounts = [...this.allAccounts, newAccount];
    }

    removeAccount(accountName) {
        this.allAccounts = this.allAccounts.filter((item) => item.accountName != accountName);
    }
    
    totalBalance() {
        return this.allAccounts.reduce((acc, item ) => acc + item.currentBalance, 0);
    }

    lowestBalance() {
        this.allAccounts.sort((a, b) => a.currentBalance - b.currentBalance);
        return this.allAccounts[0];
    }

    highestBalance() {
        this.allAccounts.sort((a, b) => b.currentBalance - a.currentBalance);
        return this.allAccounts[0];
    }
};



const functions = {
    
    // More Array Exercises - October 29, 2019
    // Find balance
    findTotalBalance: (item) => {
        let total = item.reduce((acc, curr) => acc + curr.balance, 0);
        return total
        
    },

    findAverage: (item) => {
        let totalBal = functions.findTotalBalance(item);
        let aver = totalBal / item.length;
        return Number(aver.toFixed(2));
    },



    // loopStaff forEach / map - October 25, 2019
    // loopStaff forEach
    loopStaffForEach: (obj) => {
        let email = [];
        obj.forEach((prop) => {
            email.push(functions.makeEmailObj(prop));
        });
        return email;
    },

    // loopStaff map
    loopStaffMap: (obj) => {
        const email = obj.map(prop => functions.makeEmailObj(prop));
        return email;
    },

    // // loopStaff: in/of - October 24, 2019
    // // For in loop
    loopStaffIn: (obj) => {
        let email = [];
        for (const i in obj) {
            email.push(functions.makeEmailObj(obj[i]));
        }
        return email
    },

    // For of loop
    loopStaffOf: (obj) => {
        let newArray = [];
        for (const prop of obj) {
            newArray.push(functions.makeEmailObj(prop));
        }
        return newArray
    },

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
    useForEach: (input) => {
        const double = [];
        input.forEach((num) => {
            double.push(num * 2);
        });
        return double;
    },

    // Map
    useMap: (array) => {
        const mapArray = array.map((num) => {
            return num * 2;
        });
        return mapArray;
    },

    // Reduce
    useReduce: (array) => {
        const reduceArray = array.reduce((acc, cur) => acc + cur);
        return reduceArray;
    },

    // Filter
    useFilter: (array) => {
        // const filteredNum = array.filter();
        const filteredNum = array.filter(num => (num > 19 && num <60));
        return filteredNum;

    },

    // Sort
    useSort: (array) => {
        const sortedDesc = array.sort((a, b) => (b-a));
        return sortedDesc;
    },

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

