"use strict";
const prompt=require("prompt-sync")({sigint:true});


let n = parseInt(prompt("Enter number :: "));

if(n!=0)
{
        let harmonicNum =0;
        for (let i=1; i <= n; i++)
        {
            harmonicNum = harmonicNum + 1/i;
        }
        console.log('The nth harmonic value is :: '+harmonicNum);
}
else
{
    console.log('Error The value should not be zero');
}