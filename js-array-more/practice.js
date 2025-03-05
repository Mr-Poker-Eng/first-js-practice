// task 1

const colors = ['red', 'blue', 'green', 'yellow', 'orange']

const rev_color = [];
// for(let i=colors.length-1; i>=0; i--){
//     const color = colors[i];
//     console.log(color);
//     rev_color.push(color);
// }
// console.log(rev_color);


// for(let i=0; i<colors.length; i++){
//     const color = colors[i];
//     console.log(color);
//     rev_color.unshift(color);
// }
// console.log(rev_color)

// let i = 0;
// while(i<colors.length){
//     const color = colors[i];
//     rev_color.unshift(color);
//     i++;
// }
// console.log(rev_color);


//task 2

// const number = [12, 98, 5, 41, 23, 78, 46];

// const numb = [];
// for(i=0; i<number.length; i++){
//     // console.log(number[i]);
//     const num = number[i];
//     if(num%2 === 0){
//         numb.push(num);
//     }
// }
// console.log(numb);



// task 3

// var numbers = ['tom', 'tim', 'tin', 'tik', 'tok'];

// let add = "";
// for(const number of numbers){
//     // console.log(number);
//     add += number;
// }
// console.log(add);


//task 4

const statement = 'I am a hard working person';

let element = statement.split(' ');
// console.log(element);
let add = '';
for(let i=element.length-1; i>=0; i--){
    // console.log(element[i]);
    add += element[i];
    if(i > 0){
        add += " ";
    }
}
console.log(add);



// extra

// const statement = 'I am a hard working person';
// let words = statement.split('');
// let add = '';
// for(i=words.length-1; i>=0; i--){
//     let element = words[i];

//     if(isNaN(element) && element !== " "){
//         add += element;
//     }
// }
// console.log(add);
