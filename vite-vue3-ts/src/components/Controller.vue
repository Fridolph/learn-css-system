<template>
  <div>
    <button @click="add">+</button>
    <button @click="sub">-</button>
  </div>
</template>

<script>
export default {
  emits: ['add', 'sub'],
  methods: {
    add() {
      this.$emit('add')
    },
    sub() {
      this.$emit('sub')
    }
  }
}
</script>

<style>

</style>
