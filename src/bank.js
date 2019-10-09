let Bankacc = require("./bankAccount");

//functions should update bank
//void functions
class Bank {
  constructor(balance, interest, monthlyFee, accountNum) {
    this.bankAccount = new Bankacc(balance, interest, monthlyFee);
    this.accountNum = accountNum; 
    this.accounts = [];
    this.accounts.push({
      accountNumber: this.accountNum,
      bankAccount: this.bankAccount
    });
  }
  createAccounts(balance, interest, monthlyFee, accountNum) {
    this.bankAccount = new Bankacc(balance, interest, monthlyFee);
    this.accountNum = accountNum; 
    this.accounts.push({
      accountNumber: this.accountNum,
      bankAccount: this.bankAccount
    });
  }

  withdraw(bankAccountNumber, amount) {
    for (let i = 0; i < this.accounts.length; i++) {
      if (bankAccountNumber == this.accounts[i].accountNumber) {
        this.accounts[i].bankAccount.withdraw(amount);
      } else {
        throw new Error("Not the correct account!");
      }
    }
  }

  deposit(bankAccountNumber, amount) {
    for (let i = 0; i < this.accounts.length; i++) {
      if (bankAccountNumber == this.accounts[i].accountNumber) {
        this.accounts[i].bankAccount.deposit(amount);
      } else {
        throw new Error("Incorrect bank account!");
      }
    }
  }

  transfer(fromBankAccountNumber, toBankAccountNumber, amount) {
    this.withdraw(fromBankAccountNumber, amount);
    this.deposit(toBankAccountNumber, amount);
  }
}

module.exports = Bank;
