const refreshButton = document.querySelector('#refresh-button');


refreshButton.addEventListener('click', 
    function(){
        //generazione numeri casuali
        let userNumber = Math.floor(Math.random() * 6) + 1;
        let computerNumber = Math.floor(Math.random() * 6) + 1;
        //display del numero sorteggiato
        document.querySelector('#user-number').innerHTML = `Il tuo numero estratto per te e' ${userNumber}`;
        document.querySelector('#computer-number').innerHTML = `Il  numero estratto per il pc e' ${computerNumber}`;



        // logica vittoria
        if(userNumber > computerNumber){
            console.log('vittoria user');
        } else if(userNumber < computerNumber){
            console.log('vittoria pc');
        }else {
            console.log('pareggio');
        }
    }
);
