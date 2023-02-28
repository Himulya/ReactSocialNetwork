import { useState } from 'react'
import Header from './components/Header'
import Nav from './components/Navigation'
import Content from './components/Content'
import './App.css'

const App = () => {

  return (
    <div className="app-wrapper">
        <Header/>
        <div className='main-wrapp'>
          <Nav/>
          <Content/>
        </div>
    </div>
  )
}

export default App
