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
  // write code here
  let createdURL = template;
  const pattern = /(\{)(\w+)(\})/g;

  function replacer(match, group1, group2) {
    return params[group2];
  }

  createdURL = createdURL.replace(pattern, replacer);

  return createdURL;
}

module.exports = createUrl;
