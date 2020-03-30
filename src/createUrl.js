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
  // eslint-disable-next-line no-return-assign,no-unused-vars
  let str;

  // eslint-disable-next-line no-return-assign
  return str = template.replace(/{(\w+)}/g, (match, value, index) => {
    // eslint-disable-next-line no-console
    console.log(match, value, index);
    // eslint-disable-next-line no-console
    console.log(params[value]);

    return params[value];
  });
}

module.exports = createUrl;
