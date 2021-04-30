function allDividers(){
    let number = +prompt("Enter a number: ");

    number = Math.abs(number);
    let result = "";

    for (let i = 1; i <= number; i++){
        if (number % i == 0){
            result = result + `${i}, `;
        }
    }
alert(result);
}