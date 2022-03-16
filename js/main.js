/* 
Milestone 2
Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, 
visualizzare tutti i messaggi relativi al contatto attivo all’interno del 
pannello della conversazione.
Click sul contatto mostra la conversazione del contatto cliccato.

Milestone 3
Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e 
digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde.
Risposta dall’interlocutore: ad ogni inserimento di un messaggio, 
l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.

Consiglio
Pensate bene a come strutturare i dati prima di implementare il codice.
*/


const app = new Vue({
    el:'.app',
    data:{
        contacts:[
            {
                name: 'Michele',
                lastMsg: 'Ultimo messaggio inviato',
                lastTime: '12:00',
            },
        ]
    }
})