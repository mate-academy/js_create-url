'use strict';

/**
 * Implement createUrl function:
 * fs_on_dec19_salogubova
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
  let url = template;

  for (const param in params) {
    const redExpParam = new RegExp(`{${param}}`);

    url = url.replace(redExpParam, params[param].toString());
  }

  const redExpUnderfindParam = /{\w+}/g;

  url = url.replace(redExpUnderfindParam, undefined);

  return url;
}

module.exports = createUrl;
