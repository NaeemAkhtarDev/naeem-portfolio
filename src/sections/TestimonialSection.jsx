import React from 'react'
import TitleWrap from '../components/TitleWrap'
import { testimonials } from '../constants'
import GradientCard from '../components/GradientCard'

const TestimonialSection = () => {
  return (
    <section id='testimonials' className='flex-center section-padding'>
        <div className='w-full h-full md:px-10 px-5'>
            <TitleWrap 
                title="What People Say About Me!" 
                sub="🌟 Trusted by clients"
            />
            <div className='lg:columns-3 md:columns-2 columns-1 mt-16'>
                {testimonials.map(({imgPath, name, mentions, review}) => (
                    <div className='review-info'>
                        <GradientCard card={{review}}>
                            <div className='flex items-center gap-3'>
                                <div className='review-thumb'>
                                    <img src={imgPath} alt={name} />
                                </div>
                                <div className='test-info'>
                                    <p className='font-semibold'>{name}</p>
                                    <p className='text-white-50'>{mentions}</p>
                                </div>
                            </div>
                        </GradientCard>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default TestimonialSection