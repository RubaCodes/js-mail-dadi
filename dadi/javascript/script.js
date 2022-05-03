const refreshButton = document.querySelector('#refresh-button');


refreshButton.addEventListener('click',
    function () {
        //generazione numeri casuali
        let userNumber = Math.floor(Math.random() * 6) + 1;
        let computerNumber = Math.floor(Math.random() * 6) + 1;
        //cambio faccia dado
        const userDice = document.querySelector('.col.user .dice');
        const computerDice = document.querySelector('.col.pc .dice');
        userDice.style.backgroundImage = `url('img/dice-${userNumber}-solid.svg')`;
        computerDice.style.backgroundImage = `url('img/dice-${computerNumber}-solid.svg')`;
        
        //display del numero sorteggiato
        document.querySelector('#user-number').innerHTML = `Il tuo numero estratto per te e' ${userNumber}`;
        document.querySelector('#computer-number').innerHTML = `Il  numero estratto per il pc e' ${computerNumber}`;

        // logica vittoria
        if (userNumber > computerNumber) {
            document.querySelector('#result').innerHTML = `HAI VINTO`;
        } else if (userNumber < computerNumber) {
            document.querySelector('#result').innerHTML = `HAI PERSO`;
        } else {
            document.querySelector('#result').innerHTML = `PAREGGIO`;
        }
    }
);
