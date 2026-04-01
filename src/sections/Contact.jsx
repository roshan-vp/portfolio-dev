import React from 'react'

export default function Contact() {
  return (
    <section id='contact' className='border-b py-30 border-[#1e1e26]'>
        <p className='dash'>Contact</p>
        <div className='flex'>
            <div className='flex-1'>
                <h2 className='text-3xl font-bold mb-10 leading-6 contact-big reveal d1'>Let's <span className='text-(--accent)'>Connect</span> <br /> & build.</h2>
                <p className='pr-90 text-(--muted) text-sm leading-relaxed'>Open to new projects, roles, and conversations. Whether you have a brief or just want to say hi — my inbox is always open.</p>

            </div>
            <div className='flex-1'>right</div>
        </div>
    </section>
  )
}
