#! /usr/bin/env node

// ye path ye batarha hai haikay ye jo code humne kiya hai isko hum publish
//krsktay hain aur phir jo bhi log isko use krna chahtay hain wo npx tool ke zariye isko apne 
//cli, terminal, command prompt ke upar use krsktay hain

//SHABANG hum is line ko (#! /usr/bin/env node) kehtay hain

// importing the library of inquirer which we installed through cmd to take inputs form user
import inquirer from "inquirer";

// prompt means user se input lena to isko hum call karaingain because it is a function
//await means isline pr rukay aur user se data lain jo hum usko denay walay hain to jab data mil jaye tb hi aga jana hai wrn aisi line pr rukay rahain agay jane ki zaroorat nhi hai

// ([{}]);  is ke andr humne jo user se input lena hain hum wo user ko batayengain
const answer = await inquirer.prompt([
  { message: "Enter Your First Number", type: "number", name: "firstNumber" },
  { message: "Enter Your Second number", type: "number", name: "secondNumber" },
  {
    message: "Select one of the operators to perform operation",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

//conditional statements for addition
if(answer.operator === "Addition"){
    console.log("Your value is");
    console.log(answer.firstNumber + answer.secondNumber);
} 

//conditional statements for subtraction
else if(answer.operator === "Subtraction"){
    console.log("Your value is");
    console.log(answer.firstNumber - answer.secondNumber);
} 

//conditional statements for multiplication
else if(answer.operator === "Multiplication"){
    console.log("Your value is");
    console.log(answer.firstNumber * answer.secondNumber);
} 

//conditional statements for dividion
else if(answer.operator === "Division"){
    console.log("Your value is");
    console.log(answer.firstNumber / answer.secondNumber);
} 


else{
    console.log("Please select valid operator");
}

console.log("THE END");