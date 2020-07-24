<!--  -->
<template>
  <router-view v-if="done" />
  <div v-else class="black-07">
    <!-- loadingView... -->
  </div>
</template>
<script lang='ts'>
import { Component, Prop, Vue, Emit, Watch } from 'vue-property-decorator';
import VueBase from '@/vueBase';
import { mapMutations } from 'vuex';
@Component({
  components: {}
})
export default class Ready extends VueBase {
  private done: boolean = false;

  private async mounted() {
    await this.$nextTick();
    window.addEventListener('scroll', this.handleScroll);

    this.$commit('loading', '加载中');

    setTimeout(() => {
      this.done = true;
      this.$commit('loading', false);
    }, 300);
  }
  private handleScroll() {
    const currentIndex =
      document.documentElement.scrollTop ||
      window.pageYOffset ||
      document.body.scrollTop;
    this.$commit('changeScroll', currentIndex);
  }
}
</script>
<style scoped lang='less'>
</style>