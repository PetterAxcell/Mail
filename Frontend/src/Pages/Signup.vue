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
            <router-link to="/" class="text-primary">Sign In</router-link>
        </div>
    </form>
</template>

<script>
    import useVuelidate from '@vuelidate/core'
    import { required, minLength } from '@vuelidate/validators'
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
                    email:'',
                    pass:''
                }
            }
        },
        methods:{
            sendSignUpDates(){
                this.v$.$validate()
                if(this.v$.$error)
                {
                    alert("Complete the name")
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