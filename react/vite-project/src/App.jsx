import { useState } from 'react'
import Header from './components/Header/Header'
import Nav from './components/Navigation/Navigation'
import Content from './components/Content/Content'
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
