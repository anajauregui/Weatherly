import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../Components/SevenHour';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SevenHour />)
  })

  // afterEach(() => {
  //   localStorage.clear()
  // })

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  })
