<template>
  <div class="home">

    <h1 class="content">Welcome to the Corkboard!</h1>
    <hr>
    <h1 class="content">What is Corkboard?</h1>
    <h2 class="content">Corkboard is a public forum where you can post a note for all to see.
    Join the community so others can reach out to you! Enjoy your stay
    and leave a note!</h2>
    <hr>
    <div class="menu-button">
      <router-link to="/Board">Leave a Note</router-link>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {
  },
};
</script>

<style scoped>
  .home {
    max-width: 800px;
    margin: auto;
    color: #a59079;
  }

  .content {
    margin-bottom: 50px;
    margin-top: 50px;

  }

  .menu-button {
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 10px;
    padding-bottom: 10px;

    background-color: #fefec8;
    border: solid 2px #a59079;
    border-radius: 30px;
    width: 70px;
    margin: auto;
    margin-bottom: 50px;
  }

  hr {
    margin-bottom: 50px;
  }
</style>
