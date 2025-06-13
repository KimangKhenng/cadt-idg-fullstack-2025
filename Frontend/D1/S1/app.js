const app = Vue.createApp({
    data() {
        return {
            message: 'Hello World!',
            count: 0
        }
    },
    methods: {
        Increment() {
            this.count = this.count + 1
            // this.count++
        }
    }
})
app.mount('#app')