import React from 'react';
import Navbar from '../components/navbar';
import HeroImage from "../assets/hero.jpeg"
import Section1Image from "../assets/section-img.jpeg"
import Sesion2Image from "../assets/sesion2-img.png"
import Project1Image from "../assets/project1.png"
import Project2Image from "../assets/project2.png"
import Project3Image from "../assets/project3.png"
import Section3 from "../assets/section-3.png"
import ExecutiveMembers from '../components/members';
const Home = () => {
    return (
        <div>
            <Navbar />
            <div>
                {/* Section 1 */}
                    <div
                className="relative h-[80vh] bg-cover bg-center"
                style={{ backgroundImage: `url(${HeroImage})` }}
                >
                <div className="absolute inset-0 bg-gradient-to-br from-[#4A72C033] to-[#7A7D47] via-silver"></div>
                <div className="relative z-10 flex items-center justify-center h-full text-white text-center px-4">
                    <div className='flex flex-col items-center'>

                    <p>Unite, Serve, Strengthen Together </p>
                    <h1 className="text-4xl md:text-6xl font-bold max-w-2/3">
                            OGIDI UNION ADVANCEMENT FORUM
                    </h1>
                    <p>Advancing Ogidi's Growth Together</p>

                    </div>
                </div>
                </div>
                {/* Section 2 */}
                <div className='flex-col min-w-full flex md:flex-row justify-center mt-16 md:gap-32 mx-3'>

                    <img src={Section1Image}  className='w-92 border-8 border-slate-300'/>

                    <div className='flex-wrap flex flex-col md:max-w-4/12 items-start'>
                        <p className='mt-7'> our Purpose</p>
                        <h1 className='text-4xl whitespace-normal font-bold'>
                        We Are Driven By Shared Committment
                        </h1>

                        <p className='font-extralight text-lg'>
                        We envision a connected and prosperous Ogidi where every member contributes to and benefits from the community's growth. Our mission is to bring people together to support initiatives that promote sustainable sustainable security and infrastructural development, cultural preservation and social well-being.
                        </p>


                        <button className='bg-[#7A7D47] px-4 py-4 text-white flex items-center'>LEARN MORE ABOUT US</button>

                    </div>

                    

                </div>
                {/* Section 3 */}


                <div className='mt-16 md:flex'>
                    <div className='md:min-w-[65%] bg-[#EAEAE8] md:flex flex-col items-center p-8 text-center'>
                            <h1 className='text-4xl'>Mission Statement</h1>
                            <p className='text-sm font-extralight'>
                                To foster peace and security, empower infrastructural development, and inspire unity and progress in Ogidi through collaborative efforts, innovative solutions, and unwavering commitment to the well-being of our community.
                                </p>
                        

                    </div>  

                    <div className='bg-[#FCD6D3] w-full p-8 flex flex-col items-center text-center'>
                            <h1 className='text-6xl w-2/3 font-extralight'>Take A pledge</h1>
                            <button className='border px-4 py-2'>
                                Support Us
                            </button>
                    </div>

                    
                </div>
                    {/* Section 4 */}
                <div className='md:flex'>
                    <div className='md:min-w-[65%] bg-[#DFDFDF] flex flex-col items-center p-4 text-center'>
                            <h1 className='text-4xl'>Vision Statement</h1>
                            <p className='text-sm font-extralight'>
                            To build a resilient and prosperous Ogidi, where security, infrastructure, and opportunities thrive, reflecting the collective aspirations of its people.
                                </p>
                        

                    </div>  

                    <div className='bg-[#FFF5F4] w-full p-4 flex flex-col items-center text-center'>
                            <h1 className='text-6xl w-2/3 font-extralight'>Photos & Videos</h1>
                            <button className='border px-4 py-2'>
                                Support Us
                            </button>
                    </div>
                </div>

                <div className='mt-8 bg-[#FEFFE5] md:flex justify-center py-8 px-3'>
                    <div className='md:max-w-[50%]'>
                    <div className='max-w-[80%]'>
                    <p>Project</p>
                    <h1 className='text-2xl'>The Blueprint for Progress</h1>
                    <div className='overflow-hidden'>
                        <img src={Sesion2Image} className='object-contain' />

                    </div>
                    <p className='font-bold'>
                    Installation of Street Lights
                    </p>
                    <p className='font-extralight leading-loose'>
                    Let us light up Ogidi! Streetlights will not only beautify our community but also enhance security, encourage nightlife activities, and boost commerce in every corner of our town.

                    </p>
                    </div>
                    </div>

                    <div>
                        <button className='bg-[#7A7D47] text-white p-4 px-7'>
                            SEE ALL PROJECT
                        </button>

                        <div className='mt-16'>
                            
                        <div className='border-b flex gap-6 py-6'>
                            <img src={Project1Image} />
                           <div>
                           <p className='text-[1.2rem]'>Road Construction and Maintenance, Including Drainage Systems:</p>
                            <p>
                            Smooth, durable roads with functional drainage systems are the backbone of any thriving community. ..Read This
                            </p>
                           </div>
                        </div>


                        <div className='border-b flex gap-6 py-6'>
                            <img src={Project2Image} />
                           <div>
                           <p className='text-[1.2rem]'>Road Construction and Maintenance, Including Drainage Systems:</p>
                            <p>
                            Smooth, durable roads with functional drainage systems are the backbone of any thriving community. ..Read This
                            </p>
                           </div>
                        </div>


                        <div className='border-b flex gap-6 py-6'>
                            <img src={Project3Image} />
                           <div>
                           <p className='text-[1.2rem]'>Road Construction and Maintenance, Including Drainage Systems:</p>
                            <p>
                            Smooth, durable roads with functional drainage systems are the backbone of any thriving community. ..Read This
                            </p>
                           </div>
                        </div>
                        </div>

                    </div>

                </div>


                <div className="w-full mt-16 px-5">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
    {/* Left Section - Title & Image */}
    <div className="space-y-4">
      <p className="text-gray-600">EVENTS/NEWS</p>
      <h1 className="font-bold text-3xl">Ogidi Summit 2024</h1>
      <img src={Section3} alt="Ogidi Summit" className="w-full rounded-lg shadow-md" />
    </div>

    {/* Right Section - Details & Button */}
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Ogidi Summit 2024: News and Updates</h2>
      <p className="font-extralight">
        The 2024 edition of the Ogidi Summit is set to be a transformative event, scheduled for 
        <strong> 14th September 2024</strong> at <strong>Leophine Residency Hotel, Ogidi</strong>.
      </p>
      <p className="font-extralight">
        Established as an annual platform, the Ogidi Summit addresses key issues affecting the 
        community. It brings together stakeholders, leaders, and residents to deliberate and propose 
        strategies for sustainable development. Since its inception, the Summit has fostered unity, 
        tackling challenges such as insecurity, inadequate infrastructure, and youth empowerment.
      </p>
      <button className="px-5 py-2 text-white bg-[#7A7D47] rounded-md shadow-md hover:bg-[#6a6d40]">
        Explore More
      </button>
    </div>

  </div>
    <ExecutiveMembers />
</div>

            </div>
        </div>
    );
};

export default Home;