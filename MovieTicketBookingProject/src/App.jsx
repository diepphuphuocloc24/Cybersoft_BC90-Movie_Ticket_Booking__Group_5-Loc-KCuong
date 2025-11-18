import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomeTemplate from './pages/1.HomeTemplate'
import Home from './pages/1.HomeTemplate/1.Home'
import MovieDetail from './pages/1.HomeTemplate/2.MovieDetail'
import TicketBooking from './pages/1.HomeTemplate/3.TicketBooking'


import AdminTemplate from './pages/2.AdminTemplate'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<HomeTemplate />}>
          <Route path='' element={<Home />} />
          <Route path='movie-detail' element={<MovieDetail />} />
          <Route path='buy-ticket' element={<TicketBooking />} />
        </Route>

        <Route path='/admin' element={<AdminTemplate />}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
