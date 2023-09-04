<template>
    <Navegador/>
    <div class="w-50 position-absolute top-50 start-50 translate-middle">
       <form justify-content-center v-on:submit.prevent="sendEmail()">
           <div class="mb-3">
               <label for="SubjectForm" class="form-label text-light">Subject</label>
               <input v-model="email.subject" class="form-control" id="SubjectForm" type="mail" placeholder="Subject">
           </div>
           <div class="mb-3">
               <label for="ToUserForm" class="form-label text-light">To user</label>
               <input v-model="email.to" class="form-control" id="ToUserForm" type="mail" placeholder="To user">
           </div>
           <div class="mb-3">
               <label for="MessageForm" class="form-label text-light">Message</label>
               <input v-model="email.message" class="form-control" id="MessageForm" type="mail" placeholder="Message">
           </div>
           <div class="mb-1"> 
               <button class="btn btn-primary">Submit</button>
           </div>
       </form>
   </div>
</template>
<script>
    import Navegador from '../Components/Navegador.vue'
    import axios from "axios"
    export default {
        name: "WriteEmail",
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
                url: "http://localhost:3001/api/v1/send-email",
                email:{
                    subject:'',
                    to:'',
                    message:'',
                    id:''
                },
            }
        },
        methods: {
            sendEmail(){
                this.email.id= sessionStorage.getItem('id')
                console.log(this.email)
                axios.post(this.url, JSON.stringify(this.email), this.configu)
                .then((response)=>{
                        console.log("alright")
                    })
                    .catch((error)=>{
                        console.log(error)
                    })
            }
        },
    }
</script>