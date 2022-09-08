<template>
    <form justify-content-center v-on:submit.prevent="sendSignInDates()">
        <div class="mb-3">
            <label for="signinMail" class="form-label text-light">Email address</label>
            <input v-model="user.mail" class="form-control" id="signinMail" type="mail" placeholder="Email">
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
            <label class="text-light form-label" for="signinPassword">Password</label>
            <input v-model="user.pass" class="form-control" id="signinPassword" type="password" placeholder="Password">
        </div>
         <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="Check1">
            <label class="text-light form-check-label" for="Check1">Check me out</label>
        </div>

        <div class="mb-1"> 
            <button class="btn btn-primary">Submit</button>
        </div>   
        <div class="mb-3">
            <label class="text-light">You don't have an account? </label>
            <router-link to="/signup" class="text-primary">Sign up </router-link>
        </div>
    </form>
</template>

<script>
    import useVuelidate from '@vuelidate/core'
    import axios from "axios"
    import router from '../router'

    export default {
    setup () {
        return { v$: useVuelidate() }
      },
        name: "Signin",
        data(){
            return{
                configu:{
                    headers:{
                        "Content-Type" : "application/json"
                    }
                },
                url: "http://localhost:3001/api/v1/signin",
                user:{
                    mail:'',
                    pass:'',
                }
            }
        },
        methods:{
            sendSignInDates(){
                    axios.post(this.url, JSON.stringify(this.user), this.configu)
                    .then((response)=>{
                        let id = response.data
                        let internalPath = "/main/" + id
                        router.push({path:internalPath})
                    })
                    .catch((error)=>{
                        console.log(error)
                    })
                }
            }
    } 
</script>