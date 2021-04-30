function typeOfNumbers(){
let positive = 0;
let negative = 0;
let odd = 0;
let even = 0;
let zero = 0;


    for(let i = 1; i <= 10; i++){
        const number = +prompt(`Enter a number: ${i}`);

        if(number > 0){
            positive = positive + 1;
        } else if(number < 0){
            negative = negative +1;
        } else if(number === 0){
            zero = zero + 1;
        }

        if(number % 2){
            even = even + 1;
        }else {
            odd = odd + 1;
        }
    }
    let message = `Number of positive: ${positive} <br>   
                Number of negative: ${negative} <br>
                Number of odd: ${odd} <br>
                Number of even: ${even} <br>
                Number of zeros: ${zero} <br>`
    const text = document.getElementById('text');
    text.innerHTML = message;
}