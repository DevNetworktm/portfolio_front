<template>
  <section>
    <img src="/imgs/avatar.jpg" alt="">
    <h1>Hey it's me Zachary Masson</h1>
    <h3>My portfolio is coming soon 😉</h3>
  </section>
</template>
<style scoped lang="scss">
section {
  width: 100%;
  height: 100vh;
  background-color: #181818;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5px;

  &>h1,h3 {
    color: white;
  }

  &>h3 {
    font-weight: normal;
  }

  &>img {
    width: 300px;
    border-radius: 10px;
    margin-bottom: 20px;
  }
}
</style>