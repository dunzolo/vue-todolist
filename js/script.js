const{
    createApp
} = Vue

createApp({
    data() {
        return {
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
}).mount('#app')