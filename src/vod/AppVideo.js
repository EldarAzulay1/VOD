import React from 'react'
import {BrowserRouter , Route , Routes , Link, useSearchParams} from 'react-router-dom'
import VodStrip from './vodStrip'
import Home from './home'
import More_info from './more_info'
import Footer from './footer'

export default function AppVideo() {
  return (
    <div>
      <BrowserRouter>
      <VodStrip/>
        <Routes>
          <Route index element={<Home></Home>} />
           <Route path="/info/:id" element={<More_info></More_info>} />
        </Routes>
      
        <Footer/>
      </BrowserRouter>
    </div>
  )
}
