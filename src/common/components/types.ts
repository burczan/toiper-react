export type Color = 'primary' | 'link' | 'info' | 'success' | 'warning' | 'danger';

export type Size = 'is-small' | 'is-medium' | 'is-large' | undefined;

export type SetState<State> = React.Dispatch<React.SetStateAction<State>>;

export type Ref<T> = React.RefObject<T>;
