import { useState } from 'react'
import Header from './components/Header'
import Nav from './components/Navigation'
import Content from './components/Content'
import './App.css'

const App = () => {

  return (
    <div className="app-wrapper">
        <Header/>
        <Nav/>
        <Content/>
    </div>
  )
}

export default App
