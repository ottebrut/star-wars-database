export function notFalse<T>(value: false | T): value is T {
  return !!value;
}
