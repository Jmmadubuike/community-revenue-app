import Navbar from "../components/navbar"
import HeroImage from "../assets/contact-page-hero.png"
import GetStarted from "../components/getStarted"
import { FaPlay } from "react-icons/fa"
import Gallary1 from "../assets/gallary1.png"
import Gallary2 from "../assets/gallary2.png"
import Gallary3 from "../assets/gallary3.png"
import Gallary4 from "../assets/gallary4.png"
import Footer from "../components/common/footer"
 const GallaryPage = () => {

   
    return (
        <div>
        <Navbar />


        <div>
             <div
            className="relative h-[80vh] bg-cover bg-center"
            style={{ backgroundImage: `url(${HeroImage})` }}
            >
            <div className="absolute inset-0 bg-gradient-to-br from-[#4A72C033] to-[#7A7D47] via-silver"></div>
            <div className="relative z-10 flex items-center justify-center h-full text-white text-center px-4">
                <div className='flex flex-col items-center'>

                <p>Unite, Serve, Strengthen Ogidi Together </p>
                <h1 className="text-4xl md:text-6xl font-bold max-w-2/3">
                Gallary
                </h1>

                </div>
                
            </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-8 font-sans">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">Explore Gallery</h1>
        <p className="text-sm text-gray-500 mt-1">Discover our rich cultural heritage and traditions</p>
      </div>

      {/* Main Gallery */}
      <div className="space-y-4">
        {/* Banner Image */}
        <div className="w-full rounded-lg overflow-hidden">
          <div className="relative">
            <img
              // src="/placeholder.svg?height=400&width=800"
              src={Gallary1}
              alt="Igwe-In-Council / cabinet members"
              className="w-full h-auto object-cover"
            />
            <div className="absolute bottom-0 left-0 bg-black bg-opacity-60 text-white p-2 text-sm">
              Igwe-In-Council / cabinet members
            </div>
          </div>
        </div>

        {/* Three Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4">
          <div className="rounded-lg overflow-hidden">
            <img
              src={Gallary2}
              // src="/placeholder.svg?height=200&width=300"
              alt="Cultural artifacts"
              className="w-full h-32 sm:h-40 object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden">
            <img
              // src="/placeholder.svg?height=200&width=300"
              src={Gallary3}
              alt="Traditional ceremony"
              className="w-full h-32 sm:h-40 object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden">
            <img
              // src="/placeholder.svg?height=200&width=300"
              src={Gallary4}
              alt="Local cuisine"
              className="w-full h-32 sm:h-40 object-cover"
            />
          </div>
        </div>

        {/* Video Banner */}
        <div className="w-full rounded-lg overflow-hidden">
          <div className="relative">
            <video
             src={"https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"}
              alt="Cultural video"
              className="w-full h-48 sm:h-64 object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-black bg-opacity-50 rounded-full p-3 cursor-pointer hover:bg-opacity-70 transition-all">
                <FaPlay className="w-6 h-6 text-white" />
              </div>
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


export default GallaryPage