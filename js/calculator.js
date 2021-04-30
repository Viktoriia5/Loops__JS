function calculator(){
    let repeat = true;

    do{
        const numberOne = +prompt("Enter number one: ");
        const numberTwo = +prompt("Enter number two: ");
        const askSign = prompt("Enter a sign: ");

        if(askSign == '+'){
            alert( numberOne + numberTwo);
        } else if( askSign == '-'){
            alert(numberOne - numberTwo);
        } else if( askSign == '*'){
            alert(numberOne * numberTwo);
        } else if( askSign == '/'){
            alert( numberOne / numberTwo);
        }

        //alert(eval(numberOne + askSign + numberTwo));
        repeat = confirm("Do you want to continue?");
    }while(repeat);
}