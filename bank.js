function getAccount(account) {
    return {
        accountId: account.id,
        owner: `${account.name} ${account.lastName}`,
        balance: 0,

    }
}

function BankAccount(id, name, lastName, balance) {
    this.id = id;
    this.owner = `${name} ${lastName}`;
    this.balance = 0;
    this.showBalance = function () { return this.balance }
}

BankAccount.prototype.deposit = function (amount) {
    this.balance += amount;
}

const accountCB = getAccount({ id: 123, name: "gal", lastName: "Amouyal" });
const accountFNC = new BankAccount(id = 123, "gal", "Amouyal");

