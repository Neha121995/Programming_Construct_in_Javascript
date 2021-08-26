"use strict";
const prompt=require("prompt-sync")({sigint:true});

console.log("guess any no between 1 to 100"); 
let start=1;
let end=100;
let value=1;
while ((value>0))
{
		let result=( (start+end) / 2 );
		console.log(`magic number is ${result} or not ??`);
		console.log("0. yes this is my number");
		console.log(`1. greter than ${result}`);
		console.log(`2. smaller than ${result}`);
		value = prompt("Enter your choice :");
		switch(value){
            case 0 : console.log(`${result} yes we found your magic number`);
					break;
					case 1 : console.log(`${result} is greater than`);
						start=`${result}`;
					break;
					case 2 : console.log(`${result} is smaller than`);
						end=`${result}`;
					break;
        }
    }