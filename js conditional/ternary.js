// Ternary --> three parts

// ?  :

// condition ? do something when true : do something when false

const age = 22;
//normal if else

// if(age >= 18){
//     console.log('you can vote')
// }
// else{
//     console.log('ghumai thako')
// }

//simple ternary
// age >= 18 ? console.log('vote dite parba') : console.log('ghumai thako')


let price = 1500;
const isLeader = true;
//  if(isLeader === true)
//  {
//     price = 0;
//  }
//  else{
//     price += 100;
//  }
//  console.log(price);

// price = isLeader === true ? console.log(0) : console.log(price + 100) ;


//optional: semi-advance ternary

// if(isLeader === true){
//     if(price > 1000){
//         price = price / 2;
//     }
//     else{
//         price = 0;
//     }
// }
// else{
//     price = price + 1000;
// }
// console.log(price);

// now ternary part
// price = isLeader === true ? price > 1000 ? console.log(price / 2) : console.log(0) : console.log(price + 1000);
