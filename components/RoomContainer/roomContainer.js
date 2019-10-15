import React, { useState, useEffect } from 'react';
import Room from '../Room/room';
import css from './roomContainer.scss'
import ROOM_DATA from '../../data/room_data';

const RoomContainer = () => {

  const [allRooms, setAllRooms] = useState(ROOM_DATA); // array of objects
  useEffect(() => {
      // retreive saved room data if in localStorage
      if (localStorage.getItem('allRooms')) {
        setAllRooms(JSON.parse(localStorage.getItem('allRooms')));
      }
  }, []);

  const toggleRooms = (event, i) => {
    const checked = event.target.checked;
    const newRooms = allRooms.map(item => {
      // enable rooms before current
      if (item.unit <= i) {
        item.isEnabled = true;
      }
      // disable rooms after current and reset guest amount
      if (item.unit > i) {
        item.isEnabled = false;
        item.adultCount = 1;
        item.childCount = 0;
      }
      // toggle current room and guest amount
      if (item.unit === i) {
        item.isEnabled = checked;
        item.adultCount = checked ? item.adultCount : 1;
        item.childCount = checked ? item.childCount : 0;
      }
      return item;
    })
    setAllRooms(newRooms)
  }

  const updateGuests = (event, i) => {
    const guestType = event.target.name.split('_')[0] + 'Count';
    const amount = Number(event.target.value);
    let newRooms = [...allRooms];
    newRooms[i][guestType] = amount;
    setAllRooms(newRooms);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (localStorage) {
      localStorage.setItem('allRooms', JSON.stringify(allRooms))
    }
  }

  return (
    <form name="guests" onSubmit={handleSubmit}>
      {allRooms.map(room =>
        <Room
          key={room.unit}
          details={room}
          toggler={e => toggleRooms(e, room.unit)}
          updateGuests={e => updateGuests(e, room.unit)}
        />)
      }
      <button type="submit">Submit</button>
    </form>
  );
}

export default RoomContainer
