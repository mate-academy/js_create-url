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
  const obj = params;
  let arr = [];

  if (template.includes('http:')) {
    const http = template.slice(0, 5);

    arr = template.split('/').slice(1);
    arr.unshift(http);
  } else {
    arr = template.split('/').slice(1);
  }

  const res = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes('{')) {
      arr[i] = arr[i].slice(1, arr[i].length - 1);

      if (obj.hasOwnProperty(arr[i])) {
        res.push(obj[arr[i]]);
      } else {
        res.push('undefined');
      }
    } else {
      res.push(arr[i]);
    }
  }

  if (res.join('').includes('http')) {
    return res.join('/');
  } else {
    return '/' + res.join('/');
  }
}

module.exports = createUrl;
