import React from 'react'
import ReactDOM from 'react-dom';
import { call } from 'redux-saga/effects';

// testing imports
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

// component imports
import * as sagas   from '../../src/actions/saga';
import Fetch from '../../src/fetch';

describe('Sagas', () => {
  describe('fetch data', () => {
    const action = {type:'ON_INITIALIZE'}
    const response = {response:{me: 'responses'}}

    it('make a fetch request for data', () => {
      const gen = sagas.fetchData( action )
      const effect = gen.next().value
      
      const expected = call ( Fetch.doCall, 'http://rinkkasatiainen.fi/cv.json' )

      expect( effect ).to.be.eql( expected );
    });

    it('should dispatch data to store', () => {
      const gen = sagas.fetchData( action )
      gen.next()  // call to fetch json

      const effect = gen.next(response).value; // previous call returns response
      const newAction = effect.PUT.action

      expect(newAction.type).to.be.eql( 'BASIC_DATA_RETRIEVED' )
      expect(newAction.me).to.be.eql( response.response.me )
    });

    it('should have 2 yields', () => {
      const gen = sagas.fetchData( action )
      gen.next();
      gen.next();
      const result = gen.next();
      expect( result ).to.be.eql( {done: true, value: undefined} )
    })

    it('should fail gracefully if cannot fetch data ', () => {
      const gen = sagas.fetchData( action )
      const error = {'reason': 'Network error'}
      gen.next()
      // For some reson, what next() above returned is passed to the next next() method
      const failedAction = gen.next( {error} ).value.PUT.action

      expect( failedAction ).to.be.eql({type: 'FETCH_FAILED', error})
    })
  });

  describe('fetch links', () => {
    const action={type:'BASIC_DATA_RETRIEVED', me: {
      links: [{foo: '/foo.json'}]
    }}
    it('should dispatch an action with link and contents, as defined in links', () => {
      const gen = sagas.fetchOneLink( 'foo', '/foo.json' )

      gen.next()
      const responseJson = { response: {data: 'value'}}
      const effect = gen.next(responseJson).value

      const newAction = effect.PUT.action
      
      expect( newAction.type ).to.be.eql( 'LINK_DOWNLOADED' )
      expect( newAction.payload['foo'] ).to.be.eql( responseJson.response )
    })

    it('should send action that type is about to be downloaded', () => {
      const gen = sagas.fetchLinks( action )

      const effect  = gen.next().value
      console.log ('effect', effect ) //.PUT.action )
      const newAction = effect.PUT.action
      expect( newAction.type ).to.be.eql('DOWNLOADING')
      expect( newAction.payload.type ).to.be.eql('foo')

    })
    

  });
});
