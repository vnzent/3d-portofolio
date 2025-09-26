import React from 'react'
import words from '../constants/index'
import Button from '../components/Button'
import HeroExperience from '../components/HeroModels/HeroExperience'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Hero = () => {
    useGSAP(() => {
        gsap.fromTo(".hero-text h1", 
            {
                y: 50,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                stagger: 0.2,
                duration: 1,
                ease: 'power1.inOut'
            }
        )
    })

  return (
    <section id="hero" className="relative overflow-hidden">
        <div className='absolute top-0 left-0 z-10'>
            <img src="/images/bg.png" alt="background" />
        </div>

        <div className="hero-layout">
            {/* LEFT: HERO CONTENT */}
            <header className="flex flex-col justify-center w-screen md:w-full px-5 md:px-20">
                <div className="flex flex-col gap-7">
                    <div className="hero-text">
                        <h1>
                            Shaping
                            <span className="slide">
                                <span className="wrapper">
                                    {words.map((word, index) => (
                                        <span key={index} className="flex items-center gap-1 md:gap-3 pb-2">
                                            <img 
                                                src={word.imgPath} 
                                                alt={word.text}
                                                className="size-7 md:size-10 xl:size-12 p-1 md:p-2 rounded-full bg-primary-50"
                                            />
                                            <span>
                                                {word.text}
                                            </span>
                                        </span>
                                    ))}
                                </span>
                            </span>    
                        </h1>
                        <h1>Into Real Projects</h1>
                        <h1>that Deliver Results</h1>
                    </div>
                    <p className="text-primary-50 md:text-xl">
                        Hi, I'm Vincent, a Web Developer based in Indonesia with a passion of code
                    </p>
                    <Button
                        text="See My Work"
                        className="w-62 h-12 md:w-80 md:h-16"
                        id="button"
                    />
                </div>
            </header>
            {/* RIGHT: 3D MODEL */}
            <figure>
                <div className="hero-3d-layout">
                    <HeroExperience />
                </div>
            </figure>
        </div>
    </section>
  )
}

export default Hero