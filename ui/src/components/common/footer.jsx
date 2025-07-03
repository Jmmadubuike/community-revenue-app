import { FaYoutube, FaFacebook, FaTelegram } from 'react-icons/fa';
import  Logo  from "./logo" // Importing the Logo component you already have

const Footer = () => {
  return (
    <footer className="w-full">
      <div className="bg-black text-white px-8 py-12 flex flex-col md:flex-row justify-between">
        <div className="mb-8 md:mb-0 md:w-1/3">
          <div className="flex items-center mb-4">
            <Logo />
          </div>
          <h3 className="font-semibold  mb-2">Contact Information</h3>
          <p className="text-sm  mb-1">1st  Floor, Ogidi Skill Acquisition Block, Ogidi Town Hall,</p>
          <p className="text-sm  mb-1">Ogidi, Anambra State, Nigeria</p>
          <p className="text-sm  mb-1">Phone 1: +2349069627839</p>
          <p className="text-sm  mb-1">Phone 2: +2348067599966</p>
          <p className="text-sm  mb-1">Phone 3: +2348033904162</p>

          <p className="text-sm ">Email: ogidiunionadvancementforum@gmail.com</p>
        </div>

        <div className="mb-8 md:mb-0 md:w-1/4">
          <h3 className="font-semibold  mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/home" className="text-sm ">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="text-sm ">
                About
              </a>
            </li>

            <li>
              <a href="/gallary" className="text-sm ">
                Gallery
              </a>
            </li>

            <li>
              <a href="/project" className="text-sm ">
              Projects
              </a>
            </li>
            
            
            <li>
              <a href="/contact" className="text-sm ">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="md:w-1/4 ">
          <h3 className="font-semibold text-gray-700 mb-4">Connect With Us</h3>
          <div className="flex space-x-4">
            <a 
              href="https://youtube.com/@ogidiuaf?si=m0Pt7k7DTo6sPweL" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-2xl hover:text-red-500 transition-colors duration-300"
            >
              <FaYoutube />
            </a>
            <a 
              href="https://www.facebook.com/profile.php?id=61575106822817&mibextid=ZbWKwL" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-2xl hover:text-blue-500 transition-colors duration-300"
            >
              <FaFacebook />
            </a>
            <a 
              href="https://t.me/+wi8QHygF-29mYzE0" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-2xl hover:text-blue-400 transition-colors duration-300"
            >
              <FaTelegram />
            </a>
          </div>
        </div>
      </div>

      <div className="bg-black/80 text-white text-center py-3 text-xs">
        <p>Copyright © {new Date().getFullYear()} Ogidi Union. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer

