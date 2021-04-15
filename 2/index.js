const app = new Vue({
    el: "#container",
    data: {
        rate: undefined,
        years: undefined,
        coeficient: undefined,
        experience: undefined
    },
    computed: {
        salarry(){
            //console.log(this.rate)
            //console.log(this.coeficient)
            return this.rate * this.coeficient
        }
    },
    watch: {
        experience(x){
            this.getRated(+x)
        }
    },
    methods: {
        getRated(x){
            if (x <= 0)
            {
                return this.rate = undefined;
            }
            switch (x) {
                case 1:
                    this.rate = 10000;
                    break
                case 2:
                    this.rate = 12000;
                    break
                case 3:
                    this.rate = 13500;
                    break
                case 4:
                    this.rate = 14000;
                    break
                case 5:
                    this.rate = 15000;
                    break
                default:
                    this.rate = "too experienced sry :<"
                    break
            }
        }
    }
})