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
  const paramNames = Object.getOwnPropertyNames(params);
  let inputStr = template;

  for (let i = 0; i < paramNames.length; i++) {
    const pattern = new RegExp('{' + paramNames[i] + '}');

    if (`{${paramNames[i]}}`.match(pattern)) {
      inputStr = inputStr.replace(pattern, params[paramNames[i]]);
    }
  }

  return inputStr.replace(/\{\w+\}/, 'undefined');
}

module.exports = createUrl;
