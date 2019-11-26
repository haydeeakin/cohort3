import { Account, AccountController } from "./account.js";
// import Account from "./account.js";

test("checking account works", () => {
    const savingsAccount = new Account("savings", 30);
    expect(savingsAccount.deposit(200)).toBe((230));
    expect(savingsAccount.withdraw(200)).toBe((30));
    expect(savingsAccount.withdraw(20)).toBe((10));
    expect(savingsAccount.balance()).toBe((10));
});

test("checking account controler", () => {
    const newClient = new AccountController();
    newClient.createAccount("savings", 200);
    expect(newClient.allAccounts.length).toBe(1);
    expect(newClient.allAccounts[0].accountName).toBe(("savings"));
    expect(newClient.allAccounts[0].currentBalance).toBe((200));
    newClient.createAccount("checking", 1000);
    expect(newClient.allAccounts.length).toBe(2);
    expect(newClient.totalBalance()).toEqual(1200);
    // newClient.removeAccount("checking");
    // expect(newClient.allAccounts.length).toBe(1);
    // expect(newClient.totalBalance()).toEqual(200);
    expect(newClient.lowestBalance()).toEqual({"accountName": "savings", "currentBalance": 200});
    expect(newClient.highestBalance()).toEqual({"accountName": "checking", "currentBalance": 1000});
});

