<template>
  <div>
    Home
  </div>
</template>

<script>
    export default {
        methods: {
            add() {
                this.$store.commit('increment')
            }
        }
    }
</script>