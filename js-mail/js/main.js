/* Crea una lista di email di invitati ad una festa. Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for. Non è consentito usare nessun metodo proprio degli array (come includes, per esempio). Si può fare? Certo che si basta ragionare un po’. Nota: Non è necessario provvedere alla validazione delle email */

//Creo una lista di mail con una array

//Tramite un promt chiedo di inserire la mail

//Ciclo forper verificare la mail e se è verificata, stampare un messaggio appropriato

const your_mail = prompt("L'invitato inserisce la propria mail");

const mail_List = [
  "MargheritaPizza@gmail.it",
  "LuigiilfratellodiMario@gmail.it",
  "SilvioilCavaliere@gmail.it",
  "SuperMarioBros@gmail.com",
  "EnzinoTramezzino@gmail.com",
  "LindoMastro@gmail.com",
];

let allowed = false;
for (i = 0; i < mail_List.length; i++) {
  if (mail_List[i] === your_mail) {
    allowed = true;
    break;
  }
}
if (allowed) {
  console.log("Accesso Consentito");
} else console.log("Accesso Negato");
