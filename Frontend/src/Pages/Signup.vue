<template>
    <form justify-content-center  v-on:submit.prevent="sendSignUpDates()">
        <div class="mb-3">
            <label for="signupName" class="form-label text-light">First name</label>
            <input  v-model="user.name" class="form-control" id="signupName" type="text" placeholder="First name">
        </div>
        <div class="mb-3">
            <label for="signupSurname" class="form-label text-light">Last name</label>
            <input v-model="user.surname" class="form-control" id="signupSurname" type="text" placeholder="Last name">
        </div>
        <div class="mb-3">
            <label for="signupMail" class="form-label text-light">Email address</label>
            <input v-model="user.mail" class="form-control" id="signupMail" type="mail" placeholder="Email">
        </div>
        <div class="mb-3">
            <label class="text-light form-label" for="signupPassword">Password</label>
            <input v-model="user.pass" class="form-control" id="signupPassword" type="password" placeholder="Password">
        </div>
        <div class="mb-1"> 
            <button type="submit" value="Submit" class="btn btn-primary">Submit</button>
        </div>   
        <div class="mb-3">
            <label class="text-light">You have an account </label>
            <router-link to="/signin" class="text-primary">Sign In</router-link>
        </div>
    </form>
</template>

<script>
    import useVuelidate from '@vuelidate/core'
    import { required, minLength } from '@vuelidate/validators'
    import axios from "axios"
    import router from '../router'

    export default {
    setup () {
        return { v$: useVuelidate() }
      },
        name: "Signup",
        data(){
            return{
                user:{
                    name:'',
                    surname:'',
                    mail:'',
                    pass:'',
                },
                configu:{
                    headers:{
                        "Content-Type" : "application/json"
                    }
                },
                url: "http://localhost:3001/api/v1/signup"
            }
        },
        methods:{
            sendSignUpDates(){
                this.v$.$validate()
                if(this.v$.$error)
                {
                    alert("Complete the name")
                }
                else{
                    axios
                    .post(this.url, JSON.stringify(this.user), this.configu)
                    .then((response)=>{
                        if(response.status==200){
                            console.log("ok")
                        }
                        router.push({path:"/signin"})
                    })
                    .catch((e)=>{
                        console.log(e)
                    }); 
                }
            }
        },
        validations:{
            user:{
                name:{
                    required,
                    minLength: minLength(2)
                }
            }
        }
    } 
</script>