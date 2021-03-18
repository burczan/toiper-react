type FalsyType = false | null | undefined | '' | 0;

export function typedBoolean<ValueType>(value: ValueType): value is Exclude<ValueType, FalsyType> {
  return Boolean(value);
}

export type SetState<State> = React.Dispatch<React.SetStateAction<State>>;

export type Ref<T> = React.RefObject<T>;
