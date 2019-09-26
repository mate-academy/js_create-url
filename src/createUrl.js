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
  const templateArr = template.split(/\//);
  const workTemplate = templateArr.slice(0);

  for (let i = 1; i < workTemplate.length; i++) {
    for (const key in params) {
      if (workTemplate[i] === '{' + key + '}') {
        workTemplate.splice(i, 1, params[key]);
      }
    }
  }

  const result = workTemplate.join('/').replace(/{.*?}/, 'undefined');
  return result;
}

module.exports = createUrl;
