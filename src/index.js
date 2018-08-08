import camelcaseKeys from 'camelcase-keys';
export {
  camelcaseKeys
};

export function isPlainObject(object) {
  return Object.prototype.toString.call({}) === Object.prototype.toString.call(object);
}

function camelToSnake(p) {
  return p.replace(/([A-Z])/g, s => `_${s.charAt(0).toLowerCase()}`);
}

export function snakecaseKeys(object, { deep = false, onlyPlainObject = true } = {}) {
  const reducer = (base, camelKey) => {
    const snakeKey = camelToSnake(camelKey);
    if (deep && isPlainObject(object[camelKey])) {
      return Object.assign({}, base, { [snakeKey]: snakecaseKeys(object[camelKey], { deep, onlyPlainObject }) });
    }
    return Object.assign({}, base, { [snakeKey]: object[camelKey] });
  };
  if (onlyPlainObject && isPlainObject(object)) {
    return object;
  }
  return Object.keys(object).reduce(reducer, {});
}

export default Object.freeze({
  isPlainObject,
  camelcaseKeys,
  snakecaseKeys,
});
