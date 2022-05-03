const emailList = ['dahdiua@gmail.com', 'adsbabda@outlook.com', 'adahskdj@libero.it', 'test@gmail.com'];

const login = document.querySelector('#login');

login.addEventListener('click',
    function () {
        const userEmail = document.querySelector('#email').value;
        console.log(userEmail);
        for (let i = 0; i < emailList.length; i++){
            if(userEmail != emailList[i]){
            console.log('username errato');
            }else{
                console.log('utente loggato');
            }
        }
    }
);