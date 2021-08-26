"use strict";
const prompt=require("prompt-sync")({sigint:true});

let n = parseInt(prompt("Enter the number: "));

if(n>=0)
{
    let fact=1;
    //loop to find factorial of given number
    for(let i=1;i<=n;i++)
        fact *= i;
    console.log('Factorial of '+n+ ' is ' + fact);
}
else{
    console.log('Value of n should not be negative');
}