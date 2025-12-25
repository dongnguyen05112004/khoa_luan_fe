import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Default from './layout/wrapper/khachhang.vue' 
import blank from './layout/wrapper/blank.vue'
import Toaster from "@meforma/vue-toaster";

const app = createApp(App)


app.use(Toaster, {
    position: "top-right",
    duration: 3000,
    max: 5
})

app.use(router)
app.component("default-layout", Default);
app.mount("#app")