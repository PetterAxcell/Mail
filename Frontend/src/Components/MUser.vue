<template>
    <div class ="table-responsive">        
        <table class="table table-dark table-bordered table-striped ">
            <thead class="bg-info">
                <th>From</th>
                <th>Subject</th>
            </thead>
            <tbody>
                <tr v-for="i in this.list_mails" :key="i.ID_user">
                    <td>{{ i.From_user }}</td>
                    <td>{{ i.Subject }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
    import axios from "axios"
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
                list_mails : [],
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
