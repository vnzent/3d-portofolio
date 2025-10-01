import React, { useState } from 'react'
import TitleHeader from '../components/TitleHeader'
import { expCards } from "../constants/index"
import GlowCard from '../components/GlowCard'
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ExperienceSection = () => {
    useGSAP(()=> {
        gsap.utils.toArray(".timeline-card").forEach((card) => {
            gsap.from(card, {
                xPercent: -100,
                opacity: 0,
                transformOrigin: "left left",
                duration: 1,
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: card,
                    start: "top 80%"
                }
            })
        })

        gsap.to(".timeline", {
            transformOrigin: "bottom bottom",
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: ".timeline",
                start: "top center",
                end: "70% center",
                onUpdate: (self) => {
                    gsap.to('.timeline', {
                        scaleY: 1 - self.progress
                    })
                }
            }
        })

        gsap.utils.toArray(".expText").forEach((text) => {
            gsap.from(text, {
                xPercent: 0,
                opacity: 0,
                duration: 1,
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: text,
                    start: "top 60%"
                }
            })
        })
    }, []);

  return (
    <section id="experience" className="section-padding">
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

                        <div className="xl:w-4/6">
                            <div className="flex items-start">
                                <div className="timeline-wrapper">
                                    <div className="timeline" />
                                    <div className="gradient-line w-1 h-full" />
                                </div>
                                <div className="expText flex gap-5 md:gap-10 xl:gap-20 relative z-31">
                                    <div className="timeline-logo">
                                        <img id={"img" + index} src={expCard.logoPath} alt="logo" />   
                                    </div>
                                    <div>
                                        <h1 className="font-semibold text-3xl">{expCard.title}</h1>
                                        <p className="my-5 text-primary-50">🗓️ {expCard.date}</p>
                                        <p className="text-[#839cb5] italic">
                                            Responsibilities
                                        </p>
                                        <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-primary-50">
                                            {expCard.responsibilities.map((responsibility, index) => (
                                                <li key={index} className="text-lg">
                                                    {responsibility}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default ExperienceSection