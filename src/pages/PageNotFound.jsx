import React from 'react'
import PageNotFoundImage from '../assets/images/6342464.jpg'


export const PageNotFound = () => {
  return (
    <section className='flex flex-col justify-center px-2'>
      <div className='flex flex-col items-center mx-44 my-4'  >
        <img src={PageNotFoundImage} alt=""/>
      </div>
    </section>
  )
}
