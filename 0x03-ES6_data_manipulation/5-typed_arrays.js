export default function createInt8TypedArray(length, position, value) {
  const typedArray = new ArrayBuffer(length);
  const int8 = new Int8Array(typedArray, 0, length);
  if (position >= length || position < 0) {
    throw new Error('Position outside range');
  } else {
    int8[position] = value;
  }
  return new DataView(typedArray);
}
