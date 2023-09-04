<template>
    <nav class = "navbar navbar-light navbar-expand-md bg-light">
        <Title v-on:click="switchDeleteModeReset"></Title>
        <div class="navbar-collapse col-2 d-flex justify-content-around" id="navbarNavAltMarkup">
            <router-link v-on:click="falseMainMode" to="/main/write-mail" class="nav-item nav-link active" :hidden="flagDeleteCookie">Write a new Email</router-link>
            <span class="nav-item nav-link active" v-on:click="switchDeleteMode" :hidden="flagDeleteCookie"> Delete an email </span>
            <span class="nav-item nav-link active" :hidden="!flagDeleteCookie" v-on:click="switchDeleteMode"> Cancel </span>
            <span v-on:click="eliminateMail" class="nav-item nav-link active" :hidden="!flagDeleteCookie"> Delete </span>
        </div>
    </nav>
</template>

<script>
    import Title from "./Title.vue"
    import axios from "axios"
    export default {
        name: 'Navegador',
        emits: ['emitDeleteCookie'],
        props:['createFlag', 'emailsDeleted'],
        data(){
            return{
                configu:{
                    headers:{
                        "Content-Type" : "application/json"
                    }
                },
                url: "http://localhost:3001/api/v1/delete-email",
                flagDeleteCookie : false,
                isMainPage: true
            }
        },
        components:{
            Title
        },
        mounted(){
            this.isMainPage = this.createFlag;
        },
        onMounted: {
            
        },
        methods:{
            switchDeleteMode(){
                if (this.isMainPage == true)
                {
                    this.flagDeleteCookie = !this.flagDeleteCookie;
                    this.$emit('emitDeleteCookie', this.flagDeleteCookie);   
                }
            },
            switchDeleteModeReset(){
                if (this.flagDeleteCookie === true) this.switchDeleteMode()
                this.isMainPage = true;
            },
            falseMainMode(){
                this.isMainPage = false;
            },
            eliminateMail(){
                let payload = {'id_emails': this.emailsDeleted}
                axios.post(this.url, JSON.stringify(payload), this.configu)
                .then((response)=>{
                        console.log("alright")
                    })
                    .catch((error)=>{
                        console.log(error)
                    })
                this.$router.push('/main/write-mail')
                //this.$router.push('/main/13')
            }
        },
    }
</script>