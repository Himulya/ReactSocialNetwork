import { useState } from 'react'
import Header from './components/Header/Header'
import Nav from './components/Navigation/Navigation'
import Profile from './components/Profile/Profile'
import './App.css'

const App = () => {

  return (
    <div className="app-wrapper">
        <Header/>
        <div className='main-wrapp'>
          <Nav/>
          <Profile/>
        </div>
    </div>
  )
}

export default App
