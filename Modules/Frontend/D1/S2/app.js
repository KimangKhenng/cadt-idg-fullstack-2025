const app = Vue.createApp({
    data() {
        return {
            todos: [],
            /**
             * complete.length 
             */
            complete: [],
            task: ''
        };
    },
    methods: {
        addToList() {
            if (this.task.trim() !== '') {
                this.todos.push({ task: this.task, edit: false })
                this.task = ''
            }
        },
        deleteTask(index) {
            console.log("Hello")
            this.todos.splice(index, 1);
        },
        completeTask(index) {
            console.log("Complete")
        },
        setEdit(index) {
            this.todos[index].edit = true;
        }
    }
});
app.mount('#app');