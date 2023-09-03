<template>
    <nav class = "navbar navbar-light navbar-expand-md bg-light">
        <Tittle></Tittle>
        <div class="navbar-collapse col-2 d-flex justify-content-around" id="navbarNavAltMarkup">
            <a class="nav-item nav-link active">Write a new Email</a>
            <a class="nav-item nav-link">Delete an email</a>
        </div>
    </nav>
</template>

<script>
 import Tittle from "../Components/Tittle.vue"
    export default {
        name: 'Navegador',
        components:{
            Tittle
        }
    }
</script>