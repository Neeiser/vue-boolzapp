/* 

Milestone 3
Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e 
digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde.
Risposta dall’interlocutore: ad ogni inserimento di un messaggio, 
l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.

*/


const app = new Vue({
    el:'.app',
    data:{
        elementActive: 0,
        newMessage: '',
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
                        textMsg: 'Oddio non crederai mai a ciò che è successo!',
                        timeMsg: '15:30',
                        status: false,
                    },
                    {
                        textMsg: 'Racconta, racconta!',
                        timeMsg: '15:32',
                        status: true,
                    },
                    {
                        textMsg: 'Praticamente stavo andando a prendere il latte, quando ad un tratto ho notato che mi sono dimenticato il cellulare a casa.',
                        timeMsg: '16:00',
                        status: false,
                    },
                    {
                        textMsg: 'e...',
                        timeMsg: '16:35',
                        status: true,
                    },
                    {
                        textMsg: 'e nulla, sono tornato a casa, l\'ho preso ed ora vado a prendere il latte',
                        timeMsg: '16:40',
                        status: false,
                    },
                ]
            },
            {
                name: 'Alessandro L.',
                lastMsg: 'Ultimo messaggio inviato',
                lastTime: '12:00',
                img: 'img/avatar_5.jpg',
                msg: [
                    {
                        textMsg: 'Qual\'è il colmo per un narvalo ?',
                        timeMsg: '15:30',
                        status: true,
                    },
                    {
                        textMsg: 'Tirare sassate agli infedeli.',
                        timeMsg: '15:35',
                        status: false,
                    },
                ]
            },
            {
                name: 'Claudia',
                lastMsg: 'Ultimo messaggio inviato',
                lastTime: '12:00',
                img: 'img/avatar_6.jpg',
                msg: [
                    {
                        textMsg: 'L\'Inquisizione era l\'istituzione ecclesiastica fondata dalla Chiesa cattolica per indagare, mediante un apposito tribunale, i sostenitori di teorie considerate contrarie all\'ortodossia cattolica (le cosiddette eresie).',
                        timeMsg: '15:30',
                        status: true,
                    },
                    {
                        textMsg: 'Ok e con questo? Perchè mi hai scritto ciò!?',
                        timeMsg: '15:35',
                        status: false,
                    },
                    {
                        textMsg: 'Perchè sono diventato un templare',
                        timeMsg: '16:00',
                        status: true,
                    },
                    {
                        textMsg: 'Il mio cuore e la mia spada ora appartengono alla mia causa. Possa l\'eterna fede vegliare sulla mia corciata.',
                        timeMsg: '16:00',
                        status: true,
                    },
                    {
                        textMsg: 'A me puzza di ipocrisia; fino a ieri stavi bestemmiando...',
                        timeMsg: '15:35',
                        status: false,
                    },
                    {
                        textMsg: 'La misericordia del sommo non conosce limiti.',
                        timeMsg: '16:00',
                        status: true,
                    },
                    {
                        textMsg: 'Addio Gerardo.',
                        timeMsg: '16:00',
                        status: true,
                    },
                    {
                        textMsg: 'In realtà mi chiamerei Claudia...',
                        timeMsg: '16:00',
                        status: false,
                    },
                    {
                        textMsg: 'La fede non conosce nomi.',
                        timeMsg: '16:00',
                        status: true,
                    },
                ]
            },
            {
                name: 'Federico',
                lastMsg: 'Ultimo messaggio inviato',
                lastTime: '12:00',
                img: 'img/avatar_7.jpg',
                msg: [
                    {
                        textMsg: 'Condividi anche te questo messaggio e avrai fortuna per 50 anni: "L\'impero ottomano aveva ragione, le bruschette è meglio tostarle al forno e non in padella."',
                        timeMsg: '15:30',
                        status: true,
                    },
                ]
            },
            {
                name: 'Davide',
                lastMsg: 'Ultimo messaggio inviato',
                lastTime: '12:00',
                img: 'img/avatar_8.jpg',
                msg: [
                    {
                        textMsg: 'Davide, ti facevo più alto!',
                        timeMsg: '15:30',
                        status: true,
                    },
                    {
                        textMsg: 'Ma se non ci siamo mai visti!',
                        timeMsg: '15:35',
                        status: false,
                    },
                    {
                        textMsg: 'Tu pensi? Secondo te chi è quello che ti guarda dalla finestra mentre dormi?',
                        timeMsg: '16:00',
                        status: true,
                    },
                    {
                        textMsg: 'Ma io non ho finestre a casa...',
                        timeMsg: '16:00',
                        status: false,
                    },
                    {
                        textMsg: 'Perfetto, significa che ho guardato per tutto questo tempo la finestra sbagliata.',
                        timeMsg: '15:30',
                        status: true,
                    },
                ]
            },
        ]
    },
    methods:{
        sendMessage: function(){
            const inputUser = this.contacts[this.elementActive].msg
            if(this.newMessage !== ''){
                inputUser.push({
                    textMsg: this.newMessage, timeMsg: '00:00', status:true
                });
                this.newMessage=''
            }
            setTimeout(function() {
                inputUser.push({
                    textMsg: 'ok', timeMsg: '00:00', status:false,
                }); 
            }, 1000);
        },
    }
})