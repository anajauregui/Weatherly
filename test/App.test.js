import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../lib/Components/App';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  // afterEach(() => {
  //   localStorage.clear()
  // })

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  })

  // it.skip('should render the Header and ToDontList component', () => {
  // expect(wrapper.find("Header").length).toEqual(1)
  // expect(wrapper.find("Header")).toBeDefined()
  //
  // expect(wrapper.find("ToDontList").length).toEqual(1)
  // expect(wrapper.find("ToDontList")).toBeDefined()
  // })

  it('should render the Welcome component', () => {
    expect(wrapper.find("Welcome").length).toEqual(1)
    expect(wrapper.find("Welcome")).toBeDefined()
  })

// TODO: I  think in these other render test below Ill need to make the this.state.ready to be true

  it.skip('should render the CurrentWeather component', () => {
    expect(wrapper.find("CurrentWeather").length).toEqual(1)
    expect(wrapper.find("CurrentWeather")).toBeDefined()
  })

  it.skip('should render the SevenHour component', () => {
    expect(wrapper.find("SevenHour").length).toEqual(1)
    expect(wrapper.find("SevenHour")).toBeDefined()
  })

  it.skip('should render the TenDay component', () => {
    expect(wrapper.find("TenDay").length).toEqual(1)
    expect(wrapper.find("TenDay")).toBeDefined()
  })

  it.skip('initially should have a state of toDonts set to an empty array', () => {
    expect(wrapper.state()).toEqual({ toDonts: [] })
    expect(wrapper.state().toDonts).toEqual(expect.arrayContaining([]))
  })

  it.skip('should retrieve data from local storage on mount', () => {
    // const toDonts = [
    //   {title: 'title', body: 'body', id: 1},
    //   {title: 'title', body: 'body', id: 2}
    // ]

    localStorage.setItem('toDonts', JSON.stringify(toDonts))

    wrapper = mount(<App />)
    expect(wrapper.state().toDonts).toEqual(toDonts)
  })

  it.skip('should add toDonts to state', () => {
    expect(wrapper.state().toDonts.length).toEqual(0)

    // const newToDonts = [
    //   { title: 'dumpster food', body: 'dont eat out of the trash', id: 1 }
    //   { title: 'wiz kid', body: 'dont pee on the sidewalk', id: 2 }
    // ]
    wrapper.instance().addToDont(newToDonts)

    const itemsInStorage = JSON.parse(localStorage.getItem('toDonts')).length

    expect(wrapper.state(toDonts).length).toEqual(2)
    expect(wrapper.state().toDonts[0]).toEqual(newToDont)
    expect(itemsInStorage).toEqual(2)
  })

  it.skip('should update state with pre-existing objects', () => {
    wrapper = shallow(<App />)

    const toDonts = [
      { title: 'title', body: 'body', id: 1 }
    ]

    wrapper.setState({toDonts: toDonts})

    expect(wrapper.state().toDonts.length).toEqual(1)

    const newToDont ={ title: 'title', body: 'body', id: 2 }

    expect(wrapper.state().toDonts.length).toEqual(2)
  })


})
