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
})
