var sinon = require('sinon');
var assert = require('chai').assert;
var preventDefault = require('../');

describe('preventDefault Wrapper', function() {
  var mockEvent = {
    preventDefault: sinon.spy(),
  };

  afterEach(function() {
    mockEvent.preventDefault.reset();
  });

  it('calls preventDefault if an event object is passed through', function() {
    assert.equal(preventDefault(mockEvent), true);
    assert.equal(mockEvent.preventDefault.calledOnce, true);
  });

  it('calls preventDefault when an event handler is called', function () {
    var mockHandler = function(e) {
      return 1;
    };
    var fn = preventDefault(mockHandler);
    assert.equal(typeof fn, 'function');
    assert.equal(fn(mockEvent), 1);
    assert.equal(mockEvent.preventDefault.calledOnce, true);
  });

  it('returns null if null is passed', function() {
    assert.equal(preventDefault(null), null);
  });

  it('returns undefined if undefined is passed', function() {
    assert.equal(preventDefault(undefined), undefined);
  });

  it('returns false if neither an event or a function is passed', function() {
    assert.equal(preventDefault(2), false);
    assert.equal(preventDefault({}), false);
  });

  it('returns false if preventDefault is present but not a function', function() {
    var e = {
      preventDefault: {}
    };

    assert.equal(preventDefault(e), false);
  });
});