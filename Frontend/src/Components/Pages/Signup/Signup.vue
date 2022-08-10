<template>
    <form justify-content-center>
        <div class="mb-3">
            <label for="signupName" class="form-label text-light">First name</label>
            <input class="form-control" id="signupName" type="text" placeholder="First name">
        </div>
        <div class="mb-3">
            <label for="signupSurname" class="form-label text-light">Last name</label>
            <input class="form-control" id="signupSurname" type="text" placeholder="Last name">
        </div>
        <div class="mb-3">
            <label for="signupMail" class="form-label text-light">Email address</label>
            <input class="form-control" id="signupMail" type="mail" placeholder="Email">
        </div>
        <div class="mb-3">
            <label class="text-light form-label" for="signupPassword">Password</label>
            <input class="form-control" id="signupPassword" type="password" placeholder="Password">
        </div>
        <div class="mb-1"> 
            <button class="btn btn-primary">Submit</button>
        </div>   
        <div class="mb-3">
            <label class="text-light">You have an account </label>
            <a href="index.html" class="text-primary"> Sign In</a>
        </div>
    </form>
</template>

<script>
    export default {
        name: "Signup",
        data(){
            return{
            }
        },
        emit:['flagSignUp'],
        methods:{
            gotoSignup(){
                this.$emit(this.flagSignUp)
            }
        }
    } 
</script>