'use strict';

/**
 * Implement createUrl function:
 *
 * Function takes string (template) and object (params). It returns URL based on
 * template and replaces all `{name}` with params.name. If params.name is not
 * given put 'undefined' instead.
 *
 * createUrl('/api/{id}', {id: 0}) === '/api/0'
 * createUrl('/api/{id}', {name: 'Petya'}) === '/api/undefined'
 * createUrl('/api/{list}/{id}', {list: 'items', id: 0}) === '/api/items/0'
 *
 * @param {string} template
 * @param {object} params
 *
 * @return {string} - created URL
 */
function createUrl(template, params) {
  const keysArr = Object.keys(params);
  const valuesArr = Object.values(params);
  let regex;
  let holder = template;
  for (let i = 0; i < keysArr.length; i++) {
    regex = new RegExp('{' + keysArr[i] + '}', 'g');
    holder = holder.replace(regex, valuesArr[i]);
  }
  return holder.replace(/{\w}/g);
}

module.exports = createUrl;

createUrl(
  '/api/{a}/{b}/{c}/{d}', { a: 1, b: 2, d: 4 }
);
