'use strict';

const createUrl = require('./createUrl');

test('Create URL missing params', () => {
  expect(createUrl(
    '/api/{a}', {
      b: 2,
    }
  ))
    .toBe('/api/undefined');
});

test('Create URL with 2 params', () => {
  expect(createUrl(
    'http://localhost:3000/api/countries/{country}/regions/{region}/', {
      country: 'Ukraine',
      region: 'Kyiv',
    }
  ))
    .toBe('http://localhost:3000/api/countries/Ukraine/regions/Kyiv/');
});

test('Create URL with 2 params', () => {
  expect(createUrl(
    '/api/{list}/{id}', {
      id: 0,
      list: 'public/items',
    }
  ))
    .toBe('/api/public/items/0');
});

test('Create URL with 3 params', () => {
  expect(createUrl(
    '/api/{user}/{params}/{social}', {
      user: 'Petya',
      params: 'public/params',
      social: 'facebook',
    }
  ))
    .toBe('/api/Petya/public/params/facebook');
});

test('Create URL with 5 params', () => {
  expect(createUrl(
    '/api/{a}/{b}/{c}/{d}/{e}', {
      e: 5,
      a: 1,
      d: 4,
      b: 2,
      c: 3,
    }
  ))
    .toBe('/api/1/2/3/4/5');
});

test('Create URL with 3 valid params and 1 missing', () => {
  expect(createUrl(
    '/api/{a}/{b}/{c}/{d}', {
      a: 1,
      b: 2,
      d: 4,
    }
  ))
    .toBe('/api/1/2/undefined/4');
});
