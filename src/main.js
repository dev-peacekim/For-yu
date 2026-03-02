import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

const app = createApp(App)

app.use(router)      // 👈 라우터 먼저 연결
app.mount('#app')   // 👈 그 다음 mount