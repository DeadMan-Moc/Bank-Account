class Bank{
    constructor(bankAccountNumber, amount){
      this.balance = amount;
      this.account = bankAccountNumber;
    }
    withdraw(bankAccountNumber, amount){
      if (bankAccountNumber !== undefined){
        // if (amount <= this.balance){
          // this.amount = amount;
          var a = this.account
          if (bankAccountNumber == a){
              this.balance = this.balance - amount
              return this.balance;
        }
          else{
            console.error("Your bank account has insufficient funds");
          }
  
        }
  
      //   else{
      //     return "Insufficient balance";
      //   }
      // }
    }
    deposit(bankAccountNumber, amount){
      if (bankAccountNumber !== undefined){
        return (this.balance = this.balance + amount);
      }
    }
    //transfer(amount)
  }
  
  let bank = new Bank(1930647846, 1000);
  console.log(bank.deposit(1930647846, 1900));
  console.log(bank.withdraw(1930647846, 100));
  // console.log(bank.withdraw(1930647843, 1000))
class Bank{
    constructor(bankAccountNumber, amount){
      this.balance = amount;
      this.account = bankAccountNumber;
    }
    withdraw(bankAccountNumber, amount){
      if (bankAccountNumber !== undefined){
        // if (amount <= this.balance){
          // this.amount = amount;
          var a = this.account
          if (bankAccountNumber == a){
              this.balance = this.balance - amount
              return this.balance;
        }
          else{
            console.error("Your bank account has insufficient funds");
          }
  
        }
  
      //   else{
      //     return "Insufficient balance";
      //   }
      // }
    }
    deposit(bankAccountNumber, amount){
      if (bankAccountNumber !== undefined){
        return (this.balance = this.balance + amount);
      }
    }
    //transfer(amount)
  }
  
  let bank = new Bank(1930647846, 1000);
  console.log(bank.deposit(1930647846, 1900));
  console.log(bank.withdraw(1930647846, 100));
  // console.log(bank.withdraw(1930647843, 1000))