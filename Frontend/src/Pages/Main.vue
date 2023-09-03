<template>
    <Navegador/>
    <div class=" w-70">    
        <MUser/>
    </div>
</template>

<script>
    import Navegador from "../Components/Navegador.vue"
    import MUser  from "../Components/MUser.vue"
    export default {
        name: "Main",
        components: {
            MUser,
            Navegador
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
