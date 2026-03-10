import ReactDom from 'react-dom/client';

import Navbar from './components/Navbar'
import Cursor from './components/Cursor'
import Hero from './sections/Hero'
import About from './sections/About';
import Projects from './sections/Projects';

export default function App() {
  return (
    <>
      <div className="px-15 bg-(--bg1) h-full">
        <Cursor />
        <Navbar />
        <Hero />
        <About />
        <Projects />
      </div>
    </>
  )
}
