<template>
  <div id="app">
    <div class="header">
      <img alt="cork board logo" src="../public/cork-board.png" width="150px"/>
      <div class="title">
        The Corkboard
      </div>
      <div id="nav">
        <div class="menu-button">
          <router-link to="/Board">To The Board</router-link>
        </div>
        <div class="menu-button">
          <router-link to="/">Home</router-link>
        </div>
        <!-- <div class="menu-button">
          <router-link to="/Meet">Meet Up!</router-link>
        </div> -->
      </div>
    </div>

    <router-view />
    <div class="footer">
      <a href="https://github.com/lukeduke2222/The_Corkboard">Git Repository</a>
    </div>
  </div>
</template>

<style>
.header {
  background-color: #fdf496;
}
.menu-button {
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 10px;
  padding-bottom: 10px;

  background-color: #fefec8;
  border: solid 2px #a59079;
  border-radius: 30px;
}

.title {
  color: #a59079;
  font-size: 40px;
}

.footer {
  background-color: #fdf496;
  width: 100%;
  height: 100px;
  color: #a59079;
  padding-top: 40px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* background-color: #efe6dc; */
  /* background-color: white; */

}

#nav {
  padding-bottom: 30px;
  padding-top: 20px;

  max-width: 500px;
  margin: auto;
  display: flex;
  justify-content: space-around;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
