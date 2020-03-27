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
  return template.split('/').map(function(item) {
    const property = item.slice(1, -1);

    if (item[0] === '{') {
      if (params.hasOwnProperty(property)) {
        return params[property];
      };

      return 'undefined';
    };

    return item;
  }).join('/');
}

module.exports = createUrl;
