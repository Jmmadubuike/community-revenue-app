import  Logo  from "./logo" // Importing the Logo component you already have

const Footer = () => {
  return (
    <footer className="w-full">
      <div className="bg-[#f5f5dc] px-8 py-12 flex flex-col md:flex-row justify-between">
        <div className="mb-8 md:mb-0 md:w-1/3">
          <div className="flex items-center mb-4">
            <Logo />
          </div>
          <h3 className="font-semibold text-gray-700 mb-2">Contact Information</h3>
          <p className="text-sm text-gray-600 mb-1">123 Main Street, Suite 456</p>
          <p className="text-sm text-gray-600 mb-1">Anytown, ST 12345</p>
          <p className="text-sm text-gray-600 mb-1">Phone: (123) 456-7890</p>
          <p className="text-sm text-gray-600">Email: info@company.com</p>
        </div>

        <div className="mb-8 md:mb-0 md:w-1/4">
          <h3 className="font-semibold text-gray-700 mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="md:w-1/4">
          <h3 className="font-semibold text-gray-700 mb-4">Connect With Us</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-[#853805c5] text-white text-center py-3 text-xs">
        <p>Copyright © {new Date().getFullYear()} Ogidi Union. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer

