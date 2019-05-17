import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';

Vue.use({
	install(Vue) {
		Vue.prototype.$api = axios.create({
			baseURL: 'http://localhost:8888/ApiRestFul/api.php/'
		})
	}
})

new Vue({
	render: h => h(App)
}).$mount('#app');