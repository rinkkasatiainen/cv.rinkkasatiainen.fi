import React from 'react'

import {expect} from 'chai'
import {shallow} from 'enzyme'

import HeadingImage from '../../src/components/Image.js'


describe('Image', () => {

  it('should show fetching before data is present in props', () => {
    const props={ fetching: (<div className='fetching'>fetching</div>)}

    const wrapper = shallow(<HeadingImage {...props} />)

    expect( wrapper.find('.fetching')).to.have.length(1) 
  })
  it('should show fetching before data is present in props', () => {
    const props={ me: {'in-short': { image : { src: 'src', alt: 'alt' }, quote: 'quote' }}} 

    const wrapper = shallow(<HeadingImage {...props} />)

    expect( wrapper.find('.fetching')).to.have.length(0) 
    expect( wrapper.find('.flex')).to.have.length(1)
    expect( wrapper.find('blockquote').text()).to.contain('quote')
  })
})
