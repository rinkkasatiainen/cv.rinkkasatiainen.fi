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

    it('make a fetch request for data', () => {
      const expected = call ( Fetch.doCall, 'http://rinkkasatiainen.fi/cv.json' )
      
      const iterator = fetchData( action )
      const effect = iterator.next().value
      
      expect( effect ).to.be.eql( expected );
    });
    
    it('should dispatch data to store', () => {
      const gen = fetchData( action )

      gen.next();
      const effect = gen.next('FOO').value; // call returns 'FOO'
      const newAction = effect.PUT.action

      expect(newAction.type).to.be.eql( 'BASIC_DATA_RETRIEVED' )
      expect(newAction.payload).to.be.eql( {data: 'FOO'} )
    });

    it('should have 2 yields', () => {
      const gen = fetchData( action )
      gen.next();
      gen.next();
      const result = gen.next();
      expect( result ).to.be.eql( {done: true, value: undefined} )
    })

  });
});
