<!--  -->
<template>
    <div class='layout'>
        <img class="rockets" src="../../assets/img/02-rockets.png" alt="">
        <img class="text" src="../../assets/img/02-text.png" alt="">
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
  private rocketsAnime: any = null;
  private async mounted() {
    await this.$nextTick();
    this.textAnime = anime.timeline({
      targets: '.text',
      easing: 'linear',
      autoplay: false
    });

    this.textAnime.add({
      opacity: 1,
      marginTop: '100%',
      duration: 100
    });

    this.rocketsAnime = anime.timeline({
      targets: '.rockets',
      easing: 'linear',
      autoplay: false
    });

    this.rocketsAnime.add({
      top: '10%',
      duration: 10
    });
  }
  @Watch('progress', { immediate: true, deep: true })
  private onChanged(val: number, oldVal: number) {
    if (this.textAnime) {
      this.textAnime.seek(this.textAnime.duration * val);
    }
    if (this.rocketsAnime) {
      this.rocketsAnime.seek(this.rocketsAnime.duration * val);
    }
  }
}
</script>
<style scoped lang='less'>
.rockets {
  position: absolute;
  margin-left: 28px;
  top: 60%;
}
.text {
  margin-top: 20%;
}
.layout {
  text-align: center;
}
</style>