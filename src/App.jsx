import ReactDom from 'react-dom/client';

import Navbar from './components/Navbar'
import Cursor from './components/Cursor'
import Hero from './sections/Hero'

export default function App() {
  return (
    <>
      <div className="px-15 bg-(--bg1) h-full">
        <Cursor />
        <Navbar />
        <Hero />
      </div>
    </>
  )
}
