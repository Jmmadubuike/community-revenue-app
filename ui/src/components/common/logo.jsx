import React from 'react'
import LogoImage from "../../assets/logo.png"
function Logo() {
  return (
    <div className='text-4xl font-semibold w-10'>
      <img src={LogoImage} />
    </div>
  )
}

export default Logo