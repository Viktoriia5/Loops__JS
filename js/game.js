function game(){
    alert('Mind a number from  0 to 100')
    let number = 100;
    let from = 0;
    let to = 100;
    while(true){
        number = Math.floor((from+to) / 2)
        if(confirm(`Is equal = to ${number}`)){
            alert(`Well Done!`)
            return
        }
        if(confirm(`Is less < than ${number}`)){
            to = number - 1
            continue
        }
        if(confirm(`Is greater > than ${number}`)){
            from = number + 1
            continue
        }

    }
}