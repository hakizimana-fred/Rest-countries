import {useContext, useState} from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Nav'
import Home from './pages/Home'
import Detail from './pages/Detail'


function App({darkMode = true}) {


return(
    <>
    <Navbar darkMode={darkMode} />
      <main className={`main__area`} role="main">
        <div className="container"> 
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/detail/:country' element={<Detail />} />
          </Routes>
      </div>
      </main>
    </>
  )
}

export default App