import React from 'react';

import { renderComponentOncePropsIsDefined } from '../CV'

class Headline extends React.Component {

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
      <section className="">
        { renderComponentOncePropsIsDefined.call(this, 'me', this.getContent ) }
      </section>
    ) ;
  }
}

export default Headline;
