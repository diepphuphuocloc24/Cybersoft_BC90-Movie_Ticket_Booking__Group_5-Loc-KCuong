import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { renderRoutes } from './route/index.jsx'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {renderRoutes()}
      </Routes>
    </BrowserRouter>
  )
}

export default App
