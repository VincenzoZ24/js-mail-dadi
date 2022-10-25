const mail = ["zitov287@gmail.com", "pinco@gmail.com", "pietro24@gmail.com", "deianaveronica1@gmail.com" ];
let utente = prompt("scrivi la tua e-mail");
 if (mail.includes(utente)) {
    alert("il gioco dei dadi ha inizio");

    let numPlayer = Math.floor(Math.random() * 6) + 1;
    alert ( "il tuo numero è: " + numPlayer);
    let numComputer =  Math.floor(Math.random() * 6) + 1;
    alert( " il numero del tuo avversario é: " + numComputer);
    if( numPlayer > numComputer){
        alert("HAI VITO");
    }else{
        alert ("HAI PERSO");
    };

 }else{
    alert("non puoi iniziare in gioco dei dadi, l' e-mail non è corretta");
 };
