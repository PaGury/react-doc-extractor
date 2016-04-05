const assert = require('chai').assert;
const fs = require('fs');
const extract = require('../index').extract;
const _ = require('lodash');

describe('parsing', function() {
  const component1File = fs.readFileSync('tests/Component1.jsx', 'utf8');
  const component2File = fs.readFileSync('tests/Component2.jsx', 'utf8');

  it('should just work', function() {
    const metadatas = extract(component1File)[0];
    assert.equal(metadatas.comments.length, 4);
    assert.equal(_.keys(metadatas.properties).length, 1);
    assert.equal(metadatas.properties[0].comments.length, 4);
  });

  it('should just work too', function() {
    const metadatas = extract(component2File)[0];
    assert.equal(metadatas.comments.length, 0);
    assert.equal(_.keys(metadatas.properties).length, 1);
    assert.equal(metadatas.properties[0].comments.length, 0);
  });
});