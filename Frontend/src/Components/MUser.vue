<template>
    <div class =" bg-secondary">
        <div class="p-3">
            <h1 class="text-light">Mail</h1>
            <hr  class="text-light" />
            
            <div>
                <router-view to="/main/navegador"></router-view>
            </div>

        </div> 
        <ul class = "list-unstyled p-3"> 
            <li class="m-3 bg-light d-inline-block" v-for="i in this.list_mails" :key="i.ID_user">
                <div class="d-inline-block">
                    <img src="../../public/favicon.ico" alt="">
                    <router-link to="/" class="p-3 d-inline-block text-dark "> {{i.From_user}} {{i.Subject}} </router-link>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
    import axios from "axios"
    import router from '../router'
    export default {
        name: 'MUser',
        data(){
            return{
                configu:{
                    headers:{
                        "Content-Type" : "application/json"
                    }
                },
                url: "http://localhost:3001/api/v1/main/",
                ID_user:'',
                list_mails : []
            }
        },
        created: function(){
            this.ID_user = this.$route.params.id
            this.url = this.url + this.ID_user
            axios.get(this.url, JSON.stringify(this.ID_user), this.configu)
                    .then((response)=>{
                        this.list_mails = response.data
                    })
                    .catch((error)=>{
                        console.log(error)
                    })
        }
    }
</script>
