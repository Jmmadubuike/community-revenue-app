import Navbar from "../components/navbar"
import Footer from "../components/common/footer"
import { motion } from "framer-motion"
import { FaCrown, FaUserTie } from "react-icons/fa"

// Import past leaders images
import Image4 from "../assets/past-leaders/Image4.png"
import Image5 from "../assets/past-leaders/Image5.png"
import Image6 from "../assets/past-leaders/Image6.png"
import Image7 from "../assets/past-leaders/Image7.png"
import Image8 from "../assets/past-leaders/Image8.png"
import Image9 from "../assets/past-leaders/Image9.png"
import Image10 from "../assets/past-leaders/Image10.png"
import Image11 from "../assets/past-leaders/Image11.png"
import Image12 from "../assets/past-leaders/Image12.png"
import Image13 from "../assets/past-leaders/Image13.png"
import Image14 from "../assets/past-leaders/Image14.png"
import Image15 from "../assets/past-leaders/Image15.png"
import Image16 from "../assets/past-leaders/Image16.png"
import Image17 from "../assets/past-leaders/Image17.png"
import Image18 from "../assets/past-leaders/Image18.png"
import Image19 from "../assets/past-leaders/Image19.png"
import Image20 from "../assets/past-leaders/Image20.png"
import Image21 from "../assets/past-leaders/Image21.png"
import Image22 from "../assets/past-leaders/Image22.jpg"
import Image23 from "../assets/past-leaders/Image23.jpg"
import Image24 from "../assets/past-leaders/Image24.jpg"



import { image } from "@cloudinary/url-gen/qualifiers/source"

// Animation variants
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

// Past Igwes data
const pastIgwes = [
    
   
    
    {
        name: "HRH Igwe Walter Okafor Okerulu Amobi(Nwatawochaala)",
        period: "1904-1925",
        image: Image19,
        description: "Third son of Ogidi and Duaja, established the Ezinkwo village."
    },
    {
        name: "HRH Igwe Benjamin Olisaeloka Amobi (Ezennia)",
        period: "1937-1973",
        image: Image20,
    },
    {
        name: "HRD Dr. Benedict Vincent Obiora Amobi",
        period: "1975-1986",
        image: Image17,
    },
    {
        name: "HRH Igwe(Engr) Walter Nnamdi Ifediora Amobi",
        period: "1993-1998",
        image: Image18,
    }
    
];

// Past PGs data
const pastPGs = [
    {
        name: "Emmanuel Obijiaku Nwoka",
        period: "1943-1959",
        image: Image5,
    },
    {
        name: "Barr. C.N. Oguagha",
        period: "1972-1977",
        image: Image6,
    },
    {
        name:"Cheif A.C. Ekpechi",
        period:"1977-1979",
        image:Image7
    },
    {
        name: "Chief Eng. Eugune C. Onwunya",
        period: "1979-1981",
        image: Image8,
    },
    {
        name: "High Cheif. Hon. Obi Anoliefo",
        period: "1981-1986",
        image: Image9,
        
    },
    {
        name:"Prof. Chinua Albert Achebe",
        period:"1986-1990",
        image:Image10
    },

    {
        name:"High Cheif Barr. Ibe Anienwelu",
        period:"1990-1994",
        image:Image11

    },
    {
        name:"Cheif DR. T.C.E Mbanefo",
        period:"1994-1997",
        image:Image16
    },
    {
        name:"Cheif O.C. Muanya",
        period:"1997-2000",
        image:Image12
    },
    {
        name:"Cheif Sir Chukwudi Obiakor",
        period:"2000-2003",
        image:Image15
    },
    {
        name:"High Cheif Vincent Chukwudi Onyeka",
        period:"2003-2004",
        image:Image14
    },
    {
        name:"Cheif Obinna Ekpechi",
        period:"2007-2010",
        image:Image24
    },
    {
        name:"Dr Cheif Eric Onyeka Obiakor",
        period:"2010-2015",
        image:Image22
    },
    {
        name:"High Cheif Chuka Jideofor Onubogu (Ifeneti Ogidi",
        period:"2015-2023",
        image:Image23
    }


    
];

const PastLeadersPage = () => {
    return (
        <div className="bg-white">
            <Navbar />

            {/* Hero Section */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="relative h-[40vh] w-full overflow-hidden bg-gray-900"
            >
                <div className="absolute inset-0 bg-black/40 z-10"></div>
                <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="absolute inset-0 z-20 flex items-center justify-center"
                >
                    <div className="text-center px-4">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                            Past Leaders
                        </h1>
                        <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
                        <p className="text-xl text-gray-200">
                            Honoring the Legacy of Our Past Igwes and President-Generals
                        </p>
                    </div>
                </motion.div>
            </motion.div>

            {/* Past Igwes Section */}
            <motion.section 
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="py-20 bg-amber-50"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div 
                        variants={fadeInUp}
                        className="text-center mb-12"
                    >
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <FaCrown className="text-3xl text-amber-600" />
                            <h2 className="text-3xl font-bold text-amber-900">Past Igwes</h2>
                        </div>
                        <p className="text-xl text-amber-800">The Royal Legacy of Ogidi Kingdom</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {pastIgwes.map((igwe, index) => (
                            <motion.div 
                                key={index}
                                variants={fadeInUp}
                                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                            >
                                <div className="aspect-w-3 aspect-h-4">
                                    <img 
                                        src={igwe.image} 
                                        alt={igwe.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2 text-gray-900">{igwe.name}</h3>
                                    <p className="text-amber-600 mb-4">{igwe.period}</p>
                                    <p className="text-gray-700">{igwe.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Past PGs Section */}
            <motion.section 
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="py-20 bg-gray-100"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div 
                        variants={fadeInUp}
                        className="text-center mb-12"
                    >
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <FaUserTie className="text-3xl text-gray-700" />
                            <h2 className="text-3xl font-bold text-gray-900">Past President-Generals</h2>
                        </div>
                        <p className="text-xl text-gray-700">The Leadership Legacy of Ogidi Union</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {pastPGs.map((pg, index) => (
                            <motion.div 
                                key={index}
                                variants={fadeInUp}
                                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                            >
                                <div className="aspect-w-3 aspect-h-4">
                                    <img 
                                        src={pg.image} 
                                        alt={pg.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2 text-gray-900">{pg.name}</h3>
                                    <p className="text-gray-600 mb-4">{pg.period}</p>
                                    <p className="text-gray-700">{pg.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            <Footer />
        </div>
    )
}

export default PastLeadersPage 