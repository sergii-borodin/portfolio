import React from 'react'

import './button.css'

export const Button = ({ Children }) => {
  return <button className='button'>{Children}</button>
}
