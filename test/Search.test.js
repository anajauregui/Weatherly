import React from 'react';
import { shallow, mount } from 'enzyme';
import Search from '../lib/Components/Search';

describe('Search', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Search />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  })

  it('should render an input field with className city-search', () => {

  })

});
