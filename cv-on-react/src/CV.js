import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header';

class CV extends Component {

  constructor(props) {
    super(props);
    this.state = {name: 'Aki Salmi'};
  }

  componentWillMount(){
    const {onInitialize} = {...this.props}

    //    onInitialize()
  }

  render() {
    return (
      <div className="App">
        <Header state={this.state} />
      </div>
    );
  }
}

export default CV;
