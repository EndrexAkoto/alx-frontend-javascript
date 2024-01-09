export const weakMap = new WeakMap();
export function queryAPI(endpoint) {
  let call = weakMap.has(endpoint) ? weakMap.get(endpoint) : 0;
  call += 1;
  if (call >= 5) {
    throw new Error('Endpoint load is high');
  }
  weakMap.set(endpoint, call);
}
