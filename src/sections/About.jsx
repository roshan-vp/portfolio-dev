import React from 'react'
import Cards from '../components/Cards'

export default function About() {
  return (
    <section id='about' className='pt-40 bg-(--bg1) flex border-b border-[#3232325f] pb-40'>
        <div className='flex-1'>
            <p className='dash'>About</p>
            <div>
                <p className='about-heading d1'>Code with <em>purpose</em>,<br /> ship with precision.</p>
                <p className='about-text d2'>I'm a developer who cares deeply about <strong>clean architecture, performance,</strong> and developer experience. I've built everything from real-time collaborative tools to high-throughput microservices.</p>
                <p className='about-text d2'>When I'm not writing code, I'm contributing to open source, reading about distributed systems, or tinkering with side projects that teach me something new.</p>
            </div>
            <div className='about-tags'>
                <span className='tag'>React</span>
                <span className='tag'>Node.js</span>
                <span className='tag'>TypeScript</span>
                <span className='tag'>PostgreSQL</span>
                <span className='tag'>Next.js</span>
                <span className='tag'>JavaScript</span>
                <span className='tag'>Java</span>
            </div>
        </div>
        <div className='flex-1'>
            <Cards />
        </div>
    </section>
  )
}
