import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../Components/Search';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Search />)
  })

  // afterEach(() => {
  //   localStorage.clear()
  // })

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  })
