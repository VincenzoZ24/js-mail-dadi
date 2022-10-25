let utente = prompt("scrivi la tua e-mail");
let mail = ["zitov287@gmail.com", "pinco@gmail.com", "pietro24@gmail.com" ];
for (let i = 0; i < mail.length; i++) {
   if (utente == mail[i]) {
    console.log("accesso consentito");
   }else{
    console.log("accesso negato")
   }
}
