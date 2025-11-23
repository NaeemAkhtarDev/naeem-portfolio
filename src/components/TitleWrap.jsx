import React from 'react'

const TitleWrap = ({title, sub}) => {
  return (
    <div className='flex flex-col items-center gap-6'>
        <div className='hero-badge'>
           <p>{sub}</p>
        </div>
        <div className='font-semibold md:text-5xl text-3xl text-center'>
            <h2 className='main-title'>{title}</h2>
        </div>
    </div>
  )
}

export default TitleWrap