import React from 'react'
import Homepage from './Pages/Homepage/Homepage'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <div>
     <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App