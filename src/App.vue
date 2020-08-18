<template>
  <div id="app">
    <Header title="Consumindo GitHub Api" />
    <Logo />
    <Menu />
    <Content />
    <Footer />
  </div>
</template>

<script>

import Header   from './components/templates/Header'
import Logo     from './components/templates/Logo'
import Menu     from './components/templates/Menu'
import Content  from './components/templates/Content'
import Footer   from './components/templates/Footer'

export default {
  name: "App",
  components: { Header, Menu, Content, Footer, Logo }  
}
</script>

<style>

* {
  font-family: Helvetica, Arial, sans-serif;
}

body {
  margin: 0;
}

#app {
  
  height: 100vh;
  display: grid;
  grid-template-rows: 80px 1fr 40px;
  grid-template-columns: 150px 1fr;
  grid-template-areas: 
    "logo header"
    "menu content"
    "footer footer";
}

</style>
