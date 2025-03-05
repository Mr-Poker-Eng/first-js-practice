//  multilabel condition

const price = 4000;
if(price >= 5000){
    // 10 % discount
    const discount = price * 10 / 100;
    console.log("Discount: ", discount , "tk");
    const payAmount = price - discount;
    console.log("Please pay: ",payAmount ,"tk")
}
else if(price > 2500){
    const discount = price * 5 / 100;
    console.log("Discount: ", discount , "tk");
    const payAmount = price - discount;
    console.log("Please pay: ",payAmount ,"tk")
}
else{
    console.log("please pay: ", price , "tk");
}