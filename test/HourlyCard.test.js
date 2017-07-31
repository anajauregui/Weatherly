import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../Components/HourlyCard';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<HourlyCard />)
  })

  // afterEach(() => {
  //   localStorage.clear()
  // })

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  })
