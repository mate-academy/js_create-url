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
  const numberParams = template.split('{').length;
  let res = template;
  for (let i = 1; i < numberParams; i++) {
    let param = res.match(/{.*?}/)[0];
    param = param.substring(1, param.length - 1);
    param = (params.hasOwnProperty(param)) ? params[param] : 'undefined';
    res = res.replace(/{.*?}/, param);
  }
  return res;
}

module.exports = createUrl;
