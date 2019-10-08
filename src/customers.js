const Bank =  require("./bank")

class Customers {
    constructor (balance, monthlyFee, interest,password){
        this.Bank = new Bank(balance, monthlyFee, interest)
        this.password = "";
    }
    setPassword(newPassword){
        this.password = newPassword;
    }

    withdraw(wpass, amount, bankAccNumber){
        if (wpass = this.password) {
            this.Bank.withdraw(bankAccNumber, amount);
        }
    }
}