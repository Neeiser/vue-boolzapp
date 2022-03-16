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
        elementActive: 0,
        contacts:[
            {
                name: 'Michele',
                lastMsg: 'Ultimo messaggio inviato',
                lastTime: '12:00',
                img: 'img/avatar_1.jpg',
                msg: [
                    {
                        textMsg: 'Hai portato a spasso il drago di Komodo?',
                        timeMsg: '15:30',
                        status: true,
                    },
                    {
                        textMsg: 'Quando esci ricordati di prendere il cianuro per la torta di domani... e non dimenticarti le banane di Bronte.',
                        timeMsg: '15:35',
                        status: true,
                    },
                    {
                        textMsg: 'Signora ha sbagliato numero.',
                        timeMsg: '16:00',
                        status: false,
                    }
                ]
            },
            {
                name: 'Fabio',
                lastMsg: 'Ultimo messaggio inviato',
                lastTime: '12:00',
                img: 'img/avatar_2.jpg',
                msg: [
                    {
                        textMsg: 'Procurami il sale',
                        timeMsg: '15:30',
                        status: true,
                    },
                    {
                        textMsg: 'Quanto?.',
                        timeMsg: '15:35',
                        status: false,
                    },
                    {
                        textMsg: 'Quanto basta.',
                        timeMsg: '16:00',
                        status: true,
                    }
                ]
            },
            {
                name: 'Samuele',
                lastMsg: 'Ultimo messaggio inviato',
                lastTime: '12:00',
                img: 'img/avatar_3.jpg',
                msg: [
                    {
                        textMsg: 'Ciao!',
                        timeMsg: '15:30',
                        status: true,
                    },
                    {
                        textMsg: 'Guarda un po\' chi si rifà vivo...',
                        timeMsg: '15:35',
                        status: false,
                    },
                    {
                        textMsg: 'In realtà sono morto',
                        timeMsg: '16:00',
                        status: true,
                    },
                    {
                        textMsg: 'Ah! Chiedo scudo...',
                        timeMsg: '15:35',
                        status: false,
                    },
                ]
            },
            {
                name: 'Alessandro B.',
                lastMsg: 'Ultimo messaggio inviato',
                lastTime: '12:00',
                img: 'img/avatar_4.jpg',
                msg: [
                    {
                        textMsg: 'Hai portato a spasso il drago di Komodo?',
                        timeMsg: '15:30',
                        status: true,
                    },
                    {
                        textMsg: 'Quando esci ricordati di prendere il cianuro per la torta di domani... e non dimenticarti le banane di Bronte.',
                        timeMsg: '15:35',
                        status: true,
                    },
                    {
                        textMsg: 'Signora ha sbagliato numero.',
                        timeMsg: '16:00',
                        status: false,
                    }
                ]
            },
            {
                name: 'Alessandro L.',
                lastMsg: 'Ultimo messaggio inviato',
                lastTime: '12:00',
                img: 'img/avatar_5.jpg',
                msg: [
                    {
                        textMsg: 'Hai portato a spasso il drago di Komodo?',
                        timeMsg: '15:30',
                        status: true,
                    },
                    {
                        textMsg: 'Quando esci ricordati di prendere il cianuro per la torta di domani... e non dimenticarti le banane di Bronte.',
                        timeMsg: '15:35',
                        status: true,
                    },
                    {
                        textMsg: 'Signora ha sbagliato numero.',
                        timeMsg: '16:00',
                        status: false,
                    }
                ]
            },
            {
                name: 'Claudia',
                lastMsg: 'Ultimo messaggio inviato',
                lastTime: '12:00',
                img: 'img/avatar_6.jpg',
                msg: [
                    {
                        textMsg: 'Hai portato a spasso il drago di Komodo?',
                        timeMsg: '15:30',
                        status: true,
                    },
                    {
                        textMsg: 'Quando esci ricordati di prendere il cianuro per la torta di domani... e non dimenticarti le banane di Bronte.',
                        timeMsg: '15:35',
                        status: true,
                    },
                    {
                        textMsg: 'Signora ha sbagliato numero.',
                        timeMsg: '16:00',
                        status: false,
                    }
                ]
            },
            {
                name: 'Federico',
                lastMsg: 'Ultimo messaggio inviato',
                lastTime: '12:00',
                img: 'img/avatar_7.jpg',
                msg: [
                    {
                        textMsg: 'Hai portato a spasso il drago di Komodo?',
                        timeMsg: '15:30',
                        status: true,
                    },
                    {
                        textMsg: 'Quando esci ricordati di prendere il cianuro per la torta di domani... e non dimenticarti le banane di Bronte.',
                        timeMsg: '15:35',
                        status: true,
                    },
                    {
                        textMsg: 'Signora ha sbagliato numero.',
                        timeMsg: '16:00',
                        status: false,
                    }
                ]
            },
            {
                name: 'Davide',
                lastMsg: 'Ultimo messaggio inviato',
                lastTime: '12:00',
                img: 'img/avatar_8.jpg',
                msg: [
                    {
                        textMsg: 'Hai portato a spasso il drago di Komodo?',
                        timeMsg: '15:30',
                        status: true,
                    },
                    {
                        textMsg: 'Quando esci ricordati di prendere il cianuro per la torta di domani... e non dimenticarti le banane di Bronte.',
                        timeMsg: '15:35',
                        status: true,
                    },
                    {
                        textMsg: 'Signora ha sbagliato numero.',
                        timeMsg: '16:00',
                        status: false,
                    }
                ]
            },
        ]
    }
})