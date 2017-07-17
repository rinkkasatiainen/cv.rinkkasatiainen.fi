import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from './actions/actionCreators';

import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import HeaderImage from './components/Image';
import Headline from './components/Headline';
import ContactDetails from './components/ContactDetails';
import Education from './components/Education';

import Fetching from './components/Fetching';
import loading from './page-loader.gif';

function mapStateToProps(state) {
  return {
    me: state.me,
    name: state.name,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export function renderComponentOncePropsIsDefined(propsName, callback) {
  if (this.props[propsName]) {
    return callback();
  }
  return React.cloneElement(<Fetching />);
}

class CV extends Component {
  componentWillMount() {
    const { onInitialize } = { ...this.props };

    onInitialize();
  }

  _renderComponentOncePropsIsDefined(propsName, callback) {
    if (this.props[propsName]) {
      return callback();
    }
    return this.fetching;
  }

  render() {
    const props = { ...this.props, fetching: this.fetching, renderComponentOncePropsIsDefined: this.renderComponentOncePropsIsDefined };
    return (
      <div className="cv">
        <Header {...props} />
        <Headline {...props} />
        <HeaderImage {...props} />
        <ContactDetails {...props} />
        <Education {...props} />
      </div>
    );
  }
}

export const AppCreator = connect(mapStateToProps, mapDispatchToProps)(CV);

export default CV;
