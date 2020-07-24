import mutations from './mutations'
import actions from './actions'
const all = {
  state: {
    loading: null,
    windowHeight: document.documentElement.clientHeight || document.body.clientHeight,
    routeFrom: null,
    distance: 0
  },
  getters: {
    windowHeight: (state: Type.Object) => {
      return state.windowHeight
    },
    routeFrom: (state: Type.Object) => {
      return state.routeFrom
    },
    distance: (state: Type.Object) => {
      return state.distance
    }
  },
  mutations: {
    ...mutations
  },
  actions: {
    ...actions
  },
}
export default all
