///<reference path='../resources/jest.d.ts'/>
///<reference path='../dist/immutable.d.ts'/>

jest.autoMockOff();

import I = require('immutable');

describe('Immutable', () => {

  it('produces a Map with fromJS', () => {
    var map = I.fromJS({alpha: 1});
    expect(map.get('alpha')).toBe(1);
  });

  it('converts a deep object with fromJS', () => {
    var obj = I.fromJS({alpha: {beta: 2}});
    expect(map.getIn(['alpha'])).toBe(2);
  });

  it('converts a Map with toJS', () => {
    var map = I.Map({alpha: 1});
    var obj = I.toJS(map);
    expect(obj.alpha).toBe(1);
  });

  it('passes through an object with toJS', () => {
    var obj = I.toJS({alpha: 1});
    expect(obj.alpha).toBe(1);
  });

});
