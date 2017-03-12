import React from 'react';
import ReactDOM from 'react-dom';

// testing imports
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import CV from '../src/CV';
import Header from '../src/components/Header';


describe('<CV />', () => {
  const props = {}
  beforeEach( () => {
    props.onInitialize = () => {}
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CV {...props}/>, div);
  });

  describe('should render', () => {
    it('Header', () => {
      const app = shallow(<CV  {...props}/>)
      expect(app.find(Header)).to.have.length(1)
    });
  });

  describe('onComponentMount', () => {
    it(`should make a redux-saga call with 'INITIALIZING'`, () => {
      const onInitialize = sinon.spy();
      props.onInitialize = onInitialize

      const app = shallow(<CV {...props}/>)

      expect(onInitialize.calledOnce).to.be.ok
      
    });
  });

});
