new Vue({
    el: '#app',
    data: {
        isLoading: true,
        searchGif: null,
        limitGif: '',
        gifs: null,
        errorAlert: 'Мы решаем ошибку, перезагрузите веб приложение'
    },
    created() {
        axios
            .get('http://api.giphy.com/v1/gifs/trending?api_key=8yhIlmLJSr1eMYWfJxJ0sYRHKrSwapCe&limit=20')
            .then((response) => {
                this.gifs = response.data.data
            })
            .catch((error) => {
                console.log(error);
                alert(this.errorAlert);
            })
            .finally(() => this.isLoading = false);
    },
    methods: {
        handleSearch() {
            this.isLoading = true;
            this.gifs = null;
            axios
                .get(`http://api.giphy.com/v1/gifs/search?q=${this.searchGif}&api_key=8yhIlmLJSr1eMYWfJxJ0sYRHKrSwapCe&limit=${this.limitGif}`)
                .then((response) => {
                    this.gifs = response.data.data
                })
                .catch((error) => {
                    console.log(error);
                    alert(this.errorAlert);
                })
                .finally(() => this.isLoading = false);
        },
        scrollTop() {
            window.scrollTo(0, 0);
        },
    }
});