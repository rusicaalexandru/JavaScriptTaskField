const app = new Vue({
    el: "#container",
    data: {
        username: "Alex",
        tempDate: undefined,
        date: undefined,
        currentDate: new Date().getFullYear()
    },
    computed: {
        calculateAge(){
            return this.currentDate - this.tempDate
        }
    },
    watch: {
        date(x){
            this.tempDate = new Date(x).getFullYear();
        }
    }
})