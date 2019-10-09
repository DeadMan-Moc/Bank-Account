class BankAccount {
  constructor(balance, interest, monthlyFee) {
    this.balance = balance;
    this.interest = interest / 100;
    this.monthlyFee = monthlyFee;
  }
  finishMonth() {
    this.interestAmount = (this.balance * this.interest) / 12;
    return this.balance = this.balance + this.interestAmount - this.monthlyFee;
  }
  deposit(Adeposited) {
    return this.balance += Adeposited;
  }
  withdraw(Awithdrawal) {
    if (Awithdrawal < this.balance) {
      return this.balance -= Awithdrawal;
    } else {
      throw new Error("Not enough funds!");
    } 
  }
}

module.exports = BankAccount;