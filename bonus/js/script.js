const {createApp}= Vue;

createApp({
    data(){
        return{
            tasks: [
                {
                    text    : "Trovare lo One Piece",
                    done    : false,
                    edit    : false,
                },
                {
                    text    : "Uccidere Griffith",
                    done    : false,
                    edit    : false,
                },
                {
                    text    : "Fare 100 piegamenti, 100 squat, 100 addominali e 10km di corsa",
                    done    : true,
                    edit    : false,
                },
                {
                    text    : "Diventare 'Invincibile sotto il sole'",
                    done    : false,
                    edit    : false,
                },
                {
                    text    : "Diventare Hokage",
                    done    : true,
                    edit    : false,
                },
                {
                    text    : "Riunire le sette sfere del drago",
                    done    : false,
                    edit    : false,
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
                edit    : false,
            }
            this.tasks.push(obj);
            this.newTask= "";
        },
        editTask(task){
            task.edit = !task.edit
        }
    },
}).mount('#app');