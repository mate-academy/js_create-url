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
  const regExp = /(?<={)\w+/g;
  const str = template;
  let str2 = '';

  for (let i = 0; i < template.match(regExp).length; i++) {
    const string = params[template.match(regExp)[i]];

    if (params.hasOwnProperty(template.match(regExp)[i]) === false && i > 0) {
      // eslint-disable-next-line max-len
      str2 = str2.replace(template.match(/{/) + template.match(regExp)[i] + template.match(/}/), undefined);
    } else if (params.hasOwnProperty(template.match(regExp)[i]) === false) {
      // eslint-disable-next-line max-len
      str2 = str.replace(template.match(/{/) + template.match(regExp)[i] + template.match(/}/), undefined);
      // eslint-disable-next-line max-len
    } else if (params.hasOwnProperty(template.match(regExp)[i]) === true && i > 0) {
      // eslint-disable-next-line max-len
      str2 = str2.replace(template.match(/{/) + template.match(regExp)[i] + template.match(/}/), string);
    } else if (params.hasOwnProperty(template.match(regExp)[i]) === true) {
      // eslint-disable-next-line max-len
      str2 = str.replace(template.match(/{/) + template.match(regExp)[i] + template.match(/}/), string);
    }
  }

  return str2;
}

module.exports = createUrl;
