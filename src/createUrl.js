'use strict';

/**
 * Implement createUrl function:
 *
 * Function takes string (template) and object (params). It returns URL based on
 * template and replaces all `{name}` with params.name.
 *
 * createUrl('/api/{list}/{id}', {list: 'public/items', id: 0}) ===
 *    '/api/public/items/0'
 * createUrl(
 *    '/api/{user}/{params}/{social}',
 *    {user: 'Petya', params: 'public/params', social: 'facebook'}) ===
 *    '/api/Petya/public/params/facebook'
 *
 * @param {string} template
 * @param {object} params
 *
 * @return {string} - created URL
 */
function createUrl(template, params) {
  // write code here
}

module.exports = createUrl;
