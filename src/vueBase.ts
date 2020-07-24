import { Vue } from 'vue-property-decorator';

export default class VueBase extends Vue {
    public $utils!: Type.Object
    public $ajax!: Type.Object
    public $store!: Type.Object
    public $router!: Type.Object
    public $getters!: Type.Object
    public $commit!: (name: string, data: any) => void
}
