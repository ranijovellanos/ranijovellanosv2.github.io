alert ("hello");
// function

function compute(Operationtype) {
  let firstNumber = document.getElementById('num-first-number').value;
  let secondNumber = document.getElementById('num-second-number').value;
  let result = ;
  let Operation = "add";
  let Total = 0;

if (Operation == "add")
{
    Total = firstNumber + secondNumber;
 }
else if (Operation == "sub")
{
    Total = firstNumber - secondNumber;
}
else if (Operation == "multi")
{
    Total = firstNumber * secondNumber;
}
else if (Operation == "div")
{
    Total = firstNumber / secondNumber;
}
else 
{
    console.log("Invalid operation");
}

console.log(Total);
          
}
