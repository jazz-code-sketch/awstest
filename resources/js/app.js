import Vue from 'vue'
import App from './components/App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
import router from './router';
import store from './store'
import VueCookies from 'vue-cookies'

//custom css
import '../css/CustomCSS.css' 

//import js classes
import * as Account from '././class/SRSParts/Account'




require('./bootstrap');

Vue.use(VueCookies);
Vue.use(Vuetify);
Vue.config.productionTip = false;


Vue.prototype.$UserInfo = new Account.UserInfo(); //handles all related to accounts




export const bus = new Vue(); //event bus

new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    router,
    store,
    components: { App },
    template: '<App/>'

});
