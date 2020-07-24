<template>
  <div class="index">
    <br><br>
    <div style="text-align:center;">往下划</div>
    <br><br>

    <sticky-wrap v-model="one" name="one" long="1200" :bg='require("@/assets/img/01-bg.png")'>
      <Boat :progress="one"></Boat>
    </sticky-wrap>

    <sticky-wrap v-model="two" name="two" long="1000" :bg='require("@/assets/img/02-bg.png")'>
      <rockets :progress="two"></rockets>
    </sticky-wrap>

    <sticky-wrap v-model="three" name="three" long="2000">
      <test :progress="three"></test>
    </sticky-wrap>

    <div :style="'height:'+wh+'px'"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import VueBase from '@/vueBase';
import StickyWrap from '@/components/ScrollWrap';
import { test, Boat, Rockets } from '@/components/Anime';

@Component({
  components: { StickyWrap, test, Boat, Rockets }
})
export default class Index extends VueBase {
  public get wh(): number {
    return this.$getters.windowHeight;
  }
  private one: number = 0;
  private two: number = 0;
  private three: number = 0;
  // public constructor() {
  //   super();
  // }

  private async mounted() {
    await this.$nextTick();
  }
}
</script>

<style scoped>
</style>

