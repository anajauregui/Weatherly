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

    const submitButton = wrapper.find('.sub-btn');

    wrapper.instance().getVal = mockFn;
    submitButton.simulate('click');
    expect(mockFn).toHaveBeenCalled;
  });

  it.skip('should change set location in state on button click', () => {
    const inputBox = wrapper.find('.city-search');
    const submitButton = wrapper.find('.sub-btn');

    inputBox.simulate('keydown', { which: 'a' });
    submitButton.simulate('click');
    expect(wrapper.find('.city-search')).toBeDefined();
    expect(wrapper.instance().state.location).toEqual('a');
  });

  it('should create a new instance of Trie on mount', () => {
    wrapper = mount(<Search getApi={mockFn} />)

    expect(wrapper.instance().trie).toEqual(expect.objectContaining({
      root: expect.objectContaining({
        letter: null,
        isWord: false,
        children: expect.objectContaining({}),
      }),
    }));
  });
});
