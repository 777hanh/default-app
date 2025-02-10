import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { IonicVue, IonPage } from '@ionic/vue';
import 'ionicons/icons';

import App from './App.vue';
import router from './router';

import './assets/styles/main.scss';

const app = createApp(App);

app.use(createPinia());
app.use(IonicVue);
app.use(router);

app.component('ion-page', IonPage);

app.mount('#app');
