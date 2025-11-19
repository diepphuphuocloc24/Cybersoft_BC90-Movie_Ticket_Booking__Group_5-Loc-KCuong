import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { renderRoutes, renderHeader } from './route/index.jsx'

const App = () => {
  return (
    <BrowserRouter>
      {/* {renderHeader()} */}
      <Routes>
        {renderRoutes()}
      </Routes>
    </BrowserRouter>
  )
}

export default App
