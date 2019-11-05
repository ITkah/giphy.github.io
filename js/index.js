new Vue({
    el: '#app',
    data: {
        searchGif: '',
        gifs: [],
        isLoading: true,
    },
    methods: {
        handleSearch() {
            this.gifs = [];
            this.isLoading = true;
            fetch(`http://api.giphy.com/v1/gifs/search?q=${this.searchGif}&api_key=8yhIlmLJSr1eMYWfJxJ0sYRHKrSwapCe`)
            .then((res) => {
                return res.json()
            })
            .then((res) => {
                this.gifs = res.data;
                this.isLoading = false;
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
            this.isLoading = false;
        })
    }
});