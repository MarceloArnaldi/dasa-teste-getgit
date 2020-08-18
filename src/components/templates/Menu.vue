<template>
  <aside class="menu">

  </aside>
</template>

<script>

export default {
    name: 'Menu'
}

</script>

<style>

.menu {
    grid-area: menu;
    /* background: linear-gradient(to right, #232526, #414345); */
    background: linear-gradient(to right, white, rgb(218, 247, 247));
    display: flex;
    flex-direction: column;
    flex-wrap: wrap; /* quebra de linha */
}

</style>