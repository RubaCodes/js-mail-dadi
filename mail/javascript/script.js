const emailList = ['dahdiua@gmail.com', 'adsbabda@outlook.com', 'adahskdj@libero.it', 'test@gmail.com'];

const login = document.querySelector('#login');

login.addEventListener('click',
    function () {
        const userEmail = document.querySelector('#email').value;
        console.log(userEmail);

        //check occorrezza mail corretta
        let isAllowed = 0;
        for (let i = 0; i < emailList.length; i++){
            
            if(userEmail == emailList[i]){
            isAllowed ++;
            }
        }
        console.log(isAllowed);
        if (isAllowed != 0) {
            //login
        }
        else{
            //inserisci email supportata
        }
    }
);