import './assets/main.css'
import 'fontawesome-4.7/css/font-awesome.min.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import i18n from './translations';

const app = createApp(App)

app.use(router)
app.use(i18n);
app.mount('#app');

// function titleCase(str) {
//     return str.toLowerCase().replace(/\b\w/g, s => s.toUpperCase());
// }

// function formatName(str) {
//     return titleCase(str.replaceAll('.', ' '));
// }

// router.beforeEach((to, from, next) => {
//     document.title = `${import.meta.env.VITE_APP_NAME} - ${formatName(to.name)}`;
//     if (to.matched.some(record => record.meta.public)
//     || localStorage.getItem('entries_user')!==null) {
//     next();
//     } else {
//     next({ name: 'home' });
//     }
// });
