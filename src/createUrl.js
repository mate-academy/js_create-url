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
  let url = template;
  const keys = template.match(/(?<={)\w+(?=})/g);
  const regExp = /{\w+}/;

  for (let i = 0; i < keys.length; i++) {
    if (params[keys[i]] === undefined) {
      url = url.replace(regExp, undefined);
    } else {
      url = url.replace(regExp, params[keys[i]]);
    }
  }

  return url;
}

module.exports = createUrl;
