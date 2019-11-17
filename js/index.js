new Vue({
    el: '#app',
    data: {
        gifs: [],
        errors: [],
        isLoading: true,
        isActive: false,
        searchGif: null,
        limitGif: null
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
            if (!this.searchGif || !this.limitGif) {
                this.errors.push('Fields are empty');
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
        onFocus() {
            this.isActive = true; 
        },
        onBlur() {
            this.isActive = false; 
        }
    }
});