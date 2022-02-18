import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus';
import locale from 'element-plus/lib/locale/lang/zh-cn';
import 'normalize.css'; // css初始化
import { createPinia } from 'pinia';
import 'virtual:svg-icons-register';
import svgIcon from './components/SvgIcon/index.vue';
import router from './router';

const app = createApp(App);
app
  .use(router)
  .use(createPinia())
  .use(ElementPlus, { size: 'mini', zIndex: 3000, locale })
  .component('svg-icon', svgIcon)
  .mount('#app');
