let bankAccount = {
    accountNumber: "123456789",
    accountHolderName: "Alice",
    balance: 0
};
console.log(bankAccount)


bankAccount.deposit = function(sum){
    if (sum > 0) {
        this.balance += sum;
        console.log(`Your deposited ${sum}. Your balance: ${this.balance}`);
    } else {
        console.log("Deposit amount must be positive.");
    }
}
bankAccount.deposit(2000)


bankAccount.withdraw = function(sum){
    if (sum > 0 && sum <= this.balance) {
        this.balance -= sum;
        console.log(`Successfully withdrew ${sum}. Your balance: ${this.balance}`);
    } else {
        console.log(`withdrawals to accounts should not exceed the balance amount ${this.balance}`);
    }
}
bankAccount.withdraw(1000)


bankAccount.checkBalance = function() {
    console.log(`Current balance: ${this.balance}`);
}
bankAccount.checkBalance()


