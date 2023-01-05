<script setup>
import { onMounted, ref } from "vue";

const props = defineProps(
    {
      Texts: Array
    }
)

const Carousel = ref();
const Articles = ref([]);
const ArticleActive = ref(0);

onMounted(() => {
  Articles.value = Array.from(Carousel.value.children[0].children);

  setInterval(() => {
    if (ArticleActive.value === Articles.value.length - 1) {
        Articles.value[ArticleActive.value].classList.add('animate__animated', 'animate__fadeOutUp');
        setTimeout(() => {
          ArticleActive.value = 0;
          Carousel.value.style.opacity = "0";
          Carousel.value.scrollTo({top: -Carousel.value.scrollTo});
          Articles.value.forEach(el => el.classList.remove('animate__animated', 'animate__fadeInUp', 'animate__fadeOutUp'));
          Carousel.value.style.opacity = "1";
          Articles.value[ArticleActive.value].classList.add('animate__animated', 'animate__fadeInUp');
        }, 500)
    }
    else {
      Articles.value[ArticleActive.value].classList.add('animate__animated', 'animate__fadeOutUp');
      setTimeout(() => {
        Carousel.value.scrollTo({top: Carousel.value.scrollTop + 200})
        Articles.value[ArticleActive.value + 1].classList.add('animate__animated', 'animate__fadeInUp');
        ArticleActive.value = ArticleActive.value + 1
      }, 500)
    }
  }, 4000)
})
</script>

<template>
  <section id="carousel" ref="Carousel">
    <section >
      <article v-for="(text, index) in Texts" :key="index">
        <h4>
          {{ text }}
        </h4>
      </article>
    </section>
  </section>
</template>

<style scoped lang="scss">
$carouselHeight: 200px;

section#carousel {
  width: 420px;
  height: $carouselHeight;
  overflow: hidden;

  &>section {

    &>article {
      width: 100%;
      height: $carouselHeight;

      display: flex;
      justify-content: center;
      align-items: center;

      &>h4 {
        width: 70%;
        height: 60%;
        display: flex;
        justify-content: center;
        align-items: center;

        font-size: 18px;
        font-weight: 400;
        color: white;
      }
    }
  }
}
</style>