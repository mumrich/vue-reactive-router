import "virtual:windi.css";
import App from "./App.vue";
import { createApp } from "vue";
import { router } from "./routes/router";
import widgets from "./widgets";
import widgetEditors from "./widget-editors";

const app = createApp(App);

app.use(router);
app.use(widgets);
app.use(widgetEditors);

app.mount("#app");
