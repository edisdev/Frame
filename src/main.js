import Vue from 'vue'
import App from './App.vue'
import store from './store'
// import './registerServiceWorker'

import Draggable from 'vuedraggable'
import VueQuillEditor from 'vue-quill-editor'
import VuePerfectScrollbar from 'vue-perfect-scrollbar'

Vue.component('Draggable', Draggable)
Vue.component('VuePerfectScrollbar', VuePerfectScrollbar)
Vue.use(VueQuillEditor, {})

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
