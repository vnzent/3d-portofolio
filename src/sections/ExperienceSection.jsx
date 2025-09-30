import React from 'react'
import TitleHeader from '../components/TitleHeader'
import { expCards } from "../constants/index"
import GlowCard from '../components/GlowCard'

const ExperienceSection = () => {
  return (
    <section id="experience" className="w-full section-padding">
        <div className="w-full h-full px-5 md:px-20">
            <TitleHeader 
                title="Professional Work Experience"
                sub="💼 My Career Overview"
            />
        </div>

        <div className="mt-32 relative">
            <div className="relative z-50 space-y-10 xl:space-y-32">
                {expCards.map((expCard, index) => (
                    <div key={index} className="exp-card-wrapper">
                        <div className="xl:w-2/6">
                            <GlowCard card={expCard} index={index} isRating>
                                <div>
                                    <img src={expCard.imgPath} alt={expCard.title} />
                                </div>
                            </GlowCard>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default ExperienceSection