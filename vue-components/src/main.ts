import "virtual:windi.css";
import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./routes/router";
import "./assets/main.css";

const app = createApp(App);

app.use(router);

app.mount("#app");
