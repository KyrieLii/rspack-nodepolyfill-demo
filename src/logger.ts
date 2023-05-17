export function debug(method: string, ...args: unknown[]) {
  console[method](...args);
}
