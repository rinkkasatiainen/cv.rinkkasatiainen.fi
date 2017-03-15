import React from 'react';
import ReactDOM from 'react-dom';

// testing imports
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import {links} from '../../src/reducers/index';


describe('LinksReducer', () => {

  it('should return original state by default', () => {
    const initialState = ['FOO']
    const newState = links(initialState, {type: 'ANY_BUT'})

    expect(initialState).to.be.eq( initialState )
  });

  it('should make a list of items to be downloaded', () => {
    const initialState = []
    const action = {
      type: 'BASIC_DATA_RETRIEVED',
      payload: {data : { me : { links : [ {'foo' : 'http://foo.bar.com'}, {'bar': 'http://bar.foo.com' }]}}}
    } 

    const newState = links(initialState, action)

    const newLinksToBeDownloaded = [{'foo' : 'http://foo.bar.com'}, {'bar': 'http://bar.foo.com' }]

    expect(newState).to.be.eql( newLinksToBeDownloaded )
  })

});
