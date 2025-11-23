import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'


const slides = [
  {
    title: 'Edutainment — WordPress LMS',
    img: '/images/feature-project-05.png',
    meta: 'WordPress · LearnPress · UX',
    link: 'http://raynaedutainment.com/'
  },
  { title: 'GSAP Bicycle Animation', img: '/images/feature-project-07.png', meta: 'GSAP · JS · Motion · 3D', link: 'https://naeemakhtardev.github.io/-Interactions-Motion-GSAP-Bicycle-Experience/' },
  { title: 'Car & Bike Racing', img: '/images/feature-project-06.png', meta: 'WordPress · WooComerce · UI', link: 'https://maximumattack.com/' },
  { title: 'Healthcare & Accessories Website', img: '/images/feature-project-04.png', meta: 'WordPress · UI · Creative & Responsive', link: 'https://delkihealth.com/' },
  { title: 'Consultant Website', img: '/images/feature-project-08.png', meta: 'Next JS · Consultant · UI & Responsive', link: 'https://sij-global.com/' },
  { title: 'Medical Store', img: '/images/feature-project-03.png', meta: 'Shopify · UI · Fully Responsive', link: 'https://coverd.de/' },
  { title: 'Foodie Animated Revolution Slider', img: '/images/feature-project-09.png', meta: 'Creative Animation · Javascript · CSS & Jquery', link: 'https://naeemakhtardev.github.io/food-animation/' }
]

export default function CoverflowSlider() {
  return (
    <section className="3d-portfolio-section px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold"> Interactive & Visual</h2>
          <p className="text-gray-400 mt-2">A curated collection of projects showcasing animation, 3D visuals and UX-driven interfaces.</p>
        </div>

        <Swiper
          modules={[EffectCoverflow, Pagination, Navigation]}
          effect="coverflow"
          grabCursor
          centeredSlides
          loop
          slidesPerView="auto"
          navigation
          pagination={{ clickable: true }}
          coverflowEffect={{ rotate: 30, stretch: 0, depth: 180, modifier: 1.1, slideShadows: true }}
          breakpoints={{ 320: { slidesPerView: 1.05 }, 640: { slidesPerView: 1.3 }, 1024: { slidesPerView: 2.2 }, 1280: { slidesPerView: 3 } }}
          className="py-6"
        >
          {slides.map((s, i) => (
            <SwiperSlide key={i} className="w-72 md:w-80 lg:w-96">
              <a href={s.link} target="_blank" rel="noreferrer" className="group block">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-400 group-hover:scale-[1.02]">
                  
                  <img src={s.img} alt={s.title} className="w-full h-52 md:h-64 lg:h-72 object-cover" loading="lazy" />

                 
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />

                 
                  <div className="absolute left-4 top-4 bg-white/8 backdrop-blur-md px-3 py-1 rounded-full text-xs text-white/90 border border-white/10">
                    Featured
                  </div>

               
                  <div className="absolute left-0 right-0 bottom-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                    <h3 className="text-lg font-semibold text-white">{s.title}</h3>
                    <p className="text-sm text-gray-300 mt-1">{s.meta}</p>

                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex gap-2">
                        <span className="inline-block px-2 py-1 text-xs bg-white/6 rounded text-gray-100">Case Study</span>
                        <span className="inline-block px-2 py-1 text-xs bg-white/6 rounded text-gray-100">UI & UX</span>
                      </div>

                      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button className="inline-flex items-center gap-2 px-3 py-2 bg-accent text-white rounded-full shadow-md hover:brightness-110">
                          View Project
n                        </button>
                      </span>
                    </div>
                  </div>
                </div>

            
                <div className="mt-3 text-center">
                  <div className="text-sm text-gray-200">{s.title}</div>
                  <div className="text-xs text-gray-400">{s.meta}</div>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>

        
        <div className="mt-8 text-center text-gray-600">
          <span>Want this style for your product? </span>
          <a href="#contact" className="text-accent font-medium underline">Let’s talk</a>
        </div>
      </div>
    </section>
  )
}
