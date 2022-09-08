<template>
    <div>
        <h1 class="text-light">Mail</h1>
        <ul> 
            <li class="text-light" v-for="i in this.list_mails" :key="i.ID_user">
                {{i.Subject}}
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
