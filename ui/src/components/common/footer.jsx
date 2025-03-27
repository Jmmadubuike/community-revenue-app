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
                Gallary
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

        <div className="md:w-1/4 hidden">
          <h3 className="font-semibold text-gray-700 mb-4">Connect With Us</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-sm text-gray-600">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-gray-600">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-gray-600">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-gray-600">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-black/80 text-white text-center py-3 text-xs">
        <p>Copyright © {new Date().getFullYear()} Ogidi Union. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer

