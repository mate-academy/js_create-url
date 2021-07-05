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
  let url = '';
  const templArray = template.split('/');

  if (templArray[0] !== '') {
    url = templArray[0];
  }

  for (let i = 1; i < templArray.length; i++) {
    let item = templArray[i];

    if (item[0] === '{' && item[item.length - 1] === '}') {
      item = item.replace(/[{}]/g, '');
      item = params[item];
    }

    url += '/' + item;
  }

  return url;
}

module.exports = createUrl;
