import React from 'react';
import loading from '../page-loader.gif'

class Fetching extends React.Component{


  render(){
    return( 
      <div className="fetching"><img src={loading} loop="infinite"/><br /><p>Fetching data</p></div> 
    )

  }
}
export default Fetching
