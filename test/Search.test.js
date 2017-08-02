import React from 'react';
import { shallow, mount } from 'enzyme';
import Search from '../lib/Components/Search';

describe('Search', () => {
  let wrapper;
  let mockFn;

  beforeEach(() => {
    mockFn = jest.fn();

    wrapper = shallow(<Search getApi={mockFn} />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render an input field with className city-search', () => {
    expect(wrapper.find('.city-search')).toBeDefined();
    expect(wrapper.find('.city-search').text(''));
  });

  it('should render a submit button with className sub-btn', () => {
    expect(wrapper.find('.sub-btn')).toBeDefined();
  });

  it('should call getVal when button is clicked', () => {
    mockFn = jest.fn();

    wrapper.instance().getVal = mockFn;
    wrapper.update();
    const submitButton = wrapper.find('.sub-btn');
    submitButton.simulate('click');
    expect(mockFn).toHaveBeenCalled;
  });

  it('should change state on button click', () => {
    mockFn = jest.fn();
  });
});
