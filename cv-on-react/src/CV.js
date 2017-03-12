import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from './actions/actionCreators';

function mapStateToProps(state) {
  return {
    name: state.name,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}



class CV extends Component {

  componentWillMount(){
    const {onInitialize} = {...this.props}

    onInitialize()
  }

  render() {
    return (
      <div className="App">
        <Header {...this.props} />
      </div>
    );
  }
}

const AppWrapper = connect(mapStateToProps, mapDispatchToProps)(CV);

export default AppWrapper;
