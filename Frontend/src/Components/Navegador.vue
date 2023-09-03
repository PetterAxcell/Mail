<template>
    <nav class = "navbar navbar-light navbar-expand-md bg-light">
        <Title></Title>
        <div class="navbar-collapse col-2 d-flex justify-content-around" id="navbarNavAltMarkup">
            <router-link to="/main/writemail" class="nav-item nav-link active">Write a new Email</router-link>
            <router-link to="/main/delete-email" class="nav-item nav-link active">Delete an email</router-link>
        </div>
    </nav>
</template>

<script>
 import Title from "../Components/Title.vue"
    export default {
        name: 'Navegador',
        components:{
            Title
        }
    }
</script>