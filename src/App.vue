<template>
  <div>
    <TheHeader/>
    <div style="display: flex;">
      <TheMenu/>
      <TheContent style="flex :1"/>
    </div>
  </div>

</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
import TheMenu from './components/layout/TheMenu.vue';
import TheContent from './components/layout/TheContent.vue';


export default {
  name: 'App',
  components: {
    TheHeader,
    TheMenu,
    TheContent
}
}
</script>

<style>
@import url("./style/base/main.css");
</style>
