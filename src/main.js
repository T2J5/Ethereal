import { createApp } from 'vue';
import App from './App.vue';
import store from './store/index.js'
import router from './router'
import { Button } from 'vant'
import 'lib-flexible/flexible'

import 'vant/lib/index.css'; // 全局引入样式

const app = createApp(App);

app.use(Button) // 注册组件

app.use(router)
app.use(store)
app.mount('#app');

