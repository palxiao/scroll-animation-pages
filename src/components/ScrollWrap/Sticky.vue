
<template>
  <div class="sticky">
    <div :ref="name" :style="{height:wh+'px',backgroundImage:'url('+bg+')'}" :class="{'release-scroll':relative}" class="box">
      <slot></slot>
    </div>
    <div :ref="name+'body'" :style="'height:'+long+'px;'"></div>
  </div>
</template>
<script lang='ts'>
import { Component, Prop, Vue, Emit, Watch } from 'vue-property-decorator';
import VueBase from '@/vueBase';
import { Progress } from 'vant';
Vue.use(Progress);
@Component({
  components: {}
})
export default class Sticky extends VueBase {
  public get wh(): number {
    return this.$getters.windowHeight;
  }
  private relative: boolean = false;
  private startIndex: number = 0;
  private endIndex: number = 0;
  private el!: Type.Object;
  private body!: Type.Object;
  private url!: string;
  @Prop([String, Number])
  private name!: string | number;
  @Prop([String, Number])
  private long!: number | string;
  @Prop(String)
  private bg!: string;

  private async mounted() {
    await this.$nextTick();
    this.el = this.$refs[this.name];
    this.body = this.$refs[this.name + 'body'];
    this.startIndex = this.el.offsetTop;
    this.endIndex = this.startIndex + parseInt(this.long + '', 10);
    // this.endIndex = this.startIndex + body.offsetHeight;
  }

  public get scroll(): number {
    return this.$getters.distance;
  }

  @Watch('scroll', { immediate: true, deep: true })
  private onScrollChanged(scroll: number, oldVal: number) {
    let process = 0;
    if (scroll > this.startIndex && scroll <= this.endIndex) {
      process = (scroll - this.startIndex) / (this.endIndex - this.startIndex);
      this.$emit('input', process);
      this.relative = false;
      this.el.style.top = 0;
    } else if (scroll > this.endIndex) {
      this.$emit('input', 1);
      this.relative = true;
      if (this.el) {
        this.el.style.top = this.body.offsetHeight + 'px';
      }
    }
  }
}
</script>
<style scoped lang='less'>
.box {
  background-repeat: repeat-x;
  width: 100%;
  position: sticky;
  height: 100%;
  overflow: hidden;
}
.release-scroll {
  position: relative !important;
}
</style>