import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../Components/DailyCard';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<DailyCard />)
  })

  // afterEach(() => {
  //   localStorage.clear()
  // })

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  })
