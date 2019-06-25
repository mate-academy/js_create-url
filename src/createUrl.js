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
  const keys = Object.keys(params);
  const paramKeys = keys.map(k => '{' + k + '}');
  const url = paramKeys.reduce((urlStr, key, idx) =>
    urlStr.replace(key, params[keys[idx]]), template);
  const urlArr = url.split('');
  while (urlArr.indexOf('{') !== -1) {
    const a = urlArr.indexOf('{');
    const b = urlArr.indexOf('}') - a;
    urlArr.splice(a, b + 1, 'undefined');
  }
  return urlArr.join('');
}

module.exports = createUrl;
