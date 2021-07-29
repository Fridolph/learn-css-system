<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
    <child :data="userList" v-slot="slotProps">
      <button>{{slotProps.item.name}}-{{slotProps.item.id}}</button>
    </child>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Child from './components/Child.vue'
import Counter from './components/Counter.vue'

export default defineComponent({
  name: 'App',
  components: {
    Child
  },
  data() {
    return {
      userList: [
        {
          id: 0,
          name: 'fri'
        },
        {
          id: 1,
          name: 'yk'
        },
        {
          id: 2,
          name: 'hhh'
        },
      ]
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
