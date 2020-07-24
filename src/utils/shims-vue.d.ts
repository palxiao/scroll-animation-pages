declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}

declare module 'qrcode'
declare module 'animejs/lib/anime.es.js'

declare module 'vue/types/vue' {
  interface Vue {
    // $router: any,
    // $store: any
  }
}

