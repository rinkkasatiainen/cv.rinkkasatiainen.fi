import React from 'react';
import ReactDOM from 'react-dom';

// testing imports
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

// component imports
import * as actionCreators  from '../../src/actions/actionCreators';

describe('action creators', () => {

  it('should call on initialize', () => {
    const action = actionCreators.onInitialize()
    expect(action).to.be.eql( {type:'ON_INITIALIZE'});
  });

});
