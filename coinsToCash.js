const piggyBank = { 
    "quarters": 20,
    "dimes": 60,
    "nickles": 93,
    "pennies": 34 
};

let dollarAmount = 0;

//value of coins in piggy bank
for(let key in piggyBank) {
    let coinNumber = piggyBank[key];
    let coinTotal = 0;
    
    if(key === "quarters") {
        coinTotal = coinNumber * .25;
    } else if (key === "dimes") {
        coinTotal = coinNumber * .10;
    } else if (key === "nickles") {
        coinTotal = coinNumber * .05;
    } else if (key === "pennies") {
        coinTotal = coinNumber * .01;
    }
    
    dollarAmount += coinTotal
}
//total value of piggy bank
console.log(dollarAmount);
