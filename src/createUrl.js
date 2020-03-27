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
  const base = template.split('/');
  const keyMask = /{([\s\S]+?)}/;
  const result = [];

  for (let i = 0; i < base.length; i++) {
    if (base[i].match(keyMask)) {
      const key = base[i].slice(1, -1);

      (params[key] === undefined)
        ? result.push('undefined')
        : result.push(params[key]);
    } else {
      result.push(base[i]);
    }
  }

  return result.join('/');
}

module.exports = createUrl;
