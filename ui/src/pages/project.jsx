import React from 'react';
import Navbar from '../components/navbar';
import HeroImage from "../assets/oguwansike.jpg"
import GetStarted from '../components/getStarted'
import ProjectImage1 from "../assets/project-page-1.png"
import ProjectImage2 from "../assets/project-page-2.png"
import ProjectImage3 from "../assets/project-page-3.png"
import ProjectImage4 from "../assets/project-page-4.png"
import ProjectImage5 from "../assets/project-page-5.png"
import Footer from '../components/common/footer';
const ProjectPage = () => {
    return (
        <div>
            <Navbar />
            <div>
                {/* Section 1 */}
                    <div
                className="relative h-[80vh] bg-cover bg-center"
                style={{ backgroundImage: `url(${HeroImage})` }}
                >
                <div className="absolute inset-0 bg-gradient-to-br from-[#4A72C033] to-black via-silver"></div>
                <div className="relative z-10 flex items-center justify-center h-full text-white text-center px-4">
                    <div className='flex flex-col items-center'>

                    {/* <p>Unite, Serve, Strengthen Together </p> */}
                    <h1 className="text-4xl md:text-6xl font-bold max-w-2/3">
                            Projects
                    </h1>

                    </div>
                </div>
                </div>
                
        


    <div className='flex flex-col md:flex-row px-2 md:px-24 my-18 gap-18 justify-center items-center'>
       <div className='md:max-w-2/4'>
       <img src={ProjectImage1} className=''/>
       </div>

        <div className='md:max-w-2/4'>
            <p>CONSTRUCTION</p>
            <h1>Road Construction and Maintenance, Including Drainage Systems </h1>
            <p>
            Smooth, durable roads with functional drainage systems are the backbone of any thriving community. Imagine streets free from potholes, where movement is seamless, and floodwaters are efficiently managed. Together, we can achieve this transformation.
            </p>
        </div>
    </div>

    <div className='flex flex-col md:flex-row-reverse px-2 md:px-24 my-18 gap-18 justify-center items-center'>
       <div className='md:max-w-2/4'>
       <img src={ProjectImage2} className=''/>
       </div>

        <div className='md:max-w-2/4'>
            <p>ELECTRICITY</p>
            <h1>Enhanced Electricity and Power Supply</h1>
            <p>
            Reliable electricity is critical for economic growth and improved quality of life. By enhancing our power infrastructure, we can illuminate our homes, power our businesses, and create opportunities for innovation and progress in Ogidi.
            </p>
        </div>
    </div>



    <div className='flex flex-col md:flex-row px-2 md:px-24 my-18 gap-18 justify-center items-center'>
       <div className='md:max-w-2/4'>
       <img src={ProjectImage3} className=''/>
       </div>

        <div className='md:max-w-2/4'>
            <p>EROSION ERADICATION</p>
            <h1>Eradication of Erosion and Gully Spots</h1>
            <p>
            Erosion threatens our lands, properties, and safety. Addressing this challenge through sustainable solutions will not only protect our environment but also secure our future.
            </p>
        </div>
    </div>

    <div className='flex flex-col md:flex-row-reverse px-2 md:px-24 my-18 gap-18 justify-center items-center'>
       <div className='md:max-w-2/4'>
       <img src={ProjectImage4} className=''/>
       </div>

        <div className='md:max-w-2/4'>
            <p>STREET LIGHT</p>
            <h1>Installation of Street Lights</h1>
            <p>
            Let us light up Ogidi! Streetlights will not only beautify our community but also enhance security, encourage nightlife activities, and boost commerce in every corner of our town.
            </p>
        </div>
    </div>

    <div className='flex flex-col md:flex-row px-2 md:px-24 my-18 gap-18 justify-center items-center'>
       <div className='md:max-w-2/4'>
       <img src={ProjectImage5} className=''/>
       </div>

        <div className='md:max-w-2/4'>
            <p>WASTE MANAGEMENT</p>
            <h1>Effective Waste Management</h1>
            <p>
            A clean Ogidi is a healthy Ogidi. Proper waste disposal systems and recycling initiatives will ensure our environment remains pristine and conducive for all.

            </p>
        </div>
    </div>

    <GetStarted />
        </div>
        <Footer />

        </div>
    );
};

export default ProjectPage;