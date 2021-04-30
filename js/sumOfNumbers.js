function sumOfNumbers(){
    const firstNumber = +prompt("Enter first number:");
    const secondNumber = +prompt("Enter second number:");
    let result = 0;
    let start, finish;
    if(firstNumber > secondNumber){
        start = secondNumber;
        finish = firstNumber;
    } else{
        start = firstNumber;
        finish = secondNumber;
    }
    //for(let i = start; i<=finish; i++){
    //    result = result + i;
    //    }
    result = (start + finish)/2 * (finish - start +1);
alert(result);
}