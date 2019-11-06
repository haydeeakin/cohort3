class Account {

    constructor(name, initialBalance) {
        this.name = name;
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

    createAccount(name, currentBalance) {
        let newAccount = new Account(name, currentBalance);
        this.allAccounts.push(newAccount);
    }

    
};

// export default Account;
export { Account, AccountController };