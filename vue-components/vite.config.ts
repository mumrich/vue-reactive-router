import Icons from "unplugin-icons/vite";
import WindiCSS from "vite-plugin-windicss";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import { resolve } from "path";

const libName = "mumrich-vue-components";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: "@/",
        replacement: resolve(__dirname, "src/"),
      },
    ],
  },
  build: {
    lib: {
      entry: resolve(__dirname, "lib/main.ts"),
      name: libName,
      fileName: (format) => `${libName}.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled into your library
      external: ["vue"],
      output: {
        // Provide global variables to use in the UMD build for externalized deps
        globals: {
          vue: "Vue",
        },
      },
    },
  },
  plugins: [vue(), Icons({ compiler: "vue3" }), WindiCSS()],
});
