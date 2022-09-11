<template>
    <h2>Hello world!!</h2>
</template>

<script>
    import router from '../router'
    export default {
        name: 'Navegador',
        data(){
            return{
                configu:{
                    headers:{
                        "Content-Type" : "application/json"
                    }
                },
                url: "http://localhost:3001/api/v1/main",
                aux:'',
            }
        },
    }
</script>