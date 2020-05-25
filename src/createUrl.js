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
  const keysList = template.match(/(?<={)[a-z]{1,}(?=})/g);
  let url = template;

  for (let i = 0; i < keysList.length; i++) {
    if (params[keysList[i]] !== undefined) {
      url = url.replace(/\{[a-z]{1,}\}/, params[keysList[i]]);
    } else {
      url = url.replace(/\{[a-z]{1,}\}/, undefined);
    };
  }

  return url;
}

module.exports = createUrl;
