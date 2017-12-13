declare module '*.css' {
  const styles: any;
  export = styles;
}

declare module '*.scss' {
  const styles: any;
  export = styles;
}

declare interface Window {
  devToolsExtension?(): (args?: any) => any;
}

declare interface ReducerState<S> {
  error: boolean;
  wasLoaded: boolean;
  isLoading: boolean;
  data: Partial<S>;
}
