<script setup>
import { ref } from "vue";

import TextCarousel from "@/components/text/TextCarousel.vue";

const Texts = ref(
    [
        "Hey it's me, Zachary Masson 💻.",
        "My portfolio is coming soon 😉.",
        "All you had to do was wait ⌛."
    ]
)
</script>

<template>
  <section id="hero">
    <article class="img">
      <img src="/imgs/fond.jpg" alt="" class="fond">
      <img src="/imgs/avatar.jpg" alt="" class="avatar">
    </article>
    <article class="title">
      <TextCarousel :Texts="Texts"/>
    </article>
  </section>
</template>

<style scoped lang="scss">
#hero {
  width: 100%;
  height: 100%;
  background-color: #1c1c1c;
  display: flex;
  justify-content: center;
  align-items: center;

  &>article {
    width: 100%;
    height: 100vh;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    &>img.avatar {
      width: 350px;
      border-radius: 5px;
      box-shadow: 15px 15px rgba(52, 46, 46, 1);
      z-index: 1;
    }

    &>img.fond {
      position: absolute;
      top: 10px;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0.3;
      filter: blur(3px);
      -webkit-filter: blur(3px);
    }

    &.title {
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
  }

}
</style>