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
  let url = template;
  let openParentheses = 0;
  let closeParentheses = 0;

  for (let i = 0; i < url.length; i++) {
    if (url[i] === '{') {
      openParentheses = i;
    }

    if (url[i] === '}') {
      closeParentheses = i;
    }

    if (closeParentheses > openParentheses) {
      url = url
        .replace(url.slice(openParentheses, closeParentheses + 1),
          params[url.slice(openParentheses + 1, closeParentheses)]);
      i = openParentheses;
      closeParentheses = 0;
      openParentheses = 0;
    }
  }

  return url;
}

module.exports = createUrl;
