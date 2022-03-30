import "./assets/main.css";
import "virtual:windi-devtools";
import "virtual:windi.css";
import App from "./App.vue";
import { createApp } from "vue";
import { router } from "./routes/router";

const app = createApp(App);

app.use(router);

app.mount("#app");
