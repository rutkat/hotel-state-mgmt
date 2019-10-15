import React from 'react';
import { shallow } from 'enzyme';
import RoomContainer from '../Components/RoomContainer/roomContainer';
import Room from '../Components/Room/room';
import ROOM_DATA from '../data/room_data';

let wrap;

beforeEach(() => {
  wrap = shallow(<RoomContainer />);
})

describe('the form containing the rooms', () => {

  it('shows one form and one submit button', () => {
    expect(wrap.find('form').length).toEqual(1);
    expect(wrap.find('button').length).toEqual(1);
  });

  it('shows four rooms', () => {
    expect(wrap.find(Room).length).toEqual(4);
  });

});

describe('the form submission', () => {
  it('submits the form', () =>{
    wrap.find({ type: 'submit'}).simulate('submit');
  });

});
