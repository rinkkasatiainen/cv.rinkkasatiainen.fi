import React from 'react';

import loading from '../page-loader.gif'

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
    const { renderComponentOncePropsIsDefined, me, fetching } = this.props
    
    return(
      <section className="">
        { renderComponentOncePropsIsDefined('me', this.getContent ) }
        
      </section>
    ) 
  }
}

export default AvatarImage;

