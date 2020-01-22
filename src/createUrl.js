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
  // write code here
  const props = template.match(/\{\w+\}/g);

  const items = [];
  let result = template;

  props.forEach(el => {
    let k = el.replace('{', '');

    k = k.replace('}', '');
    items.push(k);
  });

  items.forEach(el => {
    if (params.hasOwnProperty(el)) {
      result = result.replace(`{${el}}`, `${params[el]}`);
    }

    if (!params.hasOwnProperty(el)) {
      result = result.replace(`{${el}}`, 'undefined');
    }
  });

  return result;
}

module.exports = createUrl;
