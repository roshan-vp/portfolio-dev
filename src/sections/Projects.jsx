import React from 'react'
import ProjectCards from '../components/ProjectCards'

export default function Projects() {
  return (
    <section id='projects' className='min-h-screen py-30 border-b border-[#1e1e26]'>
        <p className='dash'>Work</p>
        <div className='flex justify-between'>
            <h1 className='proj-title flex-7'>Projects.</h1>
            <p className='flex-1 text-right text-xs/5 text-(--muted)'>A selection of things I've built — personal, professional, and everything in between.</p>
        </div>
        <div>
            <ProjectCards />
        </div>
    </section>
  )
}
