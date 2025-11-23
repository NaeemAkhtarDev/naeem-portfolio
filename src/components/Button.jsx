import React from 'react'

const Button = ({text, className, id}) => {
  return (
   <a 
    onClick={() => {
        e.prevantDefault();
        const targetSec = document.getElementById('counter');

        if (targetSec && id){
            const offset = window.innerHeight * 0.18;

            const top = targetSec.getBoundingClientRect().top + window.scrollY - offset;

            window.scrollTo({top, behavior: 'smooth'})
        }
    }}
    className={`${className ?? '' } cta-wrapper`}>
    <div className='cta-button group'>
        <div className='bg-circle' />
        <p className='text'>
            {text}
        </p>
        <div className='arrow-wrapper'>
            <img src='/images/arrow-down.svg' alt='Arrow Image' />
        </div>
    </div>
   </a>
  )
}

export default Button