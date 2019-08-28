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
  const objectValues = Object.entries(params);
  let url = template;

  objectValues.forEach(item => {
    const pattern = new RegExp(`{${item[0]}}`, 'g');
    url = url.replace(pattern, item[1]);
  });
  return url.replace(/{\w}/g);
}

module.exports = createUrl;
