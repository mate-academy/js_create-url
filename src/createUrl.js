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
  const templateParams = template.match(/\{\w+\}/g);
  const paramsWithoutBrackets
    = templateParams.map(x => x.replace(/\{|\}/g, ''));
  let resultStr = template;

  for (let i = 0; i < templateParams.length; i++) {
    resultStr = resultStr.replace(new RegExp(templateParams[i]),
      params[paramsWithoutBrackets[i]]);
  }

  return resultStr;
}

module.exports = createUrl;
