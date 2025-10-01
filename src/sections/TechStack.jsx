import React from "react";
import TitleHeader from "../components/TitleHeader";
import { techStackIcons } from "../constants";
import TechIcon from "../components/Models/TechLogos/TechIcon";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(onMouseEnter, onMouseExit)

const TechStack = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".tech-card",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.5,
        scrollTrigger: {
          trigger: "#skills",
          start: "top center",
        },
      }
    );
  }, []);

  // const handleOnMouseEnter = (index) => {
  //   // const elemen = gsap.utils.toArray(".tech-card");
  //   // console.log(elemen);
  //   // console.log(index);

  //   // gsap.to(elemen[index], { opacity: 0.5 });

  //   // const card = gsap.utils.toArray(".tech-card");
  //   // console.log(card);

  //   gsap.utils.toArray(".tech-card").forEach((card, i) => {
  //     if (i === index) {
  //       gsap.to(card, {
  //         opacity: 0.5,
  //       });
  //     }
  //   });
  // };

  // const handleOnMouseLeave = (index) => {
  //   gsap.utils.toArray(".tech-card").forEach((card, i) => {
  //     if (i === index) {
  //      gsap.to(card, {
  //        yPercent: 100
  //      }
  //     );
  //     }
  //   });
  // };

  return (
    <section id="skills" className="flex-center section-padding">
      <div className="w-full h-full padding-x">
        <TitleHeader
          title="My Preferred Tech Stack"
          sub="🤝 What I Bring to The Table "
        />
        <div className="tech-grid">
          {techStackIcons.map((icon, index) => (
            <div
              key={index}
              className="card-border cursor-pointer tech-card overflow-hidden group rounded-lg xl:rounded-full "
            >
              <div className="tech-card-animated-bg" />
              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                  <TechIcon model={icon} />
                </div>

                <div className="padding-x w-full">
                  <p>{icon.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
