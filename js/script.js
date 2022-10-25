const mail = ["zitov287@gmail.com", "pinco@gmail.com", "pietrozitoinf@gmail.com", "deianaveronica1@gmail.com"];
let utente = document.getElementById("email_utente");
// let form = document.querySelector("form");
let submit = document.getElementById("invia");


submit.addEventListener("click", function play () {
    
    if ((mail).includes(utente.value)) {
        alert("il gioco dei dadi ha inizio");
    
        let numPlayer = Math.floor(Math.random() * 6) + 1;
        document.querySelector(".player").innerHTML = `il tuo numero è: ${numPlayer}`  ;
        let numComputer = Math.floor(Math.random() * 6) + 1;
        document.querySelector(".player2").innerHTML = `il del tuo avversario è: ${numComputer}`  ;
        if (numPlayer > numComputer) {
           document.querySelector(".risultato").innerHTML = "HAI VINTO"
        } else if (numPlayer < numComputer) {
            document.querySelector(".risultato").innerHTML = "HAI PERSO";
        }else{
            document.querySelector(".risultato").innerHTML = "PAREGGIO";
        };
    
    } else {
        alert("non puoi iniziare in gioco dei dadi, l' e-mail non è corretta");
    };
    
});
