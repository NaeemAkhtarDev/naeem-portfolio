import React, { useRef } from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import TitleWrap from '../components/TitleWrap';

gsap.registerPlugin(ScrollTrigger);

const PortfolioSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);
    const project4Ref = useRef(null);
    const project5Ref = useRef(null);

    
    useGSAP(() => {
        const projects = [project1Ref.current, project2Ref.current, project3Ref.current, project4Ref.current,project5Ref.current];
        
        gsap.fromTo(
            sectionRef.current, 
            {opacity: 0},
            {opacity:1, duration: 1.5}
        )
        
        projects.forEach((card, index) => {
            gsap.fromTo(
                card,
                {
                    y: 50, opacity: 0
                },
                {
                    y: 0, 
                    opacity: 1,
                    duration: 1,
                    delay: 0.4 * (index + 1),
                    scrollTrigger: {
                        trigger: card,
                        start: 'top bottom-=100' 
                    }
                }
            )
        })

    }, []);

  return (
    <section ref={sectionRef} id='work' className='app-showcase'>
        <div className='w-full'>
            <div className="heading-wrap mb-10">
                <TitleWrap 
                    title="" 
                    sub="💼 Best Projects"
                />
            </div>
            <div  className='showcaselayout'>
                {/* Left Project Wrap */}
                <div className='first-project-wrapper' >
                    <div className='project-main mb-9' ref={project1Ref}>
                        <div className='image-wrapper'>
                            <img src='images/feature-project-01.png' alt='Project One'/>
                        </div>
                        <div className='text-content'>
                            <h3 className="text-3xl font-semibold hover:text-blue-500 transition">
                                <a 
                                    href="https://fairymay-heights.webflow.io/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    Hotel Booking Website | Webflow & Three.js
                                </a>
                            </h3>
                            <p className='custom-color text-base'>
                                An immersive, interactive hotel booking experience crafted with Webflow and Three.js. This project combines 3D room visualizations, smooth GSAP animations, and a modern, responsive design to deliver a seamless & visually.
                            </p>
                        </div>
                    </div>
                    {/* <div className='project-main' ref={project4Ref}>
                        <div className='image-wrapper'>
                            <img src='images/feature-project-05.png' alt='Project One'/>
                        </div>
                        <div className='text-content'>
                            <h3 className="text-3xl font-semibold hover:text-blue-500 transition">
                                <a 
                                    href="https://raynaedutainment.com/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    Edutainment Website | WordPress
                                </a>
                            </h3>
                            <p className='custom-color text-base'>
                            Responsive education website built with WordPress + Elementor.Features include course management, tabs, LearnPress, and custom fields.
                            </p>
                        </div>
                    </div> */}
                </div>
                
                {/* Right Projects Wrap */}
                <div className='project-list-wrapper overflow-hidden'>
                    <div className='project' ref={project2Ref}>
                        <div className='image-wrapper bg-[#ffefdb] mb-3'>
                            <img src='/images/feature-project-02.png' alt='Project 2' />
                        </div>
                        <h3 className="text-2xl font-semibold hover:text-blue-500 transition mb-2">
                            <a 
                                href="https://dwersteg.de/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                               Tradition & Ceremony Product Store
                            </a>
                        </h3>
                        {/* <p className='custom-colortext-base'>
                            The store features elegant product displays, smooth animations, and a user-friendly shopping experience optimized for all devices.
                        </p> */}
                    </div>
                    <div className='project' ref={project3Ref}>
                        <div className='image-wrapper bg-[#ffe7eb] mb-3'>
                            <img src='/images/feature-project-03.png' alt='Project 3' />
                        </div>
                        <h3 className="text-2xl font-semibold hover:text-blue-500 transition mb-2">
                            <a 
                                href="https://coverd.de/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                Coverd E-Commerce Website
                            </a>
                        </h3>
                        {/* <p className='custom-color text-base'>
                        A fully functional and responsive Shopify eCommerce website designed for modern online stores.
                        </p> */}
                    </div>

                    {/* <div className='project' ref={project5Ref}>
                        <div className='image-wrapper bg-[#ffefdb] mb-3'>
                            <img src='/images/feature-project-04.png' alt='Project 2' />
                        </div>
                        <h3 className="text-2xl font-semibold hover:text-blue-500 transition mb-2">
                            <a 
                                href="https://dwersteg.de/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                               Healthcare & Accessories Website
                            </a>
                        </h3>
                        <p className='custom-color text-base'>
                        A clean and responsive healthcare and medical accessories website built on WordPress, featuring product showcases.
                        </p>
                    </div> */}
                </div>
            </div>
        </div>
    </section>
  )
}

export default PortfolioSection