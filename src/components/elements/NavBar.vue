<script setup>
import { ref } from "vue";

import { closeElementWithFunction } from "@/assets/js/closeElement.js";
import useSessionStore from "@/stores/session.js";

const sessionStore = useSessionStore();
const Header = ref();

closeElementWithFunction(sessionStore.SetNavBarState, Header)
</script>

<template>
  <header ref="Header" :data-active="sessionStore.NavBarState">
    <nav>
      <ul>
        <li>
          <a href="#hero">
            <p>Home</p> <i class="fa-solid fa-mug-hot" title="Home" />
          </a>
        </li>
        <li>
          <a href="#works">
            <p>My Works</p> <i class="fa-solid fa-code" title="Works" />
          </a>
        </li>
        <li>
          <RouterLink to="/cv">
            <p>My Resume</p> <i class="fa-solid fa-id-card" title="Cv" />
          </RouterLink>
        </li>
        <li>
          <a href="#infos">
            <p>Information</p> <i class="fa-solid fa-info" title="Info" />
          </a>
        </li>
        <li>
          <RouterLink to="/contact">
            <p>my customers opinion</p> <i class="fa-solid fa-star-half-stroke" title="Avis" />
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/contact">
            <p>Contact Me</p> <i class="fa-solid fa-address-book" title="Contact" />
          </RouterLink>
        </li>
        <li @click="sessionStore.SetNavBarState(!sessionStore.NavBarState)">
          <a href="#">
            <p></p>
            <i v-if="sessionStore.NavBarState" class="fa-solid fa-xmark" title="More" />
            <i v-else class="fa-solid fa-bars" title="More" />
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped lang="scss">
  header {
    z-index: 3;
    position: fixed;
    bottom: 25px;
    right: 25px;

    width: 50px;
    height: 350px;
    overflow: hidden;

    background: rgba(102, 102, 102, 0.2);
    border-radius: 5px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(9px);
    -webkit-backdrop-filter: blur(9px);

    transition: .4s height, .4s width ease;

    &[data-active=true] {
      width: 250px;
      transition: .4s height, .4s width ease;

      &>nav {

        &>ul {

          &>li {

            &>a {

              &>p {
                opacity: 1;
                transition: .7s opacity ease;
              }
            }
          }
        }
      }
    }

    &>nav {
      width: 100%;
      height: 100%;

      &>ul {
        width: 100%;
        height: 100%;

        display: flex;
        align-items: end;
        flex-direction: column;

        &>li {
          list-style: none;
          width: 250px;
          overflow: hidden;

          &>a {
            gap: 20px;
            padding: 12px 5px;

            display: flex;
            justify-content: right;
            align-items: center;
            
            color: white;
            text-decoration: none;

            cursor: pointer;
            
            &>i {
              font-size: 16pt;
              width: 40px;
              display: flex;
              justify-content: center;
            }

            &>p {
              font-weight: normal;
              text-transform: uppercase;
              font-size: 10pt;
              opacity: 0;

              transition: .4s opacity ease;
            }
          }

          &:last-child {
              margin-top: auto;
          }

          &:hover {
            background-color: rgba(102, 102, 102, 0.2);;
            transition: .3s background-color ease;
          }

          transition: .3s background-color ease;
        }
      }
    }
  }
</style>