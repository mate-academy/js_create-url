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
// function createUrl(template, params) {
//   let url = '' + template.match(/[^{]+/)[0];

//   console.log(url);

//   const matches = template.match(/\{*\w+\}/g);

//   for (const i of matches) {
//     url += '/' + params[i.slice(1, -1)];
//   }

//   return url;
// }

function createUrl(template, params) {
  const regex = /\{*\w+\}/;
  const matches = template.match(new RegExp(regex, 'g'));
  let url = template;

  for (const i of matches) {
    const key = params[i.slice(1, -1)];

    url = url.replace(regex, key);
  }

  return url;
}

module.exports = createUrl;
