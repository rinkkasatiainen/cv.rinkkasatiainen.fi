import React from 'react';
import ReactDOM from 'react-dom';

// testing imports
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import CV from '../src/CV';
import Header from '../src/components/Header';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CV />, div);
});

describe('<CV />', () => {

  describe('should render', () => {
    it('Header', () => {
      const app = shallow(<CV />)
      expect(app.find(Header)).to.have.length(1)
    });
  });

});
