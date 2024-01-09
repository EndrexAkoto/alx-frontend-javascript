export default function cleanSet(set, startString) {
  if (startString === undefined || startString.length === 0) {
    return '';
  }
  return [...set]
    .filter((elm) => (elm !== undefined ? elm.startsWith(startString) : ''))
    .map((elm) => (elm !== undefined ? elm.slice(startString.length) : '')).join('-');
}
