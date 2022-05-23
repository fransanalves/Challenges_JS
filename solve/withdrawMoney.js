function withdrawMoney(money) {
    let availableMoney = [1, 2, 5, 10, 20, 50, 100];
    let arr = [];

    while (money > 0) {
        let arrNum = availableMoney.filter((item) => item <= money);
        let numMax = Math.max(...arrNum);
        arr.push(numMax);
        money = money - numMax;
    }

    return arr;
}

module.exports = withdrawMoney;