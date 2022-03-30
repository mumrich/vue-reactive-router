import "virtual:windi-devtools";
import "virtual:windi.css";
import App from "./App.vue";
import widgetEditors from "./widget-editors";
import widgets from "./widgets";
import { createApp } from "vue";
import { router } from "./routes/router";

const app = createApp(App);

app.use(router);
app.use(widgets);
app.use(widgetEditors);

app.mount("#app");
