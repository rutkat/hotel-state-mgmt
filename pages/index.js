import React from 'react'
import Head from 'next/head'
import css from './styles.scss'
import RoomContainer from '../components/RoomContainer/roomContainer'

const App = () => (
  <div className='app'>
    <Head>
      <title>Hotel Room State Management Demo</title>
      <link rel='icon' href='/static/favicon.ico' />
    </Head>
    <RoomContainer/>
  </div>
)

export default App
