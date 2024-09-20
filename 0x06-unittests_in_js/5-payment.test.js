const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', function() {
  let spy;

  beforeEach(function() {
    spy = sinon.spy(console, 'log');
  });

  afterEach(function() {
    console.log.restore();
  });

  it('should call console.log with correct message and only once for the first case', function() {
    sendPaymentRequestToApi(100, 20);
    expect(console.log.calledOnceWith('The total is: 120')).to.be.true;
  });

  it('should call console.log with correct message and only once for the second case', function() {
    sendPaymentRequestToApi(10, 10);
    expect(console.log.calledOnceWith('The total is: 20')).to.be.true;
  });
});
