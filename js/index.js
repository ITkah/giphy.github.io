new Vue({
    el: '#app',
    data: {
        gifs: [],
        errors: [],
        isLoading: true,
        isActive: false,
        searchGif: null,
        limitGif: ''
    },
    created() {
        fetch('http://api.giphy.com/v1/gifs/trending?api_key=8yhIlmLJSr1eMYWfJxJ0sYRHKrSwapCe&limit=20')
        .then((res) => {
            return res.json()
        })
        .then((res) => {
            this.gifs = res.data;
            this.isLoading = false;
        })
    },
    methods: {
        handleSearch() {
            this.errors = [];
            if (!this.searchGif) {
                this.errors.push('Сhoose the gif you want');
            } else if (this.limitGif <= 0) {
                this.errors.push('Enter correct amount of numbers');
            } else {
                this.isLoading = true;
                this.gifs = [];
                fetch(`http://api.giphy.com/v1/gifs/search?q=${this.searchGif}&api_key=8yhIlmLJSr1eMYWfJxJ0sYRHKrSwapCe&limit=${this.limitGif}`)
                .then((res) => {
                    return res.json()
                })
                .then((res) => {
                    this.gifs = res.data;
                    this.isLoading = false;
                })
            }
        },
        scrollTop() {
            window.scrollTo(0,0);
        },
    }
});