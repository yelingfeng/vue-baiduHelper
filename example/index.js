import Vue from 'vue'
import App from './app.vue'
import BMapHelper from '../src/index'

Vue.use(BMapHelper)

new Vue({
    el: '#app',
    render: h => h(App, {})
})
