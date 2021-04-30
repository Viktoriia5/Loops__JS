function sliceString(){
    const number = prompt("Enter a number: ");
    const shiftDigits = prompt("Enter a digit: ");

    let result = number.slice(shiftDigits) + number.slice(0, shiftDigits);
    alert(result);
}