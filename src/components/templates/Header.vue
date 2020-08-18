<template>
    <header class="header"> 
        <!-- <img src="../../assets/dasaDasaEscuro.png" alt="" class="logo">       -->
        <h1 class="title">{{title}}</h1>
    </header>
</template>

<script>

export default {
    name: 'Header',
    props: {
        title: String,
        hideToggle: Boolean
    }    
}

</script>

<style>

.header {
    grid-area: header;
    background: linear-gradient(to right, rgb(0,216,216), rgb(65,35,150));
    display: flex;
    justify-content: center;
    align-items: center;
}

.title {
    font-size: 1.5em;
    color: rgb(0,216,216);
    font-weight: 100;
    flex-grow: 1;
    text-align: center;
}
/* 
.logo {
    padding: 0px 15px;
    width: 10%;
} */
</style>