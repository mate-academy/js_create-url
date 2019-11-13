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
  const partsOfLink = template.split('/');
  for (let i = 0; i < partsOfLink.length; i++) {
    const elementToReplace = partsOfLink[i].match(/\{[a-zA-Z]+\}/);
    const elementToInsert = partsOfLink[i].match(/[a-zA-Z]+/) || [''];
    if (elementToReplace !== null) {
      partsOfLink.splice(i, 1, `${params[elementToInsert[0]]}`);
    }
  }
  return partsOfLink.join('/');
}

module.exports = createUrl;
