import React, { useEffect, useRef } from 'react'

export default function Navbar() {

   const navRef = useRef(null);
   const linkRef = useRef(null);
    
    useEffect(() => {
      const handleScroll = () => {
         if(window.scrollY > 40) {
            navRef.current.classList.add('scrolled');
         } else {
            navRef.current.classList.remove('scrolled');
         }
      }

      window.addEventListener('scroll', handleScroll);

      return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    const NAV_LINKS = ['about', 'projects', 'skills', 'contact'];


  return (
    <nav ref={navRef} className='flex justify-between items-center h-17 px-15'>
         <a href="#hero" id='nav-logo' className='text-sm flex justify-center items-center gap-2 font-bold'>
            <span id='prompt' className='text-(--accent)'>~/dev </span><span>portfolio</span><div className='blink'></div>
         </a>
         <div className='flex gap-15 items-center'>
            {NAV_LINKS.map((link, idx) => {
                return <a ref={linkRef} href={`#${link}`} key={idx} className='links nav-links text-xs tracking-widest font-thin text-(--muted) hover:font-bold opacity-90 transition duration-300 ease-in-out'>{link.toUpperCase()}</a>
            })}
         </div>
         <div className='flex items-center gap-1.75'>
            <div className='h-1.75 w-1.75 bg-[#2AFEB7] shadow-[0_0_8px_#2AFEB7] rounded-3xl animate-pulse' id='status-dot'></div> 
            <span className='text-xs font-thin text-(--muted) opacity-90'>Available for work</span>
         </div>
    </nav>
  )  
}
