#!/usr/bin/env bash

# This script will create the necessary files and their content for the solution

# Create 6-payment_token.js with the function
echo '#!/usr/bin/node

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

module.exports = getPaymentTokenFromAPI;' > 6-payment_token.js

# Make 6-payment_token.js executable
chmod +x 6-payment_token.js

# Create 6-payment_token.test.js with the test cases
echo '#!/usr/bin/node

const getPaymentTokenFromAPI = require("./6-payment_token");
const { expect } = require("chai");

describe("getPaymentTokenFromAPI", function() {
    it("should return a resolved promise with data when success is true", function(done) {
        getPaymentTokenFromAPI(true).then((response) => {
            expect(response).to.include({ data: "Successful response from the API" });
            done();
        }).catch((error) => done(error));
    });
});' > 6-payment_token.test.js

# Make 6-payment_token.test.js executable
chmod +x 6-payment_token.test.js

echo "Files 6-payment_token.js and 6-payment_token.test.js have been created successfully."

