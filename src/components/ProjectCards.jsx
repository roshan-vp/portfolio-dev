import { MoveUpRight } from 'lucide-react'
import React from 'react'

export default function ProjectCards() {
  const projects = [
    {
      idx: "01",
      title: "Lion Gym - Redesign",
      description: "A redesign of the Lion Gym website, focusing on a modern and user-friendly interface.",
      techStack: ['React', 'Tailwind CSS'],
      year: "2026",
      link: "https://lion-gym-demo.vercel.app"
    },
    {
      idx: "02",
      title: "Personal Portfolio",
      description: "A personal portfolio website showcasing my projects and skills.",
      techStack: ['React', 'Tailwind CSS'],
      year: "2026",
      link: "https://github.com/roshan-vp/portfolio-dev"
    },
    {
      idx: "03",
      title: "Simon Says game",
      description: "A simple Simon Says game built with HTML, CSS, and JavaScript, allowing users to test their memory skills.",
      techStack: ['HTML', 'CSS', 'JavaScript'],
      year: "2025",
      link: "https://github.com/roshan-vp/Simon-Says-game"
    },
    {
      idx: "04",
      title: "Customer Sementation UI",
      description: "A user interface for customer segmentation, built with React and Tailwind CSS.",
      techStack: ['React', 'Tailwind CSS'],
      year: "2025",
      link: "https://github.com/roshan-vp/Customer-segmentation-UI"
    },
    {
      idx: "05",
      title: "Simple Todo App",
      description: "A simple todo app built with React and Tailwind CSS, allowing users to manage their daily tasks.",
      techStack: ['React', 'Tailwind CSS', 'Local Storage', 'React Hook Form'],
      year: "2025",
      link: "https://github.com/roshan-vp/todo-list"
    }
  ]

  return (
    <div className='mt-20'>
      {projects.map((project, idx) => (
        <div key={idx} className='group my-1 bg-[#0e0e19] py-8 px-9 flex hover:[&_p]:text-(--accent) hover:[&_span]:border-[#5b89f57e] border border-[#5050503e] hover:bg-[#181826] transition duration-300'>
          <div className='flex-1 flex items-start justify-center text-sm text-(--muted)'>
            <span>{project.idx}</span>
          </div>
          <div className='flex-15 flex flex-col gap-2 transition duration-200'>
            <p className='text-sm hover:text-(--accent) transition duration-300 proj-name'>{project.title}</p>
            <p className='flex gap-2'>
              {project.techStack.map((tech, i) => (
                <span key={i} className='py-1 px-2 text-[10px] bg-[#10111B] text-(--muted) group-hover:text-(--accent) border border-[#5050503e] transition duration-300'>
                  {tech}
                </span>
              ))}
            </p>
            <p className='text-xs transition duration-300 text-(--muted)'>{project.description}</p>
          </div>
          <div className='flex-1 flex flex-col gap-2'>
              <p className='transition duration-300'>{project.year}</p>
              <a href={project.link} target="_blank" className=''>
                <div className='h-8 w-8 rounded-full border border-[#5050503e] flex items-center group-hover:bg-(--accent) group-hover:border-[#5b89f52f] justify-center transition duration-300'>
                  <MoveUpRight size={16}/>
                </div>
              </a>
          </div>
        </div>
      ))}
    </div>
  )
}
