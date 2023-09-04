<template>
    <div class="p-3 bg-light">
        <router-link :to="urlBack" class="text-decoration-none"><h1 class="text-dark">Mail</h1> </router-link>
    </div> 
</template>

<script>
    export default {
        name: 'Title',
        date(){
            return{
                urlBack : ''
            }
        },
        created(){
            let id = sessionStorage.getItem('id') 
            this.urlBack = '/main/' + id
        },
        mounted(){
            let id = sessionStorage.getItem('id') 
            this.urlBack = '/main/' + id
        }
    }
</script>