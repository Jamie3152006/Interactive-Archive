import { useState } from 'react'
import { Routes, Route, Link } from "react-router";
import noScroll from './utils/noScroll.js'
import Homepage from './pages/Homepage.jsx'
import Archive from './pages/Archive.jsx'
import FinalPage from './pages/FinalPage.jsx';
import Journal from './pages/Journal.jsx';
import PaperAirplane from './image_components/PaperAirplane.jsx';
import Interaction from './pages/Interaction.jsx';

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Homepage />}/>
      <Route path="/archive" element={<Archive />}/>
      <Route path='/paper_airplanes' element={<Interaction />}/>
      <Route path='/journal' element={<Journal />}/>
      <Route path="/final_page" element={<FinalPage />} />
    </Routes>
    </>
  )
}

export default App
