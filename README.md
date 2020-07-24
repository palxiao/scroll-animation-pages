
## 一个移动端滑动动画项目的vue实现Demo
mobile vue implementation Demo for a slide animation project


运行

    yarn

    yarn serve


布局原理：sticky


动画实现依赖： [animeJs](https://animejs.com/)


基本使用方式：

```JavaScript
<sticky-wrap v-model="" name="" :long="Number">   wrap组件，long代表滑动长度
    <slot />    封装动画组件
</sticky-wrap>
```
