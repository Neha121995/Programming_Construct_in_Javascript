"use strict";
const prompt=require("prompt-sync")({sigint:true});
let startrange = parseInt(prompt("Enter Lower Range: "));
let endrange = parseInt(prompt("Enter Higher Range: "));



console.log('The prime numbers between '+startrange+' and '+endrange+' are:');
for (let i = startrange; i <= endrange; i++)
 {
    let flag = 1;
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 0;
            break;
        }
    }
    if (i > 1 && flag == 1) {
        console.log(i);
    }
}