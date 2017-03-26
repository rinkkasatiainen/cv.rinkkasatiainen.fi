import React from 'react';

import { renderComponentOncePropsIsDefined } from '../CV'

class AvatarImage extends React.Component {

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.me) {
      return false;
    }
    return true;
  }

  getContent = () => ( 
    <div className="flex">
      <img src={this.props.me['in-short'].image.src} alt={this.props.me['in-short'].image.alt}/>
      <blockquote>{this.props.me['in-short'].quote}</blockquote>
    </div>
  )

  render() {
    const { _renderComponentOncePropsIsDefined, me, fetching } = this.props
    
    return(
      <section className="">
        { renderComponentOncePropsIsDefined.call(this, 'me', this.getContent ) }
        
      </section>
    ) 
  }
}

export default AvatarImage;

