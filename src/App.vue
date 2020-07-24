<!--  -->
<template>
    <div class=''>
        <router-view></router-view>
    </div>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import VueBase from '@/vueBase';
@Component({
  components: {}
})
export default class AppMain extends VueBase {
  private async mounted() {
    await this.$nextTick();
    console.log('welcome');
  }
}
</script>
<style scoped lang='less'>
</style>