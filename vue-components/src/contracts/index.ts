import { FunctionalComponent } from "vue";

export interface ITreeViewItem {
  name: string;
  children?: ITreeViewItem[];
}

export interface IVueWidget {
  component: string;
  props: Record<string, any>;
}

export interface IVueWidgetEditor extends IVueWidget {
  title?: string;
  icon?: FunctionalComponent;
  preview?: FunctionalComponent;
}
