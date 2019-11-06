import { Account, AccountController } from "./account.js";
// import Account from "./account.js";

test("checking account works", () => {
    const savingsAccount = new Account("Alex", 30);
    expect(savingsAccount.deposit(200)).toBe((230));
    expect(savingsAccount.withdraw(200)).toBe((30));
    expect(savingsAccount.withdraw(20)).toBe((10));
    expect(savingsAccount.balance()).toBe((10));
});

test("checking create account", () => {
    const newController = new AccountController();
    newController.createAccount("savings", 200);
    expect(newController.allAccounts[0].name).toBe(("savings"));
    expect(newController.allAccounts[0].currentBalance).toBe((200));
});

