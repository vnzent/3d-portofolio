import React from 'react'
import { counterItems } from '../constants/index.js'
import { div } from 'three/tsl'
import CountUp from 'react-countup'

const AnimatedCounter = () => {
  return (
    <div id="counter" className="padding-x-lg mt-32 xl:mt-0">
        <div className="mx-auto grid-4-cols">
            {counterItems.map((item) => (
                <div className="bg-zinc-900 rounded-lg p-10 flex flex-col">
                    <div key={counterItems.label} className="counter-number text-white text-5xl font-bold mb-2 justify-center">
                        <CountUp suffix={item.suffix} end={item.value} />
                    </div>
                    <div className="text-primary-50 text-lg">{item.label}</div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default AnimatedCounter