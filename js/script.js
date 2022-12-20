const{
    createApp
} = Vue

createApp({
    data() {
        return {
            new_task: '',
            todo_list:[
                {
                    text: 'Fare la spesa',
                    done: true,
                },
                {
                    text: 'Studiare',
                    done: false,
                },
                {
                    text: 'Comprare un nuovo telefono',
                    done: true,
                },
                {
                    text: 'Fare l\'esercizio di Boolean',
                    done: false,
                },
                {
                    text: 'Lavare la macchina',
                    done: false,
                },
                {
                    text: 'Preparare da mangiare',
                    done: true,
                },
                {
                    text: 'Fare una passeggiata',
                    done: false,
                }
            ]
        }
    },
    methods: {
        addNewTask(){
            let new_object = {
                text: this.new_task,
                done: false
            }
            this.todo_list.push(new_object);
            this.new_task = '';
        },
        removeTask(index){
            console.log(index);
            this.todo_list.splice(index, 1);
        },
        changeDone(index){
            let task = this.todo_list[index]
            if(task.done){
                task.done = false
            }
            else{
                task.done = true;
            }
        }
    },
}).mount('#app')