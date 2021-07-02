Vue.config.devtools = true;




new Vue({
 
    el: '#app',
    data:{

        contacts: [
            {//Array di dati utenti
                name: 'Michele',
                avatar: './img/avatar_1.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?', //I msg inviati da me che devono essere di colore verde
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!', //I msg ricevuti dai miei contatti che devono essere di colore bianco
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: './img/avatar_2.jpg',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: './img/avatar_4.jpg',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: './img/avatar_6.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
                
            },
            
        ],
       
        currentIndex: 0, //Array di oggetti parte da 0, cioè il ciclo parte dalla posizione[0] che è Michele
        myNewMessage:'', //I miei msg 
        timerSlot: null,
        pcNewMessage:'',
        

    },
 

    methods:{
      
       isCurrentIndex: function (index){
           this.currentIndex =index;
        
       },
      
       //per visualizzare lo status dei msg
       msgText: function(status){

        if( status === 'sent'){
            return 'col-5 offset-6 box-send-msg'; //i messaggi di colore verde
        } 
        else if( status === 'received') { 
            return 'col-4 offset-1 box-recevied-msg'; //i messaggi di colore bianco
        }

    },
      getCurrentDateTime: function(){ //Per avere la datetime  usiamo day.js
            
        //creiamo una variabile costante
        const dateTimeNow = dayjs();
        //scriviamo il seguente codice, applicando format 
        return dateTimeNow.format("DD/MM/YYYY HH:mm:ss");


      },
      newMessageSend: function (){
        let newMsgOggetto = {
             date:  this.getCurrentDateTime(),
             text: this.myNewMessage,
             status: 'sent'  
       }

       this.contacts[this.currentIndex].messages.push(newMsgOggetto);
       this.myNewMessage='';
       this.timer();   
        },

        //!setTimeOut risposta pc
          // In che modo l'interlocutore(pc) risponde ogni 1 sec?
          // Dove vengono pushati i msg del pc?
          // Devo creare un oggetto?


         timer: function(){
            setTimeout(()=>{
            let newMsgOggettoPc = {
                date:  this.getCurrentDateTime(),
                text:  'ok',
                status: 'recevied'  
           }
           
           this.contacts[this.currentIndex].messages.push(newMsgOggettoPc);
           this.pcNewMessage='';
           }, 1000)

    
      },

      
    },
       selectContact: function(index){
            
         this.currentIndex =index;
        
        
       },
    
    })
