import React from 'react';

class Header extends React.Component {


  render() {
    return(
      <header className="c-header">
        <h1>{this.props.name}</h1>
      </header>
    ) ;
  }
}

export default Header;

