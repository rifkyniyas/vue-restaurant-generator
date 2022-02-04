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
        },
        getFirstLetter (str) {
            return str.split('').reduce((response,word)=> response+=word.slice(0,1),'')
        }
    },
    async created() {
        const res = await fetch('https://random-data-api.com/api/restaurant/random_restaurant')
        const data = await res.json() 

        this.name = data.name
        this.logo = data.logo
        this.phoneNumber = data.phone_number
        this.address = data.address
        this.description = data.description
        this.review = data.review
        this.hours = data.hours
    },
});

app.mount("#app");
