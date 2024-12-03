import React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import './App.css'
import Masala1 from './Pages/Masala1'
import Books from './Pages/Books';
import Search from './Pages/Seacrh';
function App() {
  return (
    <div className='App'>
      <div className="app-container container">
        <div className="header">
          <h1>Logo</h1>
          <ul className='appFlex'>
            <li>
              <NavLink to='/'>1 masala</NavLink>
            </li>
            <li>
              <NavLink to='/books'>2 masala</NavLink>
            </li>
            <li>
              <NavLink to='/search'>4 masala</NavLink>
            </li>
          </ul>
          <button>REGISTER</button>
        </div>

        <Routes>
          <Route path='/' element={<Masala1></Masala1>}></Route>
          <Route path='/books' element={<Books></Books>}></Route>
          <Route path='/search' element={<Search></Search>}></Route>
        </Routes>
      </div>

    </div>

  )
}

export default App
