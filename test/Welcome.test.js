import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../Components/Welcome';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Welcome />)
  })

  // afterEach(() => {
  //   localStorage.clear()
  // })

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  })
