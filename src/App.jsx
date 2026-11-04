import { useState } from 'react'
import { Routes, Route, Link } from "react-router";
import noScroll from './utils/noScroll'
import Homepage from './pages/Homepage.jsx'
import Archive from './pages/Archive.jsx'
import FinalPage from './pages/FinalPage.jsx';

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Homepage />}/>
      <Route path="/archive" element={<Archive />}/>
      <Route path="/final_page" element={<FinalPage />} />
    </Routes>
    </>
  )
}

export default App
