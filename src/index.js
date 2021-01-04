import Vue from "vue";
import HeaderText from './components/HeaderText.vue';

new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  },
  components: {
    "header-text": HeaderText,
  }
})