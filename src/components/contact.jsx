import React, { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      // TODO: connect to emailJS or API here
      console.log('Form submitted:', formData)
    } catch (error) {
      console.error('Submission error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="w-full px-6 py-20 bg-transparent ">
      <div className="max-w-3xl mx-auto bg-white/5 rounded-2xl p-10  border border-white/20">
        <h2 className="text-7xl font-bold text-center mb-10">Get In Touch</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 ">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="p-4 rounded-xl backdrop-blur-sm bg-white/10 text-black placeholder-black/70 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="p-4 rounded-xl backdrop-blur-sm bg-white/10 text-black placeholder-black/70 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            className="p-4 rounded-xl backdrop-blur-sm bg-white/10 text-black placeholder-black/70 border border-white/20 resize-none focus:outline-none focus:ring-2 focus:ring-white"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className="bg-white text-black font-semibold py-3 px-6 rounded-xl hover:bg-gray-300 transition-colors duration-200"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Submit'}
          </button>
        </form>
      </div>
    </section>
  )
}
