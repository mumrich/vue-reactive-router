import { Plugin } from "vue";
import { wildcardImportVueComponents } from "../helpers/ImportHelpers";

const widgetComponents = import.meta.globEager("./*.vue");

const widgetEditors: Plugin = {
  install(app) {
    wildcardImportVueComponents(app, widgetComponents);
  },
};

export default widgetEditors;
