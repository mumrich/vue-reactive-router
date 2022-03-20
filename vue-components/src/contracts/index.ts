export interface ITreeViewItem {
  name: string;
  children?: ITreeViewItem[];
}

export interface IVueWidget {
  component: string;
  props: Record<string, any>;
}
