'use client';

import React from 'react'

const Button = () => {
  return (
    <div>
        <button onClick={() => {console.log("CLICKED <><><><>")}}>
            Click Me
        </button>
    </div>
  )
}

export default Button;