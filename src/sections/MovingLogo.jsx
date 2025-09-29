import React from 'react'
import { logoIconsList } from '../constants'
import LogoIcon from '../components/LogoIcon'

const MovingLogo = () => {
  return (
    <div className="relative my-10 md:my-20">
        <div className="gradient-edge" />
        <div className="gradient-edge" />

        <div className="marquee h-52">
            <div className="marquee-box gap-5 md:gap-12">
                {logoIconsList.map((icon, index) => (
                    <LogoIcon key={index} icon={icon} alt={`logo ${index + 1}`} />
                ))}

                {logoIconsList.map((icon, index) => (
                    <LogoIcon key={index} icon={icon} alt={`logo ${index + 1}`} />
                ))}
            </div>
        </div>
    </div>
  )
}

export default MovingLogo