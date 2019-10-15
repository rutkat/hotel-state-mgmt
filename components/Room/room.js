import React from 'react'
import css from './room.scss'

const Room = (props) => {
  const {details, updateGuests, toggler} = props;
  const {unit, isEnabled, adultCount, childCount} = details;
  const disabledClass = () => isEnabled ? '' : ' disabled';
  const renderCheckbox = () => unit !== 0
                        ? (<input type='checkbox'
                           id={'room_'+unit}
                           name={'room_'+unit}
                           onChange={toggler}
                           checked={isEnabled} />)
                        : '';


  return (
    <section className={'room' + disabledClass()}>
      <label htmlFor={'room_' + unit} className='room-label-header'>
        {renderCheckbox()} Room {unit + 1}
      </label>
      <div className='room-guests'>
        <label htmlFor={'adult_' + unit} className='room-label'>Adults<br/>(18+)
          <select name={'adult_' + unit}
                  id={'adult_' + unit}
                  onChange={updateGuests}
                  value={adultCount}
                  disabled={disabledClass()}>
            <option value='1'>1</option>
            <option value='2'>2</option>
          </select>
        </label>
        <label htmlFor={'child_' + unit} className='room-label'>Children<br/>(0-17)
          <select name={'child_' + unit}
                  id={'child_' + unit}
                  onChange={updateGuests}
                  value={childCount}
                  disabled={disabledClass()}>
              <option value='0'>0</option>
              <option value='1'>1</option>
              <option value='2'>2</option>
          </select>
        </label>
      </div>
    </section>
  );
}

export default Room
