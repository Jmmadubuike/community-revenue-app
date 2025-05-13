import Navbar from "../components/navbar";
import HeroImage from "../assets/contact-page-hero.png";
import GetStarted from "../components/getStarted";
import { FaPlay } from "react-icons/fa";
import Gallary1 from "../assets/gallary1.png";
import Gallary2 from "../assets/gallary2.jpg";
import Gallary3 from "../assets/gallary3.jpg";
import Gallary4 from "../assets/gallary4.jpg";
import Gallary5 from "../assets/gallary1.jpg";

import Footer from "../components/common/footer";

// Dummy additional images
import Gallary6 from "../assets/gallary6.jpg";
import Gallary7 from "../assets/gallary7.jpg";
import Gallary8 from "../assets/gallary8.jpg";
import Gallary9 from "../assets/gallary9.jpg";
import Gallary10 from "../assets/gallary10.jpg";
import Gallary11 from "../assets/gallary11.jpg";
import Gallary12 from "../assets/gallary12.jpg";
import Gallary13 from "../assets/gallary13.jpg";
import Gallary14 from "../assets/gallary14.jpg";
import Gallary15 from "../assets/gallary15.jpg";

const galleryImages = [
  { src: Gallary1, caption: "Igwe-In-Council / Cabinet Members" },
  { src: Gallary2, caption: "Cultural Artifacts" },
  { src: Gallary3, caption: "Traditional Ceremony" },
  { src: Gallary4, caption: "Local Cuisine Showcase" },
  { src: Gallary5, caption: "Community Cultural Dance" },
  { src: Gallary6, caption: "HRM Igwe (Pharm) Dr. Alex Uzo Onyido & Iyom LoLo Patricia Onyido (Ugegbe Eze)" },
  { src: Gallary7, caption: "Iyom LoLo Patricia Onyido (Ugegbe Eze) & Daughter, Dr. Adaeze Onyido." },
  { src: Gallary8, caption: "Igwe, Ugegbe Eze & Daughter, Dr. Adaeze Onyido, during the 2025 Ogidi Ito Aro Festiva" },
  { src: Gallary9, caption: "Igwe on the Throne, Ugegbe Eze, PG Chief Ikwuka Okoye, Anummili & the 4 Little Igbaeze chiefs." },
  { src: Gallary10, caption: "High Chief (Engr) Emeka Nwabueze, MFR, Ajie Okpala Ogidi, arriving at Ogidi 2025 Ito Aro Festival." },
  { src: Gallary11, caption: "Igwe, the PG Ogidi Union, Anummili & Ajie Okpala Ogidi, at 2025 Ogidi Ito Aro Festival." },
  { src: Gallary12, caption: "High Chief Ikem Nwabueze, Agunecheibe, Chairman Ogidi Ito Aro Festival 2025." },
  { src: Gallary13, caption: "Igwe's entourage during 2025 Ito Aro Festival at Ogidi Town Hall." },
  { src: Gallary14, caption: "The Officiating Clergy men during Ogidi 2025 Ito Aro Festival" },
  { src: Gallary15, caption: "Iyom LoLo Patricia Onyido, Ugegbe Eze." },
];

const GallaryPage = () => {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <div
        className="relative h-[80vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${Gallary4})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#4A72C033] to-black via-silver"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-white text-center px-4">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl md:text-6xl font-bold">Our Gallery</h1>
          </div>
        </div>
      </div>

      {/* Gallery Content */}
      <div className="max-w-6xl mx-auto px-4 py-12 font-sans">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-semibold text-gray-800">Explore Gallery</h1>
          <p className="text-sm text-gray-500 mt-1">
            Discover our rich cultural heritage and traditions
          </p>
        </div>

        {/* Integrated Gallery Grid */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
  {galleryImages.map((image, index) => (
    <div
      key={index}
      className="break-inside-avoid rounded-lg overflow-hidden shadow-md mb-4"
    >
      <img
        src={image.src}
        alt={`Gallery image ${index + 1}`}
        className="w-full h-auto object-cover"
      />
      <div className="bg-black text-white text-sm p-2 bg-opacity-70">
        {image.caption}
      </div>
    </div>
  ))}
</div>


        {/* Video Banner Highlight */}
        <div className="mt-10 rounded-lg overflow-hidden relative">
          <img
            src={Gallary5}
            alt="Cultural video"
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-black bg-opacity-60 rounded-full p-4 cursor-pointer hover:bg-opacity-80 transition">
              <FaPlay className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-16">
        <GetStarted />
      </div>

      <Footer />
    </div>
  );
};

export default GallaryPage;
