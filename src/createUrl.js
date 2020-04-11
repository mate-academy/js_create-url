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
  const rest = template.split(/({\w+})/).filter(str => str);

  for (let i = 0; i < rest.length; i++) {
    if (rest[i][0] === '{') {
      const name = rest[i].slice(1, -1);

      rest[i] = params.hasOwnProperty(name) ? params[name] : 'undefined';
    }
  }

  return rest.join('');
}

module.exports = createUrl;
