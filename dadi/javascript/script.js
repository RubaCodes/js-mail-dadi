

//generazione numeri casuali
let userNumber = Math.floor(Math.random() * 6) + 1;
let computerNumber = Math.floor(Math.random() * 6) + 1;
console.log(userNumber, computerNumber);


// logica vittoria
if(userNumber > computerNumber){
    // vittoria user
} else if(userNumber < computerNumber){
    //vittoria pc
}else {
    //pareggio
}