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
        return this.currentBalance
    }
};

export default Account
