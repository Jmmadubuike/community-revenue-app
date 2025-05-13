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
                {/* Hero Section */}
                <div
                    className="relative h-[80vh] bg-cover bg-center"
                    style={{ backgroundImage: `url(${HeroImage})` }}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#4A72C033] to-black via-silver"></div>
                    <div className="relative z-10 flex items-center justify-center h-full text-white text-center px-4">
                        <div className='flex flex-col items-center'>
                            <h1 className="text-4xl md:text-6xl font-bold max-w-2/3">
                                Projects
                            </h1>
                        </div>
                    </div>
                </div>

                {/* Road Construction Section */}
                <div className='px-2 md:px-24 my-18'>
                    <div className='flex flex-col md:flex-row gap-18 justify-center items-center mb-12'>
                        <div className='md:w-full'>
                            <img src={ProjectImage1} className='w-full'/>
                        </div>
                        <div className='md:w-full'>
                            <p className="text-lg font-semibold text-amber-600 mb-2">CONSTRUCTION</p>
                            <h1 className="text-3xl font-bold mb-4">Road Construction and Maintenance, Including Drainage Systems</h1>
                            <p className="mb-6">
                                Smooth, durable roads with functional drainage systems are the backbone of any thriving community. 
                                Imagine streets free from potholes, where movement is seamless, and floodwaters are efficiently managed. 
                                Together, we can achieve this transformation.
                            </p>
                        </div>
                    </div>

                    {/* Road Details - Now placed directly below */}
                    <div className=" p-6 bg-gray-50 mb-12">
                        <h2 className="text-2xl font-bold mb-4 text-amber-800">List of Roads for Rehabilitation in Ogidi</h2>
                        <p className="mb-6">
                            Below is the list of priority roads slated for rehabilitation in Ogidi, aimed at enhancing 
                            connectivity, safety, and economic activity across the town:
                        </p>
                        
                        <div className="space-y-8">
                            {/* Road 1 */}
                            <div className=" border-amber-500 pl-4">
                                <h3 className="text-xl font-bold mb-2">1. Umunachi--Adazi Ogidi--Abatete Road (with a Spur at Km 1.6)</h3>
                                <p className="mb-2"><span className="font-semibold">Description:</span> This road begins at Kilometre 0+400 on the Afor-Igwe--Eziowelle Road, passing through Adazi and Ajilija villages in Ogidi, and continues to Abatete Town. It terminates at the Abatete--Ugwunwasike Road. A 1 km spur---Chief Okey Anaerobi Avenue---branches off and connects to Chief Ekwueme Road.</p>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li><span className="font-semibold">Main road length:</span> 3.4 km</li>
                                    <li><span className="font-semibold">Spur length:</span> 1.0 km</li>
                                    <li><span className="font-semibold">Note:</span> 1.2 km of the road from the Abatete end is asphalted and features concrete-lined drains on both sides.</li>
                                </ul>
                            </div>
                            
                            {/* Road 2 */}
                            <div className=" border-amber-500 pl-4">
                                <h3 className="text-xl font-bold mb-2">2. Sir Ifeanyichukwu Okaro Avenue</h3>
                                <p className="mb-2"><span className="font-semibold">Description:</span> Starting at the Y-junction on Chief (Sir) P. N. Uddoh Road in Umudoma Village, this road passes through Ntukwulu Village and terminates at Ogwugwuagu Village on the Abatete--Ugwunwasike Road.</p>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li><span className="font-semibold">Main road length:</span> 1.3 km</li>
                                    <li><span className="font-semibold">Spur:</span> Udenkwo--Ugomba Street (1.7 km)</li>
                                </ul>
                            </div>
                            
                            {/* Road 3 */}
                            <div className=" border-amber-500 pl-4">
                                <h3 className="text-xl font-bold mb-2">3. Oye Ogidi--Umuoji Boundary Road</h3>
                                <p className="mb-2"><span className="font-semibold">Description:</span> An extension of Chief (Sir) P. N. Uddoh Road from Oye Ogidi, this road passes through the Abor Obodokwe area and terminates at the Ogidi--Umuoji boundary.</p>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li><span className="font-semibold">Road length:</span> 1.1 km</li>
                                </ul>
                            </div>
                            
                            {/* Road 4 */}
                            <div className=" border-amber-500 pl-4">
                                <h3 className="text-xl font-bold mb-2">4. Nkwelle Ogidi--Ogidi Ani Etiti--Ogidi Ukwu Road</h3>
                                <p className="mb-2"><span className="font-semibold">Description:</span> Commencing near PAL Petrol Station on the Old Onitsha--Awka Road at Nkwelle Ogidi, this road follows the Ogidi Boys' Road alignment, passes through Ilo Etiti, and ends at Ogidi Ukwu's 'Transformer Junction' on Sardon West Avenue.</p>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li><span className="font-semibold">Road length:</span> 2.8 km</li>
                                </ul>
                            </div>
                            
                            {/* Road 5 */}
                            <div className=" border-amber-500 pl-4">
                                <h3 className="text-xl font-bold mb-2">5. Eke Nweje Market--Holy Spirit Church--Old Onitsha/Awka Road</h3>
                                <p className="mb-2"><span className="font-semibold">Description:</span> Beginning at the Old Onitsha--Awka Road by Eke Nweje Market, this route runs through the Holy Spirit Catholic Church compound and Nkwelle Ogidi Town Hall, reconnecting to the Old Onitsha--Awka Road just before PAL Petrol Station.</p>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li><span className="font-semibold">Road length:</span> 1.5 km</li>
                                </ul>
                            </div>
                            
                            {/* Roads 6-9 */}
                            <div className="space-y-4">
                                <h4 className="text-lg font-bold">Additional Roads:</h4>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li><span className="font-semibold">6. Umuru--Former Police Area Command--Eziogidi Road</span> (1.9 km)</li>
                                    <li><span className="font-semibold">7. Afor Nkpor--Ikemba Ilo Igwodo Road</span> (1.7 km)</li>
                                    <li><span className="font-semibold">8. Ilo Igwodo--Nkwelle Ogidi Road</span> (1.0 km)</li>
                                    <li><span className="font-semibold">9. Ogidi Town Hall--Umuoji--Umuru Road</span> (1.0 km)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Other Project Sections */}
                <div className='flex flex-col md:flex-row-reverse px-2 md:px-24 my-18 gap-18 justify-center items-center'>
                    <div className='md:max-w-2/4'>
                        <img src={ProjectImage2} className=''/>
                    </div>
                    <div className='md:max-w-2/4'>
                        <p className="text-lg font-semibold text-amber-600 mb-2">ELECTRICITY</p>
                        <h1 className="text-3xl font-bold mb-4">Enhanced Electricity and Power Supply</h1>
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
                        <p className="text-lg font-semibold text-amber-600 mb-2">EROSION ERADICATION</p>
                        <h1 className="text-3xl font-bold mb-4">Eradication of Erosion and Gully Spots</h1>
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
                        <p className="text-lg font-semibold text-amber-600 mb-2">STREET LIGHT</p>
                        <h1 className="text-3xl font-bold mb-4">Installation of Street Lights</h1>
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
                        <p className="text-lg font-semibold text-amber-600 mb-2">WASTE MANAGEMENT</p>
                        <h1 className="text-3xl font-bold mb-4">Effective Waste Management</h1>
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