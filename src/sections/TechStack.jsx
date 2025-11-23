import React from 'react'
import TitleWrap from '../components/TitleWrap'
import { techStackIcons, techStackImgs, techs } from '../constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const TechStack = () => {
    useGSAP(() => {
        gsap.fromTo('.tech-card', { y: 50, opacity: 0}, {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power1.inOut',
            stagger: 0.4,
            scrollTrigger: {
                trigger: '#skills',
                start: 'top center'
            }
        })
    })

  return (
    <div id='skills' className='flex-center section-padding'>
        <div className='w-full h-full md:px-10 px-6'>
            <TitleWrap
                title=" My Tech Stack"
                sub="👨‍💻 What I have speclization skills"
            />
            <div className='tech-grid'>
          {/* {techStackImgs.map((techStackIcon, index) => (
            <div
              key={index}
              className="card-border tech-card overflow-hidden group"
            >
              <div className="tech-card-animated-bg" />
              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                  <img src={techStackIcon.imgPath} alt="" />
                </div>
                <div className="padding-x w-full">
                  <p>{techStackIcon.name}</p>
                </div>
              </div>
            </div>
          ))} */}

{techs.map((t) => (
            <div
              key={t.name}
              className="flex flex-col items-center justify-center bg-[#0f0f11] rounded-2xl py-8 px-4 shadow-sm transform transition hover:-translate-y-2 hover:scale-[1.02] duration-300"
            >
              <div className="w-16 h-16 flex items-center justify-center mb-4">
                <img src={t.url} alt={t.name} className="max-w-full max-h-full object-contain" />
              </div>
              <div className="text-sm text-center text-gray-200">{t.name}</div>
            </div>
          ))}
            </div>

        </div>

        {/* <section className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
          My Tech Stack
        </h2>
        <p className="text-center text-gray-400 mb-8">Tools & technologies I use to build modern, interactive web experiences.</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center">
          {techs.map((t) => (
            <div
              key={t.name}
              className="flex flex-col items-center justify-center bg-[#0f0f11] rounded-2xl py-8 px-4 shadow-sm transform transition hover:-translate-y-2 hover:scale-[1.02] duration-300"
            >
              <div className="w-16 h-16 flex items-center justify-center mb-4">
                <img src={t.url} alt={t.name} className="max-w-full max-h-full object-contain" />
              </div>
              <div className="text-sm text-center text-gray-200">{t.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section> */}
    </div>

    
  )
}

export default TechStack