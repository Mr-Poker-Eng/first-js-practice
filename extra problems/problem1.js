function cashOut(taka){
    if(typeof taka !== "number" || taka < 0){
        return "Invalid";
    }
    const charge = (taka * 1.75) / 100;
    return charge;
}

const cashOutCharge = cashOut(4000);
console.log(cashOutCharge);