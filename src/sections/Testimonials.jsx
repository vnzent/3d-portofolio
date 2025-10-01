import React from 'react'
import TitleHeader from '../components/TitleHeader'
import { testimonials } from '../constants'
import GlowCard from '../components/GlowCard'

const Testimonials = () => {
  return (
    <section id="testimonials" className="flex-center section-padding">
        <div className="w-full h-full padding-x">
            <TitleHeader 
                title="What People Say About Me?"
                sub="⭐️ Client Feedback Highlights"
            />

            <div className="columns-1 md:columns-2 lg:columns-3 mt-16">
                {testimonials.map((testimonial, index) => (
                    <GlowCard key={index} card={testimonial} index={index} isRating>
                        <div className="flex items-center gap-3">
                            <div>
                                <img src={testimonial.imgPath} alt={testimonial.name} />
                            </div>
                            <div>
                                <p className="font-bold">{testimonial.name}</p>
                                <p className="text-primary-50">{testimonial.mentions}</p>
                            </div>
                        </div>
                    </GlowCard>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Testimonials