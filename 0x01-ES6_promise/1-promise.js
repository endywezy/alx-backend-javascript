#!/usr/bin/env node

/*
 * Never make a promise you wont keep
*/

export default function getFullResponseFromAPI(value) {
  if (value === true) {
    return Promise.resolve({
      status: 200,
      body: 'Success',
    });
  }
  return Promise.reject(new Error('The fake API is not working currently'));
}
