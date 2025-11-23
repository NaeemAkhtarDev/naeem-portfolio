import React from 'react'
import { abilities } from '../constants'

const QualitiesCards = () => {
  return (
    <div className='qualities-sec w-full padding-x-lg'>
      <div className='mx-auto grid-3-cols'>
        {abilities.map(({imgPath, title, desc}) => (
          <div key={title} className='card-border rounded-xl p-10 flex flex-col gap-4'>
            <div className='size-16 flex items-center justify-center rounded-full'>
              <img src={imgPath} alt={title} />
            </div>
            <h3 className='title text-white text-2xl font-semibold mt-2'>{title}</h3>
            <p className='custom-color text-lg'>{desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default QualitiesCards