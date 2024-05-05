<template>
  <RouterView>
    
  </RouterView>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100vw;
  height: 100vh;
  overflow: auto;
}

.container {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: left;
  background-color: #eee;
}


.container .navbar {
    margin: 10px;
    display: flex;
}

.container .navbar .headerText {
    flex: 1 1 auto;
}


.container .mainContent {
    flex: 1 1 auto;
}

.mainContent {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center; 
  align-items: center;
  gap: 10px;
}

.mainContent form {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.mainContent .form-control {
  max-width: 60%;
}

</style>
