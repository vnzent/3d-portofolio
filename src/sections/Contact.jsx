import React, { useRef, useState } from 'react'
import TitleHeader from '../components/TitleHeader'
import Button from '../components/Button';
import ContactExperience from '../components/ContactExperience';
import emailjs from '@emailjs/browser'

const Contact = () => {
    const [loading, setLoading] = useState((false))
    const formRef = useRef(null)
    
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })


    const handleChange = (e) => {
        const { name, email, message, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
            [email]: value,
            [message]: value
        })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true)
        try {
            await emailjs.sendForm(
                import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
            )

            setFormData({ name: "", email: "", message: ""})
        } catch(error) {
            console.log({ message: error })
        } finally {
            setLoading(false)
        }

    }
     
  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full padding-x">
        <TitleHeader
          title="Get In Touch With Me"
          sub="🤙 Contact Information"
        />

        <div className="mt-16 grid-12-cols">
          {/* Contact Form - Left Side */}
          <div className="col-span-5">
            <div className="flex-center card-border rounded-xl p-10">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-7"
              >
                <div>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your email address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    rows="5"
                    placeholder="Your message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" disabled={loading}>
                  <div className="cta-button group">
                    <div className="bg-circle" />
                    <p className="text">
                      {loading ? "Sending ..." : "Sending Message"}
                    </p>
                    <div className="arrow-wrapper">
                      <img src="/images/arrow-down.svg" alt="arrow down" />
                    </div>
                  </div>
                </button>
              </form>
            </div>
          </div>

          {/* 3D Experience - Right Side */}
          <div className="xl:col-span-7 min-h-96">
            <div className="w-full h-full bg-[#cd7c2e] hover:cursor-grab rounded-3xl overflow-hidden">
              <ContactExperience />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact