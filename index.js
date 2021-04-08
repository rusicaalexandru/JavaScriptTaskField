var app = new Vue({
    el: '#app',
    data: {
        a: 0,
        b: 0,
        operand: " "
    },
    computed: {
        suma(){
            return +this.a + +this.b;
        },
        mult(){
            return +this.a * +this.b;
        },
        div(){
            return +this.a / +this.b;
        },
        minus(){
            return +this.a - +this.b;
        }
    }
})