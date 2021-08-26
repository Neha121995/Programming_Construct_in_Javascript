"use strict";
const prompt=require("prompt-sync")({sigint:true});


//let name = prompt("Enter your name : ")
//console.log("Hello "+name)

let n = prompt("Enter a number ::"); 
let isPrime = true;
for(let i=2; i<=n/2; i++)
{
		if ((n%i) == 0 )
		{
				isPrime = false;
        }
}

if (isPrime == false)
{
		console.log("Number is not prime number");
}
else{
		console.log("Number is prime number");
}