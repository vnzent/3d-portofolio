import React from 'react'

const LogoIcon = ({ icon, alt }) => {
  return (
    <div className="flex-none flex-center marquee-item">
      <img src={icon.imgPath} alt={alt} />
    </div>
  )
}

export default LogoIcon