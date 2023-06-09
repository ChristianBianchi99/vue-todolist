const {createApp}= Vue;

createApp({
    data(){
        return{
            tasks: [
                {
                    text    : "Trovare lo One Piece",
                    done    : false,
                },
                {
                    text    : "Uccidere Griffith",
                    done    : false,
                },
                {
                    text    : "Fare 100 piegamenti, 100 squat, 100 addominali e 10km di corsa",
                    done    : false,
                },
                {
                    text    : "Diventare 'Invincibile sotto il sole'",
                    done    : false,
                },
                {
                    text    : "Diventare Hokage",
                    done    : false,
                },
                {
                    text    : "Riunire le sette sfere del drago",
                    done    : false,
                },
            ]
        }
    }
}).mount('#app');