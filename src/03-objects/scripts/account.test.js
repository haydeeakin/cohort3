import Account from "./account.js";

test("checking account works", () => {
    const savingsAccount = new Account("Alex", 30);
    expect(savingsAccount.deposit(200)).toBe((230));
    expect(savingsAccount.withdraw(200)).toBe((30));
    expect(savingsAccount.withdraw(20)).toBe((10));
    expect(savingsAccount.balance()).toBe((10));
});


