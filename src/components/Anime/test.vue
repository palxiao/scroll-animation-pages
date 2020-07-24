<!--  -->
<template>
    <div class='flex-layout'>
        <div class="test"></div>
    </div>
</template>
<script lang='ts'>
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import VueBase from '@/vueBase';
import anime from 'animejs/lib/anime.es.js';
@Component({
  components: {}
})
export default class Name extends VueBase {
  @Prop([Number, String])
  private progress!: number | string;
  private seekAnim: any = null;
  private async mounted() {
    await this.$nextTick();
    this.seekAnim = anime.timeline({
      targets: '.test',
      easing: 'linear',
      autoplay: false
    });
    this.seekAnim
      .add({
        translateY: -100,
        duration: 350
      })
      .add({
        translateY: 300,
        duration: 350
      })
      .add({
        translateY: 300,
        rotate: 360,
        scale: 2.5,
        duration: 500
      })
      .add({
        translateY: 500,
        scale: 2.5,
        duration: 200
      });
  }
  @Watch('progress', { immediate: true, deep: true })
  private onChanged(val: number, oldVal: number) {
    if (this.seekAnim) {
      this.seekAnim.seek(this.seekAnim.duration * val);
    }
  }
}
</script>
<style scoped lang='less'>
.test {
  background: red;
  width: 100px;
  height: 100px;
}
</style>