import React from 'react';

import loading from '../page-loader.gif'

class AvatarImage extends React.Component {


  getContent = () => ( 
    <div className="flex">
      <img src={this.props.me['in-short'].image.src} alt={this.props.me['in-short'].image.alt}/>
      <blockquote>{this.props.me['in-short'].quote}</blockquote>
    </div>
  )

  render() {
    const { me, fetching } = this.props
    
    return(
      <section className="">
        { me ? this.getContent() : fetching }
      </section>
    ) 
  }
}

export default AvatarImage;

