'use strict';

function createUrl(template, params) {
  const regexp = /{(\w+)}/g;

  const url = template.replace(regexp, (match, param) => params[param]);

  return url;
}

module.exports = createUrl;
