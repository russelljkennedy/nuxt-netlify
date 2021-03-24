<template>
  <div>
    <h2>{{ data.name }}</h2>

    <Description :data="data" />

    <li v-for="post of posts" :key="post.slug">
      <NuxtLink :to="post.path">{{ post.title }}</NuxtLink>
    </li>
  </div>
</template>

<script>
import Description from "~/components/Description";

export default {
  head() {
    return {
      script: [
        { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" }
      ]
    };
  },
  components: {
    Description
  },
  async asyncData({ $content }) {
    const posts = await $content("blog").fetch();
    const dataArr = await $content("data").fetch();
    const data = await dataArr[0];
    return {
      posts,
      data
    };
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1.1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
