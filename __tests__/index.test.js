import React from 'react'
import { shallow } from 'enzyme'
import App from '../pages/index.js'
import Head from 'next/head'
import RoomContainer from '../components/RoomContainer/roomContainer'

describe('index page renders', () => {
  let app;
  
  beforeEach(() => {
    app = shallow(<App />)
  });

  it('App shows Head', () => {
    expect(app.find(Head).length).toEqual(1);
  })

  it('App shows Room Container', () => {
    expect(app.find(RoomContainer).length).toEqual(1);
  })
})
