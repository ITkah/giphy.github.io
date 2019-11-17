new Vue({
    el: '#app',
    data: {
        searchGif: '',
        gifs: [],
        isLoading: true,
        isActive: false,
        searchGif: null,
        errors: [],
    },
    methods: {
        handleSearch() {
            this.errors = [];
            if (this.searchGif < 1) {
                this.errors.push('Вы ничего не ввели');
            } else {

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
        onFocus() {
           this.isActive = true; 
        },
        onBlur() {
            this.isActive = false; 
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