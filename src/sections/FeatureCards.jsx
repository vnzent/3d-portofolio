import React from 'react'
import { abilities } from '../constants'
import GlowCard from '../components/GlowCard'
import { div } from 'three/tsl'

const FeatureCards = () => {
  return (
    <div className="w-full padding-x-lg">
        <div className="mx-auto grid-3-cols">
            {abilities.map((ability, index) => (
                
                    <GlowCard card={ability} index={index}>
                        <div className="flex flex-col gap-4">
                            <div className="size-14 flex justify-center items-center rounded-full">
                                <img src={ability.imgPath} alt={ability.title} />
                            </div>
                            <h3 className="text-light text-2xl font-semibold">{ability.title}</h3>
                            <p className="text-primary-50 text-lg">{ability.desc}</p>
                        </div>
                    </GlowCard>
            ))}
        </div>
    </div>
  )
}

export default FeatureCards
