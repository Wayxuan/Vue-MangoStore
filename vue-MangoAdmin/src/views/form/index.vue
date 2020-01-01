<template>
  <div class="app-container">
    <h2>啥也木有</h2>
    <div class="app_count">

    </div>
  </div>

</template>

<script>
export default {
    data() {
      return {
        sizeForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      };
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
}
</script>

<style scoped>

</style>

