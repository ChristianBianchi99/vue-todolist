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
                    done    : true,
                },
                {
                    text    : "Diventare 'Invincibile sotto il sole'",
                    done    : false,
                },
                {
                    text    : "Diventare Hokage",
                    done    : true,
                },
                {
                    text    : "Riunire le sette sfere del drago",
                    done    : false,
                },
            ],
            newTask: "",
        }
    },
    methods: {
        changeTaskStatus(task){
            task.done = !task.done
        },
        deleteTask(index){
            this.tasks.splice(index, 1)
        },
        addTask(){
            let obj= {
                text    : this.newTask,
                done    : false,
            }
            this.tasks.push(obj);
            this.newTask= "";
        }
    },
}).mount('#app');