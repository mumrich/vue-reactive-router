import { Plugin } from "vue";
import { wildcardImportVueComponents } from "../helpers/ImportHelpers";

const widgetComponents = import.meta.globEager("./*.vue");

const widgets: Plugin = {
  install(app) {
    wildcardImportVueComponents(app, widgetComponents);
  },
};

export default widgets;
