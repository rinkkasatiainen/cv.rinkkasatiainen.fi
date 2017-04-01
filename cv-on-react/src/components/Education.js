import React from 'react';

class Skills extends React.Component {

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.me) {
      return false;
    }
    return true;
  }

  getContent = () => ( 
    <h3 >{ this.props.me['in-short'].headline }</h3>
  )

  render() {
    return(
      <header className="c-header">
        <h1>{this.props.name}</h1>
      </header>
    ) ;
  }
}

export default Skills;

