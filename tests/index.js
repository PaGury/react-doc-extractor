const assert = require('chai').assert;
const fs = require('fs');
const extract = require('../index').extract;
const _ = require('lodash');

describe('parsing', function() {
  const component1File = fs.readFileSync('tests/Component1.jsx', 'utf8');

  it('should success', function() {
    const metadatas = extract(component1File)[0];
    assert.equal(metadatas.comments.length, 4);
    assert.equal(_.keys(metadatas.properties).length, 1);
  });
});