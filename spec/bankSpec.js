describe("Bank Account Tests", () => {
    
    it("Should return updated balance", () => {
        const x = new BankAccount(1000,12,50);
        expect(x.finishMonth()).toEqual(960);
    });

    it("Should withdraw", () => {
        const x = new BankAccount(1000,12,50);
        expect(x.withdraw(40)).toEqual(960);
    });

    it("should be able to deposit", () => {
        const x = new BankAccount(1000,12,50);
        expect(x.deposit(40)).toEqual(1040);
    });

});
