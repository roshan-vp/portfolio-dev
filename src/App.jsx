import React from 'react'
import Navbar from './components/Navbar'
import Cursor from './components/Cursor'

export default function App() {
  return (
    <>
      <div className="px-15 bg-(--bg1) h-screen">
        <Cursor />
        <Navbar />
      </div>
    </>
  )
}
