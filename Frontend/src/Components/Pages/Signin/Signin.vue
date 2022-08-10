<template>
    <form justify-content-center>
        <div class="mb-3">
            <label for="signinMail" class="form-label text-light">Email address</label>
            <input class="form-control" id="signinMail" type="mail" placeholder="Email">
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
            <label class="text-light form-label" for="signinPassword">Password</label>
            <input class="form-control" id="signinPassword" type="password" placeholder="Password">
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
            <a href="signup.html" class="text-primary"> Sign Up</a>
        </div>
    </form>
</template>

<script>
    export default {
        name: "Signin",
        data(){
            return{
            }
        },
        methods:{
            gotoSignup(){
                this.$emit(this.flagSignUp)
            }
        }
    } 
</script>