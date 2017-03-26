import React from 'react'
import ReactDOM from 'react-dom';
import { call } from 'redux-saga/effects';

// testing imports
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

// component imports
import {fetchData}  from '../../src/actions/saga';
import Fetch from '../../src/fetch';

describe('Sagas', () => {
  describe('fetch data', () => {
    const action = {type:'ON_INITIALIZE'}
    const response = {response:{me: 'responses'}}

    it('make a fetch request for data', () => {
      const gen = fetchData( action )
      const effect = gen.next( response ).value
      
      const expected = call ( Fetch.doCall, 'http://rinkkasatiainen.fi/cv.json' )

      expect( effect ).to.be.eql( expected );
    });

    it('should dispatch data to store', () => {
      const gen = fetchData( action )
      gen.next()

      const effect = gen.next(response).value; // previous call returns response
      const newAction = effect.PUT.action

      expect(newAction.type).to.be.eql( 'BASIC_DATA_RETRIEVED' )
      expect(newAction.payload).to.be.eql( response.response )
    });

    it('should have 2 yields', () => {
      const gen = fetchData( action )
      gen.next();
      gen.next();
      const result = gen.next( {} );
      expect( result ).to.be.eql( {done: true, value: undefined} )
    })

    it('should fail gracefully if cannot fetch data ', () => {
      const gen = fetchData( action )
      const error = {'reason': 'Network error'}
      gen.next()
      // For some reson, what next() above returned is passed to the next next() method
      const failedAction = gen.next( {error} ).value.PUT.action

      expect( failedAction ).to.be.eql({type: 'FETCH_FAILED', error})
    })

  });
});
