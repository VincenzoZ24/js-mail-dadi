const mail = ["zitov287@gmail.com", "pinco@gmail.com", "pietro24@gmail.com" ];
let utente = prompt("scrivi la tua e-mail");
 if (mail.includes(utente)) {
    console.log("accesso consentito");
 }else{
    alert("accesso negato");
 }