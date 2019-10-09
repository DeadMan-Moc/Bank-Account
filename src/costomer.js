let MyBank = require("./bank");
class Customer {
  constructor(balance, interestRate, monthlyFee, accountNum, accPassword) {
    this.mybank = new MyBank(balance, interestRate, monthlyFee, accountNum);
    this.costomerPassword = costomerPassword;
  }

  setPassword(Password) {
    this.accPassword = Password;
  }

  withdraw(bankAccountNumber, amount, Password) {
    if (this.accPassword === Password) {
      this.mybank.withdraw(bankAccountNumber, amount);
    } else {
      throw new Error("Incorrect password!");
    }
  }

  deposit(bankAccountNumber, amount) {
    bankAccountNumber.mybank.deposit(amount);
  }

  transfer(fromBankAccountNumber, toBankAccountNumber, amount, Password) {
    if (this.accPassword != Password) {
      throw new Error("Incorrect password!");
    } else {
      fromBankAccountNumber.withdraw(amount);
      toBankAccountNumber.deposit(amount);
    }
  }
}