             //[9, 8, 7, 6, 5, 4, 3, 2, 1]
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// console.log(number);
// const reversed = number.reverse();
// console.log(reversed);


const rev_numbers = [];

// for(const num of number){
//     console.log(num);
//     rev_numbers.unshift(num);
// }
// console.log(rev_numbers)


// for(let i=0; i<number.length; i++){
//     const num = number[i];
//     rev_numbers.unshift(num);
// }
// console.log(rev_numbers)

// decremental for loop

for(let i=number.length-1; i>=0; i--){
    const num = number[i];
    console.log(num);
    rev_numbers.push(num)
}
console.log(rev_numbers)