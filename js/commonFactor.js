function commonFactor(){
    let firstNumber = +prompt("Enter first number: ");
    let secondNumber = +prompt("Enter second number: ");

    firstNumber = Math.abs(firstNumber);
    secondNumber = Math.abs(secondNumber);

    while(firstNumber !=0 && secondNumber!=0){
        if(firstNumber>secondNumber){
            firstNumber = firstNumber % secondNumber;
        } else{
            secondNumber = secondNumber % firstNumber;
        }
    }
    alert(firstNumber + secondNumber);
}