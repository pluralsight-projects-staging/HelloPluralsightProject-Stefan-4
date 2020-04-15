var jsdom = require('jsdom'),
    fs = require('fs'),
    assert = require('chai').assert,
    file = fs.readFileSync('index.html').toString();

var { JSDOM } = jsdom;

describe('Your HTML Page', function() {
  var window;

  before(function() {
    window = new JSDOM(file).window;

    require('jquery')(window);
  });

  it('should have a title that\'s a child of the head element @title', function() {
    assert.equal(window.$('head > title').length, 1, 'Make sure to create a `title` element.');
    assert.notEqual(window.$('head > title').text(), '', 'Make sure to set the content of the `title` element to your name.');
  });

});
