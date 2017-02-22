import Vue from 'vue';
import App from './App.vue';
import Mes from './Message.vue';

Vue.component('app-message', Mes)

new Vue({
  el: '#app',
  render: h => h(App)
});
