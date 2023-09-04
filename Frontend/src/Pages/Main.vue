<template>
    <Navegador :emailsDeleted="checkedNames" :createFlag="true" v-on:emitDeleteCookie="switchDeleteMode"/>
    <div class="table-responsive">        
        <table class="table table-dark table-bordered table-striped ">
            <thead class="bg-primary">
                <th :hidden="!flagDeleteCookie">Checkbok</th>
                <th>From    </th>
                <th>Subject </th>
            </thead>
            <tbody>
                <tr v-for="(item) in this.list_mails" :key="item.ID_user">
                    <td :hidden="!flagDeleteCookie" >  <input v-model="checkedNames" :value="item.ID_Mail" type="checkbox" class="form-check-input" id="Check1"> </td>
                    <td>{{ item.From_user }}</td>
                    <td>{{ item.Subject }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
    import axios from "axios"
    import { ref } from 'vue'
    import Navegador from "../Components/Navegador.vue"
    export default {
        name: 'MUser',
        components:{
            Navegador
        },
        data(){
            return{
                configu:{
                    headers:{
                        "Content-Type" : "application/json"
                    }
                },
                url: "http://localhost:3001/api/v1/main/",
                ID_user:'',
                list_mails : [],
                flagDeleteCookie : false,
                checkedNames : null
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
        },
        mounted: function(){
            this.checkedNames = ref([])
        },
        methods:{
            switchDeleteMode(){
                this.flagDeleteCookie = !this.flagDeleteCookie
            }
        }
    }
</script>
