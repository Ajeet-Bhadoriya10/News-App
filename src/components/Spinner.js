import React from 'react'
import spinner from '../Assets/Spinner.gif'

export default function Spinner() {
  return (
    <div className='text-center'>
        <img className='my-4' src={spinner} alt='Spinner' />
    </div>
  )
}
