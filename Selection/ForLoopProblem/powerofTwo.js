"use strict";
const prompt=require("prompt-sync")({sigint:true});
let n = parseInt(prompt("Enter number: "));
let result= Math.pow(2,n) 
console.log("The power of the num "+n+" is : " + result);