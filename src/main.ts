import { createApp } from "vue";
import App from "./App.vue";
import router from './router';
import ArcoVue from '@arco-design/web-vue';
import i18n from './locale/';
import '@arco-design/web-vue/dist/arco.css';
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
import store from './store';

const app = createApp(App);

app.use(ArcoVue, {});

app.use(ArcoVueIcon);
app.use(store);
app.use(router);
app.use(i18n);

app.mount('#app');
