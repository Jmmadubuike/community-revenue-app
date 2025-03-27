import Navbar from "../components/navbar"
import HeroImage from "../assets/projectPageHero.jpg"

import { FaMap,FaPhone,FaMailBulk } from "react-icons/fa"
import { useState } from "react"
import GetStarted from "../components/getStarted"
import Footer from "../components/common/footer"

 const ContactPage = () => {

    const [formData, setState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      })
    
      const handleChange = (e) => {
        const { name, value } = e.target
        setState((prevState) => ({
          ...prevState,
          [name]: value,
        }))
      }
    
      const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Form submitted:", formData)
        // Add your form submission logic here
      }
    return (
        <div>
        <Navbar />


        <div>
             <div
            className="relative h-[80vh] bg-cover bg-center"
            style={{ backgroundImage: `url(${HeroImage})` }}
            >
            <div className="absolute inset-0 bg-gradient-to-br from-[#4A72C033] to-black via-silver"></div>
            <div className="relative z-10 flex items-center justify-center h-full text-white text-center px-4">
                <div className='flex flex-col items-center'>

                {/* <p>Unite, Serve, Strengthen Ogidi Together </p> */}
                <h1 className="text-4xl md:text-6xl font-bold ">
                Contact Us
                </h1>

                </div>
                
            </div>
            </div>


            <div className="max-w-6xl mx-auto border-b border-blue-100">
      <div className="flex flex-col md:flex-row">
        {/* Left Column - Contact Information */}
        <div className="w-full md:w-1/3 p-6 md:p-8">
          <h1 className="text-2xl font-bold  mb-2">Contact Us</h1>
          <p className="text-gray-600 mb-6">
            Questions, comments, or suggestions?
            <br />
            Simply fill in the form and we'll be in touch shortly.
          </p>

          <div className="space-y-4 mt-8">
            <div className="flex items-start">
              <FaMap className=" mr-3 h-5 w-5 mt-0.5 flex-shrink-0" />
              <p className="text-gray-800">
              1st  Floor, Ogidi Skill Acquisition Block, Ogidi Town Hall,
              Ogidi, Anambra State, Nigeria
              </p>

            </div>

            <div className="flex items-center">
              <FaPhone className=" mr-3 h-5 w-5 flex-shrink-0" />
              <div>
                <a href="tel:+12346789108" className="text-gray-800">
                +2349069627839
              </a>
     
              </div>
            </div>

            <div className="flex items-center">
              <FaPhone className=" mr-3 h-5 w-5 flex-shrink-0" />
              <div>
                <a href="tel:+12346789108" className="text-gray-800">
                +2348067599966
              </a>
     
              </div>
            </div>

            <div className="flex items-center">
              <FaPhone className=" mr-3 h-5 w-5 flex-shrink-0" />
              <div>
                <a href="tel:+12346789108" className="text-gray-800">
                +2348033904162
              </a>
     
              </div>
            </div>

            <div className="flex items-center">
              <FaMailBulk className=" mr-3 h-5 w-5 flex-shrink-0" />
              <a href="mailto:Contact@ogidi.com" className="text-gray-800">
              ogidiunionadvancementforum@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="w-full md:w-2/3 p-6 md:p-8">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name*"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-gray-400"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name*"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-gray-400"
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email*"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-gray-400"
                required
              />
            </div>

            <div className="mb-4">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number*"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-gray-400"
                required
              />
            </div>

            <div className="mb-4">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message..."
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-gray-400"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-2 px-4 rounded transition duration-200"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </div>
        
    <div className="max-w-2xl mx-auto border border-blue-400 rounded">
      {/* Header section */}
      <div className="border-b border-dotted border-blue-400 p-4 text-center">
        <h2 className="text-xl font-bold text-navy-900">Our Location</h2>
        <p className="text-sm text-gray-600">Easily get in contact with us through our Secretariat</p>
      </div>

      {/* Content section */}
      <div className="p-8">
        <div className="max-w-md mx-auto">
          <h3 className="text-xl font-bold mb-6">Easily get in contact with us through our Secretariat</h3>

          <div className="space-y-4">
            {/* Address */}
            <div className="flex items-start gap-3">
              <FaMap className="text-purple-600 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-800">
              1st  Floor, Ogidi Skill Acquisition Block, Ogidi Town Hall,
              Ogidi, Anambra State, Nigeria
              </p>
            </div>

            {/* Phone */}
              <div className="flex gap-2">
              <FaPhone className="text-purple-600 flex-shrink-0" size={20} />
            <div className="flex items-center gap-3">
              <div>
              <p className="text-sm  mb-1">Phone 1: +2349069627839</p>
          <p className="text-sm  mb-1">Phone 2: +2348067599966</p>
          <p className="text-sm  mb-1">Phone 3: +2348033904162</p>
              </div>
            </div>
              </div>

            {/* Email */}
            <div className="flex items-center gap-3">
              <FaMailBulk className="text-purple-600 flex-shrink-0" size={20} />
              <p className="text-gray-800">ogidiadvancementforum@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="mt-16">
    <GetStarted />
    </div>
        </div>
        <Footer />
        </div>
    )
}


export default ContactPage