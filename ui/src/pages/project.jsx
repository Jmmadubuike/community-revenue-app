import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/navbar';
import HeroImage from "../assets/oguwansike.jpg"
import GetStarted from '../components/getStarted'
import ProjectImage1 from "../assets/project-page-1.png"
import ProjectImage2 from "../assets/project-page-2.png"
import ProjectImage3 from "../assets/project-page-3.png"
import ProjectImage4 from "../assets/project-page-4.png"
import ProjectImage5 from "../assets/project-page-5.png"
import Footer from '../components/common/footer';

const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.2
        }
    }
};

const ProjectPage = () => {
    return (
        <div className="bg-gray-50">
            <Navbar />
            
            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="relative h-[50vh] md:h-[80vh] bg-cover bg-center"
                style={{ backgroundImage: `url(${HeroImage})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-[#4A72C033] to-black via-silver"></div>
                <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="relative z-10 flex items-center justify-center h-full text-white text-center px-4"
                >
                    <div className='flex flex-col items-center'>
                        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold max-w-2/3">
                            Projects
                        </h1>
                    </div>
                </motion.div>
            </motion.div>

            {/* Projects Container */}
            <motion.div 
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-16"
            >
                {/* Road Construction Section */}
                <motion.section 
                    variants={fadeInUp}
                    className="mb-12 sm:mb-24 bg-white rounded-2xl border border-gray-100 overflow-hidden"
                >
                    <div className="grid md:grid-cols-2 gap-4 sm:gap-8 p-4 sm:p-8">
                        <motion.div 
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="relative overflow-hidden rounded-xl h-[250px] sm:h-auto"
                        >
                            <img src={ProjectImage1} className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"/>
                        </motion.div>
                        <div className="flex flex-col justify-center">
                            <motion.p 
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="text-base sm:text-lg font-semibold text-amber-600 mb-2"
                            >
                                CONSTRUCTION
                            </motion.p>
                            <motion.h2 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4"
                            >
                                Road Construction and Maintenance
                            </motion.h2>
                            <motion.p 
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="text-sm sm:text-base text-gray-600"
                            >
                                Smooth, durable roads with functional drainage systems are the backbone of any thriving community. 
                                Imagine streets free from potholes, where movement is seamless, and floodwaters are efficiently managed.
                            </motion.p>
                        </div>
                    </div>
                </motion.section>

                {/* Street Lights Section */}
                <motion.section 
                    variants={fadeInUp}
                    className="mb-12 sm:mb-24 bg-white rounded-2xl border border-gray-100 overflow-hidden"
                >
                    <div className="grid md:grid-cols-2 gap-4 sm:gap-8 p-4 sm:p-8">
                        <div className="flex flex-col justify-center order-2 md:order-1">
                            <motion.p 
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="text-base sm:text-lg font-semibold text-amber-600 mb-2"
                            >
                                STREET LIGHT
                            </motion.p>
                            <motion.h2 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4"
                            >
                                Installation of Street Lights
                            </motion.h2>
                            <motion.p 
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6"
                            >
                                Let us light up Ogidi! Streetlights will not only beautify our community but also enhance security, 
                                encourage nightlife activities, and boost commerce in every corner of our town.
                            </motion.p>
                            
                            {/* Cost Estimates */}
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="bg-amber-50 p-4 sm:p-6 rounded-xl"
                            >
                                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-amber-800">Cost Estimates for Streetlights and Surveillance Cameras</h3>
                                <div className="space-y-3 sm:space-y-4">
                                    {[
                                        { road: "Mbaekwe/Oye Olisa Road", cost: "₦7.4 million" },
                                        { road: "Oye Ogidi/Afor Igwe Road", cost: "₦18.7 million" },
                                        { road: "Ugwunwasike/Abatete Road", cost: "₦30 million" }
                                    ].map((item, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.6 + index * 0.1 }}
                                            className="border-l-4 border-amber-500 pl-3 sm:pl-4"
                                        >
                                            <h4 className="text-base sm:text-lg font-bold mb-1">{item.road}</h4>
                                            <p className="text-sm sm:text-base font-semibold text-amber-700">{item.cost}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                        <motion.div 
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="relative overflow-hidden rounded-xl order-1 md:order-2 h-[250px] sm:h-auto"
                        >
                            <img src={ProjectImage4} className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"/>
                        </motion.div>
                    </div>
                </motion.section>

                {/* Public Schools Section */}
                <motion.section 
                    variants={fadeInUp}
                    className="mb-12 sm:mb-24 bg-white rounded-2xl border border-gray-100 overflow-hidden"
                >
                    <div className="grid md:grid-cols-2 gap-4 sm:gap-8 p-4 sm:p-8">
                        <motion.div 
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="relative overflow-hidden rounded-xl h-[250px] sm:h-auto"
                        >
                            <img src={ProjectImage3} className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"/>
                        </motion.div>
                        <div className="flex flex-col justify-center">
                            <motion.p 
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="text-base sm:text-lg font-semibold text-amber-600 mb-2"
                            >
                                EDUCATION
                            </motion.p>
                            <motion.h2 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4"
                            >
                                Establishment of Public Schools
                            </motion.h2>
                            <motion.p 
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="text-sm sm:text-base text-gray-600"
                            >
                                Currently, the majority of schools in Ogidi are either mission-owned or privately operated, 
                                making access to affordable education a challenge for many families. In light of the ongoing 
                                free education scheme introduced by the Anambra State Government, there is an urgent need to 
                                establish at least four public schools within each Quarter of Ogidi.
                            </motion.p>
                        </div>
                    </div>
                </motion.section>

                {/* Mbaekwe Road Rehabilitation Section */}
                <motion.section 
                    variants={fadeInUp}
                    className="mb-12 sm:mb-24 bg-white rounded-2xl border border-gray-100 overflow-hidden"
                >
                    <div className="p-4 sm:p-8">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="max-w-3xl mx-auto"
                        >
                            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-amber-800">Mbaekwe Road Rehabilitation Project</h2>
                            <div className="bg-amber-50 p-4 sm:p-6 rounded-xl">
                                <p className="mb-4 text-sm sm:text-base text-gray-700">
                                    As part of the ongoing community development initiatives of the Ogidi Union Advancement Forum (OUAF), 
                                    this project involves the comprehensive rehabilitation of the failed section of Mbaekwe Road, 
                                    including the construction of a proper drainage system to prevent future erosion and flooding.
                                </p>
                                <motion.div 
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="border-l-4 border-amber-500 pl-3 sm:pl-4"
                                >
                                    <h3 className="text-lg sm:text-xl font-bold mb-2">Project Details</h3>
                                    <p className="text-sm sm:text-base font-semibold text-amber-700">Estimated Cost: ₦28 million</p>
                                    <p className="mt-2 text-sm sm:text-base text-gray-600">
                                        This intervention is aimed at improving road accessibility, enhancing public safety, 
                                        and supporting economic activity in the area.
                                    </p>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </motion.section>

                {/* Road Rehabilitation List Section */}
                <motion.section 
                    variants={fadeInUp}
                    className="mb-12 sm:mb-24 bg-white rounded-2xl border border-gray-100 overflow-hidden"
                >
                    <div className="p-4 sm:p-8">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="max-w-4xl mx-auto"
                        >
                            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-amber-800">Road Rehabilitation Priority List</h2>
                            <p className="text-sm sm:text-base text-gray-700 mb-6">
                                Below is the list of priority roads slated for rehabilitation in Ogidi, aimed at enhancing connectivity, 
                                safety, and economic activity across the town:
                            </p>

                            <div className="space-y-6">
                                {/* Main Roads */}
                                <div className="space-y-4">
                                    {[
                                        {
                                            title: "1. Umunachi--Adazi Ogidi--Abatete Road",
                                            description: "This road begins at Kilometre 0+400 on the Afor-Igwe--Eziowelle Road, passing through Adazi and Ajilija villages in Ogidi, and continues to Abatete Town. It terminates at the Abatete--Ugwunwasike Road. A 1 km spur---Chief Okey Anaerobi Avenue---branches off and connects to Chief Ekwueme Road.",
                                            details: [
                                                "Main road length: 3.4 km",
                                                "Spur length: 1.0 km",
                                                "Note: 1.2 km of the road from the Abatete end is asphalted and features concrete-lined drains on both sides."
                                            ]
                                        },
                                        {
                                            title: "2. Sir Ifeanyichukwu Okaro Avenue",
                                            description: "Starting at the Y-junction on Chief (Sir) P. N. Uddoh Road in Umudoma Village, this road passes through Ntukwulu Village and terminates at Ogwugwuagu Village on the Abatete--Ugwunwasike Road.",
                                            details: [
                                                "Main road length: 1.3 km",
                                                "Spur: Udenkwo--Ugomba Street (1.7 km)"
                                            ]
                                        },
                                        {
                                            title: "3. Oye Ogidi--Umuoji Boundary Road",
                                            description: "An extension of Chief (Sir) P. N. Uddoh Road from Oye Ogidi, this road passes through the Abor Obodokwe area and terminates at the Ogidi--Umuoji boundary.",
                                            details: ["Road length: 1.1 km"]
                                        },
                                        {
                                            title: "4. Nkwelle Ogidi--Ogidi Ani Etiti--Ogidi Ukwu Road",
                                            description: "Commencing near PAL Petrol Station on the Old Onitsha--Awka Road at Nkwelle Ogidi, this road follows the Ogidi Boys' Road alignment, passes through Ilo Etiti, and ends at Ogidi Ukwu's 'Transformer Junction' on Sardon West Avenue.",
                                            details: ["Road length: 2.8 km"]
                                        },
                                        {
                                            title: "5. Eke Nweje Market--Holy Spirit Church--Old Onitsha/Awka Road",
                                            description: "Beginning at the Old Onitsha--Awka Road by Eke Nweje Market, this route runs through the Holy Spirit Catholic Church compound and Nkwelle Ogidi Town Hall, reconnecting to the Old Onitsha--Awka Road just before PAL Petrol Station.",
                                            details: ["Road length: 1.5 km"]
                                        }
                                    ].map((road, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.2 + index * 0.1 }}
                                            className="bg-gray-50 rounded-xl p-4 sm:p-6 border border-gray-200"
                                        >
                                            <h3 className="text-lg sm:text-xl font-bold mb-2 text-amber-800">{road.title}</h3>
                                            <p className="text-sm sm:text-base text-gray-700 mb-3">{road.description}</p>
                                            <div className="space-y-1">
                                                {road.details.map((detail, idx) => (
                                                    <p key={idx} className="text-sm sm:text-base text-gray-600">{detail}</p>
                                                ))}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Additional Roads */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
                                    className="bg-amber-50 rounded-xl p-4 sm:p-6 border border-amber-200"
                                >
                                    <h3 className="text-lg sm:text-xl font-bold mb-3 text-amber-800">Additional Roads</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {[
                                            "6. Umuru--Former Police Area Command--Eziogidi Road (1.9 km)",
                                            "7. Afor Nkpor--Ikemba Ilo Igwodo Road (1.7 km)",
                                            "8. Ilo Igwodo--Nkwelle Ogidi Road (1.0 km)",
                                            "9. Ogidi Town Hall--Umuoji--Umuru Road (1.0 km)"
                                        ].map((road, index) => (
                                            <p key={index} className="text-sm sm:text-base text-gray-700">{road}</p>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </motion.section>
            </motion.div>

            <GetStarted />
            <Footer />
        </div>
    );
};

export default ProjectPage;
