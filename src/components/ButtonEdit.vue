<template>
  <button class="edit-btn" @click.stop="$dispatch('video:edit', video)">&hearts;</button>
</template>

<script>
  export default {
    name: 'ButtonEdit',

    props: ['video']
  }
</script>

<style lang="scss" scoped>
.edit-btn {
  position: relative;
  width: 30px;
  height: 30px;
  border-radius: 30px;
  left: 100%;
  top: 10px;
  margin-left: -40px;
  background-color: transparent;
  border-color: white;
  color: white;
}
</style>
