<template>
    <MUser/>
</template>

<script>
    import MUser  from "../Components/MUser.vue"
    export default {
        name: "Main",
        components: {
            MUser
        },
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
