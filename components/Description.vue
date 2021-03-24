<template>
  <div :class="data.class">
    <p>Component</p>
    <p>Description: {{ data.description }}</p>
  </div>
</template>

<script>
export default {
  props: ["data"]
};
</script>

<style lang="css" scoped>
.red {
  background: #ff7575;
  text-align: center;
  padding: 20px;
  margin: 30px 0;
  width: 50vw;
}
</style>