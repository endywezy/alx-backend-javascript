#!/usr/bin/node

/**
 * getPaymentTokenFromAPI - Returns a promise based on the success parameter.
 * @param {boolean} success - If true, returns a resolved promise with data.
 * @returns {Promise<object>} - A promise that resolves to an object if success is true.
 */
function getPaymentTokenFromAPI(success) {
    if (success) {
        return Promise.resolve({ data: "Successful response from the API" });
    }
}

module.exports = getPaymentTokenFromAPI;
