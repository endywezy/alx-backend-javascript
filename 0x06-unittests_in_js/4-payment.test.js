const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', function() {
  beforeEach(function() {
    sinon.stub(Utils, 'calculateNumber').returns(10);
    sinon.spy(console, 'log');
  });

  afterEach(function() {
    Utils.calculateNumber.restore();
    console.log.restore();
  });

  it('should call Utils.calculateNumber with correct arguments', function() {
    sendPaymentRequestToApi(100, 20);
    expect(Utils.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
  });

  it('should log the correct message', function() {
    sendPaymentRequestToApi(100, 20);
    expect(console.log.calledWith('The total is: 10')).to.be.true;
  });
});
