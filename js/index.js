new Vue({
    el: '#app',
    data: {
        searchGif: '',
        gifs: [],
    },
    methods: {
        handleSearch() {
            // this.gifs = [];
            fetch(`http://api.giphy.com/v1/gifs/search?q=${this.searchGif}&api_key=8yhIlmLJSr1eMYWfJxJ0sYRHKrSwapCe`)
            .then((res) => {
                return res.json()
            })
            .then((res) => {
                this.gifs = res.data;
            })
        }
    },
    created() {
        fetch('http://api.giphy.com/v1/gifs/trending?api_key=8yhIlmLJSr1eMYWfJxJ0sYRHKrSwapCe')
        .then((res) => {
            return res.json()
        })
        .then((res) => {
            this.gifs = res.data;
        })
    }
});