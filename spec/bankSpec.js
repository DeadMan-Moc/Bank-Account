describe("Bank Account Tests", () => {
    
    it("Should return updated balance", () => {
        const result = new BankAccount(1000,12,50);
        let updatedBal = result.finishMonth();
        expect(updatedBal).toEqual(960);
    });

    it("Should withdraw", () => {
        const result = new BankAccount(1000,12,50);
        expect(result.withdraw(40)).toEqual(960);
    });

    it("should be able to deposit", () => {
        const result = new BankAccount(1000,12,50);
        expect(result.deposit(40)).toEqual(1040);
    });

});

describe("Bank", () => {
    it("Should transfer to a different account", () => {
        let anotherAccount1 = new Bank (1000, 12, 50, 1234567891);
        expect(anotherAccount1.deposit(1234567891, 40)).toBe(1040);
    });
});

describe("Customer", () =>{
    it("Withdraw using costomer password", () => {
        let customer1 = new Customer(1000, 12, 50, 1234567890, "GGhoo8888");
        expect(customer1.withdraw(1234567890, 40, "GGhoo8888")).toBe(960);
    });

    it("Deposit using costomer password", () => {
        let customer1 = new Customer(1000, 12, 50, 1234567890, "GGhoo8888");
        expect(customer1.withdraw(1234567890, 40, "GGhoo8888")).toBe(1004);
    });

    it("Transfer using costomer password", () => {
        let customer1 = new Customer(1000, 12, 50, 1234567890, "GGhoo8888");
        let customer2 = new Customer(1000, 12, 50, 0987654321, "GGhoo8777");
        expect(customer2.withdraw(1234567890, 0987654321, 40, "GGhoo8888")).toBe(960);
    })
})