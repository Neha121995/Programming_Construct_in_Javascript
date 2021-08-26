"use strict";
const prompt=require("prompt-sync")({sigint:true});
let n = parseInt(prompt("Enter number: "));


for (let i = 2; i <= n; i++)
{
    while(n % i  == 0)
    {
        console.log(i + " ");
        n=n/i
    
    }
}