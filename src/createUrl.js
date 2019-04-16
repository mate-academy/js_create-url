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
  let match = template.match(/\{.*?\}/g);
  let urlArr = template.split('/');

  for (let i = 0; i < match.length; i++) {
    for (let j = 0; j < urlArr.length; j++) {
      if (match[i] === urlArr[j]) {
        urlArr[j] = params[match[i].replace(/\{(.*?)\}/, '$1')];
      }
    }
  }
  for (let i = 0; i < urlArr.length; i++) {
    if (urlArr[i] === undefined) {
      urlArr[i] = 'undefined';
    }
  }
  return urlArr.join('/');
}

module.exports = createUrl;
