class BankAccount{
  constructor(interest, time, amount, monthlyFees, monthlyAmount){
    this.interest = interest
    this.time = time
    this.amount = amount
    this.monthlyFees = monthlyFees
    this.monthlyAmount = monthlyAmount
    interest = interest/100
  }

  finishMonth(monthlyAmount, amount, interest, time){
    /*
    *monthly fees
    *amount for the month
    */
    // this.monthlyAmount = monthlyAmount
    this.interest = interest/100
    amount = amount * (interest/time)
    return monthlyAmount
    
  }

  withdraw(wAmount, monthlyAmount){
    /*
    *should subtract to available amount
    */
    this.wAmount = wAmount
    

    return (wAmount = monthlyAmount - wAmount)
  }

  deposit(dAmount, monthlyAmount){
    /*
    *should add to available amount
    */

    // this.monthlyAmount = monthlyAmount
    this.dAmount = dAmount
    dAmount = monthlyAmount + dAmount
    return (dAmount)

  }
}

let a = new BankAccount() 
console.log(a.finishMonth(1000,12,12))

// let dice2= new Die(3);
// dice2.setProbabilities([1,3,6]);
// dice2.roll();