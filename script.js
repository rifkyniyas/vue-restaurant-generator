const app = Vue.createApp({
    data() {
        return {
            name : "",
            logo : "",
            phoneNumber : "",
            address : "",
            description : "",
            review : "",
            hoursOpen : "",
        }
    },
    methods: {
        async fetchData () {
            const res = await fetch('https://random-data-api.com/api/restaurant/random_restaurant')
            const data = await res.json() 

            this.name = data.name
            this.logo = data.logo
            this.phoneNumber = data.phone_number
            this.address = data.address
            this.description = data.description
            this.review = data.review
            this.hours = data.hours
            console.log(this.name)
            console.log(data)
        }
    },
    created() {
        const fetchData =  async () => {
            const res = await fetch('https://random-data-api.com/api/restaurant/random_restaurant')
            const data = await res.json() 

            this.name = data.name
            this.logo = data.logo
            this.phoneNumber = data.phone_number
            this.address = data.address
            this.description = data.description
            this.review = data.review
            this.hours = data.hours
            console.log(this.name)
            console.log(data)
        }
        fetchData();
    },
});

app.mount("#app");
