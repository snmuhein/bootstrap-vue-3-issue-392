// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';

import BootstrapVue3 from 'bootstrap-vue-3';
import { createApp, h } from 'vue';

import App from './App.vue';
import router from './router';

const app = createApp({
  render: () => h(App),
});

app.use(BootstrapVue3);
app.use(router);
app.mount('#app');
