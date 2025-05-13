"use client"

import Navbar from "../components/navbar"
import HeroImage from "../assets/hero.jpg"
import Section1Image from "../assets/hero.png"
import Sesion2Image from "../assets/sesion2-img.png"
import Project1Image from "../assets/project1.png"
import Project2Image from "../assets/project2.png"
import Project3Image from "../assets/project3.jpg"
import Section3 from "../assets/section-3.jpg"
import StreetLight from "../assets/street-light.jpg"

import ExecutiveMembers from "../components/members"
import GetStarted from "../components/getStarted"
import Footer from "../components/common/footer"
import {
  FaArrowRight,
  FaImage,
  FaUserCircle,
  FaBuilding,
  FaLightbulb,
  FaRoad,
  FaUsers,
  FaGraduationCap,
} from "react-icons/fa"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Home = () => {
  // State to track image loading errors
  const [showModal, setShowModal] = useState(false)
  const [imageErrors, setImageErrors] = useState({
    hero: false,
    section1: false,
    section2: false,
    project1: false,
    project2: false,
    project3: false,
    section3: false,
  })
  const navigate = useNavigate()
  // Handle image error function
  const handleImageError = (imageKey) => {
    setImageErrors((prev) => ({
      ...prev,
      [imageKey]: true,
    }))
  }

  // Avatar fallback component
  const AvatarFallback = ({ icon: Icon, size = 24, className = "" }) => (
    <div className={`flex items-center justify-center bg-gray-200 ${className}`}>
      <Icon size={size} className="text-gray-500" />
    </div>
  )

  return (
    <div className="min-h-screen">
      <Navbar />
      {showModal && 
      <div id="myModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div class="bg-white p-6 rounded-xl shadow-2xl max-w-sm w-full relative">
        <button onClick={() => setShowModal(false)} class="absolute top-3 right-3 text-gray-400 hover:text-black text-xl">&times;</button>
        <h2 class="text-xl font-bold mb-2 text-gray-800">Support Us</h2>
        <p class="text-sm text-gray-600 mb-4">Your support keeps us going. Here are our bank details:</p>
        
        <div class="bg-gray-100 p-4 rounded-lg text-sm space-y-2">
          <div><span class="font-medium text-gray-700">Account Name:</span> Ogidi Union Advancement Forum</div>
          <div><span class="font-medium text-gray-700">Bank Name:</span> United Bank for Africa</div>
          <div><span class="font-medium text-gray-700">Account Number:</span> 1028021273</div>
        </div>
    
        <button onClick={() => setShowModal(false)} class="mt-6 w-full px-4 py-2 bg-amber-600 text-white rounded-lg  transition">
          I’ve Sent Support
        </button>
      </div>
    </div>
    }
      {/* Hero Section - Redesigned with black background and image on right */}
      <div className="bg-black text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              {/* <p className="text-black font-medium tracking-wider">UNITE, SERVE, STRENGTHEN TOGETHER</p> */}
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">OGIDI UNION ADVANCEMENT FORUM</h1>
              <p className="text-xl text-gray-300">Advancing Ogidi's Growth Together</p>
              <div className="pt-4 flex space-x-4">
                <button className="bg-black hover:bg-black px-6 py-3 rounded font-medium flex items-center gap-2 cursor-pointer" onClick={() => navigate("/new-user")}>
                  JOIN US <FaArrowRight size={16} />
                </button>
                <button onClick={() => navigate("/about")} className="border border-white hover:bg-white/10 px-6 py-3 rounded font-medium">
                  LEARN MORE
                </button>
              </div>
            </div>
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-10"></div>
              {imageErrors.hero ? (
                <AvatarFallback icon={FaBuilding} size={120} className="absolute inset-0 w-full h-full" />
              ) : (
                <img
                  src={Section1Image || "/placeholder.svg"}
                  alt="Ogidi Union"
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={() => handleImageError("hero")}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 - Our Purpose */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            {imageErrors.section1 ? (
              <AvatarFallback
                icon={FaUserCircle}
                size={100}
                className="w-full h-[300px] border-8 border-slate-300 shadow-lg"
              />
            ) : (
              <img
                src={HeroImage || "/placeholder.svg"}
                alt="Our Purpose"
                className="w-full h-auto border-8 border-slate-300 shadow-lg"
                onError={() => handleImageError("section1")}
              />
            )}
          </div>
          <div className="space-y-6 order-1 md:order-2">
            <p className="text-black font-medium tracking-wider">OUR PURPOSE</p>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">We Are Driven By Shared Commitment</h2>
            <p className="text-gray-700 text-lg">
              We envision a connected and prosperous Ogidi where every member contributes to and benefits from the
              community's growth. Our mission is to bring people together to support initiatives that promote
              sustainable security and infrastructural development, cultural preservation and social well-being.
            </p>
            <button onClick={() => navigate("/about")}className="cursor-pointer bg-black hover:bg-black px-6 py-4 text-white font-medium flex items-center gap-2 rounded">
              LEARN MORE ABOUT US <FaArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Mission & Vision Statements */}
      <div className="grid grid-cols-1 md:grid-cols-3 mt-8">
        <div className="bg-[#EAEAE8] col-span-2 p-12 flex flex-col items-center justify-center text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Mission Statement</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            To foster peace and security, empower infrastructural development, and inspire unity and progress in Ogidi
            through collaborative efforts, innovative solutions, and unwavering commitment to the well-being of our
            community.
          </p>
        </div>
        <div className="bg-[#FCD6D3] p-12 flex flex-col items-center justify-center text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6">Take A Pledge</h2>
          <button onClick={() => setShowModal(true)} className="border border-black hover:bg-black hover:text-white transition-colors px-6 py-3 rounded">
            Support Us
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="bg-[#DFDFDF] col-span-2 p-12 flex flex-col items-center justify-center text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Vision Statement</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            To build a resilient and prosperous Ogidi, where security, infrastructure, and opportunities thrive,
            reflecting the collective aspirations of its people.
          </p>
        </div>
        <div className="bg-[#FFF5F4] p-12 flex flex-col items-center justify-center text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6">Photos & Videos</h2>
          <button onClick ={() => navigate("/gallary")}className="cursor-pointer border border-black hover:bg-black hover:text-white transition-colors px-6 py-3 rounded">
            View Gallery
          </button>
        </div>
      </div>

      {/* Projects Section */}
      <div className="bg-[#FEFFE5] py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-black font-medium tracking-wider">PROJECTS</p>
              <h2 className="text-3xl font-bold">The Blueprint for Progress</h2>
              <div className="overflow-hidden rounded-lg shadow-lg">
                {imageErrors.section2 ? (
                  <AvatarFallback icon={FaLightbulb} size={80} className="w-full h-[250px]" />
                ) : (
                  <img
                    src={StreetLight || "/placeholder.svg"}
                    alt="Street Lights Project"
                    className="w-full h-auto"
                    onError={() => handleImageError("section2")}
                  />
                )}
              </div>
              <h3 className="text-xl font-bold">Installation of Street Lights</h3>
              <p className="text-gray-700">
                Let us light up Ogidi! Streetlights will not only beautify our community but also enhance security,
                encourage nightlife activities, and boost commerce in every corner of our town.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex justify-end">
                <button className="bg-black hover:bg-black text-white px-8 py-4 font-medium rounded" onClick={() => navigate("/project")}>
                  SEE ALL PROJECTS
                </button>
              </div>

              <div className="space-y-6 mt-8">
                {/* Project 1 */}
                <div className="flex gap-6 p-4 border-b border-gray-300 hover:bg-white/50 transition-colors">
                  {imageErrors.project1 ? (
                    <AvatarFallback icon={FaRoad} size={40} className="w-24 h-24 rounded" />
                  ) : (
                    <img
                      src={Project1Image || "/placeholder.svg"}
                      alt="Road Construction"
                      className="w-24 h-24 object-cover rounded"
                      onError={() => handleImageError("project1")}
                    />
                  )}
                  <div>
                    <h3 className="text-lg font-semibold">
                      Road Construction and Maintenance, Including Drainage Systems
                    </h3>
                    <p className="text-gray-700 mt-2">
                      Smooth, durable roads with functional drainage systems are the backbone of any thriving community.
                      <a href="#" className="text-black font-medium ml-1 hover:underline">
                      </a>
                    </p>
                  </div>
                </div>

                {/* Project 2 */}
                <div className="flex gap-6 p-4 border-b border-gray-300 hover:bg-white/50 transition-colors">
                  {imageErrors.project2 ? (
                    <AvatarFallback icon={FaUsers} size={40} className="w-24 h-24 rounded" />
                  ) : (
                    <img
                      src={Project2Image || "/placeholder.svg"}
                      alt="Project 2"
                      className="w-24 h-24 object-cover rounded"
                      onError={() => handleImageError("project2")}
                    />
                  )}
                  <div>
                    <h3 className="text-lg font-semibold">Community Development Initiatives</h3>
                    <p className="text-gray-700 mt-2">
                      Building a stronger community through collaborative development projects and local empowerment.
                      <a href="#" className="text-black font-medium ml-1 hover:underline">
                      </a>
                    </p>
                  </div>
                </div>

                {/* Project 3 */}
                <div className="flex gap-6 p-4 border-b border-gray-300 hover:bg-white/50 transition-colors">
                  {imageErrors.project3 ? (
                    <AvatarFallback icon={FaGraduationCap} size={40} className="w-24 h-24 rounded" />
                  ) : (
                    <img
                      src={Project3Image || "/placeholder.svg"}
                      alt="Project 3"
                      className="w-24 h-24 object-cover rounded"
                      onError={() => handleImageError("project3")}
                    />
                  )}
                  <div>
                    <h3 className="text-lg font-semibold">Youth Empowerment Programs</h3>
                    <p className="text-gray-700 mt-2">
                      Investing in the future of Ogidi through education, skills training, and mentorship for our youth.
                      <a href="#" className="text-black font-medium ml-1 hover:underline">
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Events/News Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Section - Title & Image */}
          <div className="space-y-6">
            <p className="text-black font-medium tracking-wider">EVENTS/NEWS</p>
            <h2 className="text-3xl font-bold">Ogidi Summit 2024</h2>
            <div className="rounded-lg overflow-hidden shadow-lg">
              {imageErrors.section3 ? (
                <AvatarFallback icon={FaImage} size={80} className="w-full h-[250px]" />
              ) : (
                <img
                  src={Section3 || "/placeholder.svg"}
                  alt="Ogidi Summit"
                  className="w-full h-auto"
                  onError={() => handleImageError("section3")}
                />
              )}
            </div>
          </div>

          {/* Right Section - Details & Button */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Ogidi Summit 2024: News and Updates</h3>
            <p className="text-gray-700">
              The 2024 edition of the Ogidi Summit is set to be a transformative event, scheduled for
              <strong> 14th September 2024</strong> at <strong>Leophine Residency Hotel, Ogidi</strong>.
            </p>
            <p className="text-gray-700">
              Established as an annual platform, the Ogidi Summit addresses key issues affecting the community. It
              brings together stakeholders, leaders, and residents to deliberate and propose strategies for sustainable
              development. Since its inception, the Summit has fostered unity, tackling challenges such as insecurity,
              inadequate infrastructure, and youth empowerment.
            </p>
            <button className="px-6 py-3 text-white bg-black hover:bg-black rounded shadow-md flex items-center gap-2">
              Explore More <FaArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Executive Members Section */}
      <ExecutiveMembers />

      {/* Get Started Section */}
      <GetStarted />

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Home

