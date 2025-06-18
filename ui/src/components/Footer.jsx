import { FaYoutube, FaFacebook, FaTelegram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* ... existing columns ... */}
          
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
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
        
        {/* ... rest of the footer ... */}
      </div>
    </footer>
  );
};

export default Footer; 