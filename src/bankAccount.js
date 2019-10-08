class BankAccount{
  constructor(interest, amount, balance){
    this.interest = interest
    this.amount = amount
    this.balance = balance
  }

  finishMonth(){
    /*
    *monthly fees
    *amount for the month
    */
    // this.monthlyAmount = monthlyAmount

    
    var rate = this.interest/100;
     updated = (rate/12) * this.balance;

  }

  withdraw(){
    /*
    *should subtract to available amount
    */
   this.dAmount = dAmount
   dAmount = monthlyAmount - dAmount
  }

  deposit(){
    /*
    *should add to available amount
    */

    // this.monthlyAmount = monthlyAmount
    this.dAmount = dAmount
    dAmount = monthlyAmount + dAmount
  }
}

let a = new BankAccount() 
console.log(a.finishMonth(1000,12,12))

// let dice2= new Die(3);
// dice2.setProbabilities([1,3,6]);
// dice2.roll();