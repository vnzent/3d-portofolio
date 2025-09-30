import React from 'react'

const TitleHeader = ({ title, sub }) => {
  return (
    <div className="flex flex-col items-center gap-5">
        <div className="hero-badge">
            <p>{sub}</p>
        </div>
        <div className="font-semibold text-3xl md:text-5xl text-center">
            {title}
        </div>
    </div>
  )
}

export default TitleHeader