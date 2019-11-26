class Account {

    constructor(accountName, initialBalance) {
        this.accountName = accountName;
        this.currentBalance = initialBalance;
    }

    deposit(amount) {
        this.currentBalance += amount;
        return this.currentBalance;
    }

    withdraw(amount) {
        this.currentBalance -= amount;
        return this.currentBalance;
        
    }

    balance(amount) {
        return this.currentBalance;
    }
};

class AccountController {
    constructor() {
        this.allAccounts = [];
    }

    createAccount(accountName, currentBalance) {
        let newAccount = new Account(accountName, currentBalance);
        this.allAccounts.push(newAccount);
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

// export default Account;
export { Account, AccountController };
