<!--  -->
<template>
    <div class='flex-layout column-defalut'>
        <img class="text" src="../../assets/img/01-text.png" alt="">
        <img class="boat" src="../../assets/img/01-ship.png" alt="">
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
  private textAnime: any = null;
  private boatAnime: any = null;
  private async mounted() {
    await this.$nextTick();
    this.textAnime = anime.timeline({
      targets: '.text',
      easing: 'linear',
      autoplay: false
    });

    this.textAnime.add({
      opacity: 1,
      duration: 100
    });

    this.boatAnime = anime.timeline({
      targets: '.boat',
      easing: 'linear',
      autoplay: false
    });

    this.boatAnime.add({
      translateX: 400,
      duration: 200
    });
  }
  @Watch('progress', { immediate: true, deep: true })
  private onChanged(val: number, oldVal: number) {
    if (this.textAnime) {
      this.textAnime.seek(this.textAnime.duration * val);
    }
    if (this.boatAnime) {
      this.boatAnime.seek(this.boatAnime.duration * val);
    }
  }
}
</script>
<style scoped lang='less'>
.text {
  opacity: 0;
  margin: 25% 0;
}
.boat {
  margin-left: -620px;
}
</style>