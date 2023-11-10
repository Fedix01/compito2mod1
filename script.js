/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltÃ  puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non Ã¨ stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/* I datatype rappresentano un certo tipo di dato attribuito a una variabile.
I principali datatype in Javascript sono:
1)Number: qualsiasi numero intero o decimale;
2)Stringa: qualsiasi carattere racchiusa da apici doppi "" o singoli '';
3)Valore Booleano: entità logica che può essere vera o falsa;
4)Undefined:rappresenta un valore che non esiste ancora cioè una variabile senza alcun valore;
5)Null: valore vuoto, una variabile che non contiene nulla;
6)BigInt;
7)Symbol
/* ESERCIZIO 2
 Descrivi cos'Ã¨ un oggetto in JavaScript, con parole tue.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/* Un oggetto in Javascript rappresenta un insieme di dati correlati fra loro, sono raccolte di coppie chiave-valore;
alcuni esempi del suo utilizzo possono essere identificando una persona, una fattura, una prenotazione...
/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// let num1 = 12;
// let num2 = 20;
// console.log(num1 + num2)
/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// let x = 12;
/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// let name = "Federico";
/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// let num3 = 4;
// console.log(num3 - x);
/* ESERCIZIO 7
Crea un oggetto in Javascript che ti rapresenti (come proprietà usa nome, cognome, hobby)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// let person = {
//     name: "Federico",
//     surname: "Manna",
//     age: 22,
//     hobby: "go running",
//     address: {
//         number: 18,
//         CAP: 28281
//     }
// };
// console.log(person.address.CAP);
/* ESERCIZIO 8
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: Ã¨ la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name1 = "john";
let name2 = "John";
console.log(name1.toLowerCase === name2.toLowerCase);