import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../Components/TenDay';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<TenDay />)
  })

  // afterEach(() => {
  //   localStorage.clear()
  // })

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  })
