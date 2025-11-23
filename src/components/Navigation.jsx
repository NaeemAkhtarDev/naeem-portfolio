import React, { useEffect, useState } from 'react'
import { navLinks } from '../constants'
import ThemeToggle from './ThemeToggle';


const Navigation = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        }

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
        <div className='inner navigation-wrap'>
            <a className='logo' href='#hero'>
                NA
                {/* <img className='logo-img' src="/images/na-logo.png" alt="Naeem Akthar Frontend Developer" /> */}
             </a>
            <nav className='desktop'>
                <ul>
                    {navLinks.map(({link, name}) =>(
                        <li key={name} className='group'>
                            <a href={link}>
                                <span>{name}</span>
                                <span className='underline' />
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
            <div class="flex nav-right">
                <a href='#contact' className='contact-btn group mr-3'>
                    <div className='inner'>
                        <span>Contact</span>
                    </div>
                </a>
                {/* <a
                href="/Naeem-Akhtar-Resume.pdf"
                download
                className="flex items-center gap-2 px-4 py-2 bg-indigo-800 text-white rounded-lg hover:bg-indigo-700 transition"
                >
                
                View Resume
                </a> */}

                <div className="flex items-center gap-2">
                    <span className="text-md toggle-text">Switch Theme</span>
                    <ThemeToggle />
                </div>
            </div>
            

        </div>
    </header>
  )
}

export default Navigation