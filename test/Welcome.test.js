import React from 'react';
import { shallow, mount } from 'enzyme';
import Welcome from '../lib/Components/Welcome';
import weatherData from '../test_helpers/mockData';

describe('Welcome', () => {
  let wrapper;
  let mockFn;

  beforeEach(() => {
    mockFn = jest.fn()

    wrapper = shallow(<Welcome getApi={mockFn}/>)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  })

  it('should render h1', () => {
    expect(wrapper.find("h1")).toBeDefined();
    expect(wrapper.find("h1").text()).toEqual("Welcome, Choose a City");
  })

  it('should render Search component', () => {
    expect(wrapper.find("Search").length).toEqual(1);
    expect(wrapper.find("Search")).toBeDefined();
  })

})
