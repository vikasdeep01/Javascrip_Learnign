//our motive to create a faulty calculator which perform wrong calculations
// +  ------>  -
// *  ------>  +
// -  ------>  /
// /  ------>  **


let num1= 5;
let num2= 2;

operator= "+"

switch(operator)
{
    case '+': 
    console.log(num1-num2)
    break;
    case '*': 
    console.log(num1+num2);
    break;
    case '-': 
    console.log(num1/num2);
    break;
    case '/': 
    console.log(num1**num2);
    break;

    default: 
    console.log("wrong input");
    

    
}