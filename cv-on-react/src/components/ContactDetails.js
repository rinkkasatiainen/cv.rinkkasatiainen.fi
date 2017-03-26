import React from 'react';

import { renderComponentOncePropsIsDefined } from '../CV'

class ContactDetails extends React.Component {

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.me) {
      return false;
    }
    return true;
  }

  getContent = () => {
    const {email, mobile, github, linkedIn, twitter} = this.props.me['contact-info']
    
    return ( 
    <div className="flex-container wrap">
      <p className="flex-item">email: <a target="_blank" href={`mailto:${email}`}>{email}</a></p>
      <p className="flex-item">mobile: <a target="_blank" href="tel:+358503415620">{ mobile }</a></p>
      
      <p className="flex-item">Github: <a target="_blank" href={ github} >Rinkkasatiainen</a></p>
      <p className="flex-item">LinkedIn: <a target="_blank" href={ linkedIn} >Rinkkasatiainen</a></p>
    </div>
  )}

  render() {
    return(
      <section className="contactDetails">
        { renderComponentOncePropsIsDefined.call(this, 'me', this.getContent ) }
      </section>
    ) ;
  }

}

export default ContactDetails;

