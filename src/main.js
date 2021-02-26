import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import App from './App.vue';
import store from './store/index.js'
import router from './router'

const app = createApp(App);
app.use(Antd);
app.use(router)
app.use(store)
app.mount('#app');

