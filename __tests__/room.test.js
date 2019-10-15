import React from 'react';
import { shallow } from 'enzyme';
import Room from '../Components/Room/room';
import ROOM_DATA from '../data/room_data';

let wrap;

const roomText = 'Room';
const adultsLabel = 'Adults(18+)12';
const childLabel = 'Children(0-17)012';

beforeEach(() => {
  wrap = shallow(<Room details={ROOM_DATA[1]} />);
})

describe('room 1', () => {

  it('has no checkbox', () => {
    wrap = shallow(<Room details={ROOM_DATA[0]} />);
    expect(wrap.find('input').length).toEqual(0);
  });

})

describe('the individual room labels', () => {

  it('contains the label header and text', () => {
    expect(wrap.find('.room-label-header')).toBeTruthy();
    expect(wrap.find('.room-label-header').text()).toContain(roomText);
  });

  it('contains label and 2 values for adults', () => {
    expect(wrap.find('.room-label').at(0).text()).toEqual(adultsLabel);
  });

  it('contains label and 3 values for children', () => {
    expect(wrap.find('.room-label').at(1).text()).toEqual(childLabel);
  });

})

describe('the individual room inputs', () => {

  it('room 2 has a checkbox', () => {
    expect(wrap.find({ type: 'checkbox' }).length).toEqual(1);
  });

  it('has two select drop-down', () => {
    expect(wrap.find('select').length).toEqual(2);
  });

})

describe('the input and select behaviors', () => {

  it('toggles checkbox, className "disabled", and select options', () => {
    expect(wrap.hasClass('disabled')).toBe(true);
    expect(wrap.find({ type: 'checkbox' }).prop('checked')).toBe(false);
    expect(wrap.find('select').at(0).prop('disabled')).toBeTruthy();
    wrap.setProps({ details: {
      isEnabled: true
    }});
    expect(wrap.hasClass('disabled')).toBe(false);
    expect(wrap.find({ type: 'checkbox' }).prop('checked')).toBe(true);
    expect(wrap.find('select').at(0).prop('disabled')).toBeFalsy();
  });

  it('changes adult select choice from 1 to 2', () => {
    expect(wrap.find('select').at(0).prop('value')).toEqual(1);
    wrap.setProps({ details: {
      adultCount: 2
    }});
    expect(wrap.find('select').at(0).prop('value')).toEqual(2);
  });

  it('changes children select choice from 0 to 1', () => {
    expect(wrap.find('select').at(1).prop('value')).toEqual(0);
    wrap.setProps({ details: {
      childCount: 1
    }});
    expect(wrap.find('select').at(1).prop('value')).toEqual(1);
  });

});
