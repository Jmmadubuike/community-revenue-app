import Navbar from "../components/navbar"
import HeroImage from "../assets/hero.jpeg"
import Sectiom1img from "../assets/about-section-1.jpeg"
import KingPic from "../assets/kingpics.png"
import CheifPic from "../assets/cheif-about.png"
import GetStarted from '../components/getStarted';
import Footer from "../components/common/footer"
import { motion } from "framer-motion"
import { FaArrowRight, FaArrowDown, FaHistory, FaCrown, FaUserTie, FaBookOpen } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
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

const AboutPage = () => {
    const navigate = useNavigate();
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="bg-white">
            <Navbar />

            {/* Hero Section */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="relative h-[80vh] w-full overflow-hidden"
            >
                <div className="absolute inset-0 bg-black/40 z-10"></div>
                <img 
                    src={HeroImage} 
                    alt="Ogidi Kingdom"
                    className="w-full h-full object-cover"
                />
                <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="absolute inset-0 z-20 flex items-center justify-center"
                >
                    <div className="text-center px-4">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                            About Us
                        </h1>
                        <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
                        <div className="flex flex-wrap justify-center gap-4">
                            <button 
                                onClick={() => scrollToSection('ouaf-section')}
                                className="bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-2"
                            >
                                <FaBookOpen /> About OUAF
                            </button>
                            <button 
                                onClick={() => scrollToSection('history-section')}
                                className="bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-2"
                            >
                                <FaHistory /> Our History
                            </button>
                            <button 
                                onClick={() => scrollToSection('king-section')}
                                className="bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-2"
                            >
                                <FaCrown /> Our Igwe (H.R.M.)
                            </button>
                            <button 
                                onClick={() => scrollToSection('chief-section')}
                                className="bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-2"
                            >
                                <FaUserTie /> Our  P.G.
                            </button>
                        </div>
                    </div>
                </motion.div>
            </motion.div>

            {/* OUAF Section */}
            <motion.section 
                id="ouaf-section"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="bg-black text-white py-20"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div 
                        variants={fadeInUp}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold mb-4">About Us</h2>
                        <h3 className="text-2xl font-semibold text-amber-400 mb-2">Ogidi Union Advancement Forum (OUAF)</h3>
                        <p className="text-xl text-gray-300 italic">Driving the Future of Ogidi Through Vision, Unity, and Action</p>
                    </motion.div>

                    <motion.div 
                        variants={fadeInUp}
                        className="prose prose-lg max-w-none prose-invert"
                    >
                        <p className="mb-6">
                            The Ogidi Union Advancement Forum (OUAF) is a dynamic Standing Committee of Ogidi Union Nigeria, born from a bold vision to transform Ogidi into a model community for sustainable development, peace, and prosperity. Our journey began with the groundbreaking Ogidi Summit 2024—a historic convergence of minds, voices, and hearts committed to charting a new course for our homeland.
                        </p>
                        <p className="mb-6">
                            The Summit Planning Committee, originally convened to organize this monumental event, soon evolved into a movement. The success of the Summit—reflected in the vibrant participation of Ndi Ogidi, insightful deliberations, and the adoption of far-reaching resolutions—made one truth abundantly clear: a new era of community-driven development had begun.
                        </p>
                        <div className="flex justify-center mt-8">
                            <button 
                                onClick={() => scrollToSection('history-section')}
                                className="bg-amber-500 text-black px-6 py-3 rounded-lg hover:bg-amber-400 transition-colors flex items-center gap-2"
                            >
                                Learn More About Our History <FaArrowDown />
                            </button>
                        </div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Detailed OUAF Section */}
            <motion.section 
                variants={fadeInUp}
                className="bg-white py-20"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-12 items-start">
                        <div className="lg:w-2/3">
                            <motion.div 
                                variants={fadeInUp}
                                className="mb-12"
                            >
                                <h2 className="text-4xl font-bold mb-4 text-gray-900">Who We Are</h2>
                                <p className="text-xl text-gray-600 mb-8">
                                    OUAF is a coalition of passionate sons and daughters of Ogidi, carefully selected across villages, professions, and generations, committed to translating ideas into impact. We are visionaries, planners, mobilizers, professionals, and volunteers—united by one mission: to advance Ogidi's collective wellbeing through innovative thinking, inclusive development, and actionable strategies.
                                </p>
                            </motion.div>

                            <motion.div 
                                variants={fadeInUp}
                                className="mb-12"
                            >
                                <h3 className="text-2xl font-bold mb-6 text-gray-900">What We Do</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-gray-50 p-6 rounded-lg">
                                        <h4 className="text-lg font-semibold mb-3 text-gray-900">Policy Research & Implementation</h4>
                                        <p className="text-gray-600">Translating summit resolutions into practical, long-term development blueprints.</p>
                                    </div>
                                    <div className="bg-gray-50 p-6 rounded-lg">
                                        <h4 className="text-lg font-semibold mb-3 text-gray-900">Stakeholder Engagement</h4>
                                        <p className="text-gray-600">Building trust, unity, and participation across all strata of Ogidi.</p>
                                    </div>
                                    <div className="bg-gray-50 p-6 rounded-lg">
                                        <h4 className="text-lg font-semibold mb-3 text-gray-900">Project Monitoring</h4>
                                        <p className="text-gray-600">Ensuring every initiative is purpose-driven, transparent, and impactful.</p>
                                    </div>
                                    <div className="bg-gray-50 p-6 rounded-lg">
                                        <h4 className="text-lg font-semibold mb-3 text-gray-900">Strategic Partnerships</h4>
                                        <p className="text-gray-600">Collaborating with agencies and stakeholders for resource mobilization.</p>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div 
                                variants={fadeInUp}
                                className="mb-12"
                            >
                                <h3 className="text-2xl font-bold mb-6 text-gray-900">Security Connect Scheme</h3>
                                <div className="bg-gray-50 p-8 rounded-lg">
                                    <p className="text-gray-600 mb-6">
                                        On March 15, 2025, OUAF achieved a major milestone in community safety by officially handing over 58 special security phones and toll-free emergency lines to His Royal Majesty, Igwe (Pharm.) Alex Uzo Onyido and the President-General, Chief Ikwuka Okoye.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                        <div className="bg-white p-4 rounded-lg shadow-sm">
                                            <h4 className="font-semibold mb-2">Enhance Response</h4>
                                            <p className="text-sm text-gray-600">Rapid emergency response system</p>
                                        </div>
                                        <div className="bg-white p-4 rounded-lg shadow-sm">
                                            <h4 className="font-semibold mb-2">Deter Crime</h4>
                                            <p className="text-sm text-gray-600">Eliminate criminal activity</p>
                                        </div>
                                        <div className="bg-white p-4 rounded-lg shadow-sm">
                                            <h4 className="font-semibold mb-2">Reinforce Capacity</h4>
                                            <p className="text-sm text-gray-600">Strengthen security operations</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div 
                                variants={fadeInUp}
                                className="mb-12"
                            >
                                <h3 className="text-2xl font-bold mb-6 text-gray-900">Our Guiding Values</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="border-l-4 border-amber-500 pl-4">
                                        <h4 className="text-lg font-semibold mb-2">Service Above Self</h4>
                                        <p className="text-gray-600">We put the interest of Ogidi first in all our actions.</p>
                                    </div>
                                    <div className="border-l-4 border-amber-500 pl-4">
                                        <h4 className="text-lg font-semibold mb-2">Unity in Diversity</h4>
                                        <p className="text-gray-600">We harness our differences to build strength and cohesion.</p>
                                    </div>
                                    <div className="border-l-4 border-amber-500 pl-4">
                                        <h4 className="text-lg font-semibold mb-2">Transparency & Accountability</h4>
                                        <p className="text-gray-600">We operate with integrity, openness, and a sense of duty.</p>
                                    </div>
                                    <div className="border-l-4 border-amber-500 pl-4">
                                        <h4 className="text-lg font-semibold mb-2">Innovation & Excellence</h4>
                                        <p className="text-gray-600">We approach every challenge with creativity and quality.</p>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div 
                                variants={fadeInUp}
                                className="mb-12"
                            >
                                <h3 className="text-2xl font-bold mb-6 text-gray-900">Our Mandate</h3>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {['Security', 'Infrastructure', 'Education', 'Health', 'Youth and Women Empowerment', 'Cultural Promotion', 'Diaspora Engagement'].map((item) => (
                                        <div key={item} className="bg-gray-50 p-4 rounded-lg text-center">
                                            <p className="text-gray-900 font-medium">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            <motion.div 
                                variants={fadeInUp}
                                className="text-center"
                            >
                                <h3 className="text-2xl font-bold mb-6 text-gray-900">Join the Movement</h3>
                                <p className="text-xl text-gray-600 mb-8">
                                    The future of Ogidi is being written today. OUAF is not just a committee—it is a call to action. A call for every Ogidi son and daughter—home and abroad—to contribute meaningfully to the greatness of our land.
                                </p>
                                <button 
                                    onClick={() => navigate('/new-user')}
                                    className="bg-amber-600 text-white px-8 py-4 rounded-lg hover:bg-amber-700 transition-colors flex items-center gap-2 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 mx-auto"
                                >
                                    Get Involved <FaArrowRight />
                                </button>
                            </motion.div>
                        </div>

                        <motion.div 
                            variants={fadeInUp}
                            className="lg:w-1/3"
                        >
                            <div className="sticky top-8">
                                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                                    <h4 className="text-xl font-bold mb-4 text-gray-900">Your Role in Securing Ogidi</h4>
                                    <ul className="space-y-4">
                                        <li className="flex items-start gap-3">
                                            <span className="text-amber-600 mt-1">•</span>
                                            <p className="text-gray-600">Save the emergency numbers once they are published</p>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-amber-600 mt-1">•</span>
                                            <p className="text-gray-600">Use them responsibly during real emergencies</p>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-amber-600 mt-1">•</span>
                                            <p className="text-gray-600">Spread awareness about the system</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="bg-amber-50 p-6 rounded-lg">
                                    <h4 className="text-xl font-bold mb-4 text-amber-900">How It Works</h4>
                                    <ol className="space-y-4">
                                        <li className="flex items-start gap-3">
                                            <span className="text-amber-600 font-bold">1.</span>
                                            <p className="text-amber-800">Call any of the toll-free emergency lines during a threat or crisis</p>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-amber-600 font-bold">2.</span>
                                            <p className="text-amber-800">Security operatives are alerted immediately and respond in real-time</p>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-amber-600 font-bold">3.</span>
                                            <p className="text-amber-800">All community exit points are locked down to prevent escape</p>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-amber-600 font-bold">4.</span>
                                            <p className="text-amber-800">Rapid-response teams are deployed to neutralize the threat</p>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* About Ogidi Section */}
            <motion.section 
                id="history-section"
                variants={fadeInUp}
                className="bg-amber-50 py-20"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                        <div className="lg:w-1/2">
                            <motion.div 
                                variants={fadeInUp}
                                className="mb-6"
                            >
                                <span className="text-lg font-light text-amber-800">Our Heritage</span>
                                <div className="w-16 h-0.5 bg-amber-600 my-2"></div>
                            </motion.div>
                            <motion.h2 
                                variants={fadeInUp}
                                className="text-3xl font-bold mb-6 text-amber-900"
                            >
                                ABOUT OGIDI KINGDOM
                            </motion.h2>
                            <motion.p 
                                variants={fadeInUp}
                                className="text-amber-800 mb-6"
                            >
                                Ogidi Kingdom is an Igbo-speaking town and serves as the headquarters of Idemili North Local Government Area, Anambra State, Nigeria. With an estimated population of 70,000 people, it shares boundaries with neighboring towns such as Abatete, Eziowelle, Uke, Nkpor, Umunachi, Umuoji, Ogbunike, Nkwele-Ezunaka, and Umudioka.
                            </motion.p>
                            
                            <motion.h3 
                                variants={fadeInUp}
                                className="font-bold text-lg mb-2 text-amber-900"
                            >
                                TRADITIONAL FESTIVAL
                            </motion.h3>
                            <motion.p 
                                variants={fadeInUp}
                                className="text-amber-800 mb-6"
                            >
                                Ogidi is renowned for its mid-July annual Nwafor Festival, an 11-day celebration that takes place after the cultivation of yams. A key component of this festival is the offering of prayers for a good harvest season.
                            </motion.p>
                            
                            <div className="flex justify-center mt-8">
                                <button 
                                    onClick={() => scrollToSection('king-section')}
                                    className="bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors flex items-center gap-2"
                                >
                                    Meet Our Igwe(H.R.M.) <FaArrowRight />
                                </button>
                            </div>
                        </div>
                        
                        <motion.div 
                            variants={fadeInUp}
                            className="lg:w-1/2"
                        >
                            <img 
                                src={Sectiom1img} 
                                alt="Ogidi Kingdom"
                                className="w-full h-auto rounded-lg object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Early History Section */}
            <motion.section 
                variants={fadeInUp}
                className="bg-gray-100 py-20"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                        <div className="lg:w-1/2">
                            <motion.div 
                                variants={fadeInUp}
                                className="mb-6"
                            >
                                <span className="text-lg font-light text-gray-700">Our Roots</span>
                                <div className="w-16 h-0.5 bg-gray-600 my-2"></div>
                            </motion.div>
                            <motion.h2 
                                variants={fadeInUp}
                                className="text-3xl font-bold mb-6 text-gray-900"
                            >
                                EARLY HISTORY AND SETTLEMENT
                            </motion.h2>
                            <div className="relative">
                                <div id="history-content" className="h-48 overflow-hidden transition-all duration-300">
                                    <motion.p 
                                        variants={fadeInUp}
                                        className="text-gray-700 mb-6"
                                    >
                                        The progenitor of Ndi-Ogidi was a tall, muscular hunter-warrior known as Ezechuamagha, born in 1460 AD. Although little is known about Ezechuamagha's ancestors, Ndi-Ogidi readily acknowledge his significance in their complex ancestral history. In 1485 AD, at the age of 25, Ezechuamagha (also known as Ebubedike) embarked on a great hunting expedition from his original home in the historically recognized Igbo heartland of the Awka-Orlu-Owerri-Okigwe axis, presumably near Nri.
                                    </motion.p>
                                    <motion.p 
                                        variants={fadeInUp}
                                        className="text-gray-700 mb-6"
                                    >
                                        His journey led him to Ogidi through Mpia-Mputu, where he paused and encountered his two brothers, who would later found Uke and Nnobi. Mputu, a lush green area situated between Ogidi, Uke, Abatete, and Umuoji, was eventually destroyed due to the alleged actions of one Ulume Nkpukpora, leading to the dispersal of its surviving inhabitants to surrounding towns.
                                    </motion.p>
                                    <motion.p 
                                        variants={fadeInUp}
                                        className="text-gray-700 mb-6"
                                    >
                                        At Mpia-Mputu, the bond between the future founders of Uke, Ogidi, and Nnobi was established. Uke's founder, who first settled at Mpia, is considered the eldest, followed by Ogidi, and then Nnobi, based on their original settlement order. Ezechuamagha married Anum-Ubosi, and around 1495 AD, they had a son named Inwelle. Inwelle later married Ebenebe, and around 1530 AD, they gave birth to Ogidi.
                                    </motion.p>
                                    <motion.p 
                                        variants={fadeInUp}
                                        className="text-gray-700 mb-6"
                                    >
                                        Ogidi married two wives, Duaja and Amalanyia. Duaja bore Akanano, Uru, Ezinkwo, Umu-Udo, and Amokwu, while Amalanyia bore Ikenga, Nneogidi, Uruagu, and Achalla-Ogidi. After leaving Mpia-Mputu, Ezechuamagha settled near the present Oye-Ogidi site, which he found ideal for his needs. His descendants later spread across the present-day geographical boundaries of Ogidi.
                                    </motion.p>
                                    <motion.h3 
                                        variants={fadeInUp}
                                        className="text-2xl font-bold mb-4 text-gray-900"
                                    >
                                        ETYMOLOGY OF OGIDI
                                    </motion.h3>
                                    <motion.p 
                                        variants={fadeInUp}
                                        className="text-gray-700 mb-6"
                                    >
                                        The name Ogidi derives from Ogiidi, meaning "a strong pillar" used in erecting a house. This name reflected his strength and manliness.
                                    </motion.p>
                                    <motion.h3 
                                        variants={fadeInUp}
                                        className="text-2xl font-bold mb-4 text-gray-900"
                                    >
                                        CULTURE AND TRANSFORMATION
                                    </motion.h3>
                                    <motion.p 
                                        variants={fadeInUp}
                                        className="text-gray-700 mb-6"
                                    >
                                        Over the years, Ogidi Kingdom has undergone significant cultural and normative evolution. The people of Ogidi are known for their ingenuity, resilience, and disdain for indolence. Their collective culture emphasizes hard work, personal achievement, and a reputation for excellence. Ndi-Ogidi's resourcefulness underscores their drive for success and progress.
                                    </motion.p>
                                    <motion.p 
                                        variants={fadeInUp}
                                        className="text-gray-700 italic"
                                    >
                                        Culled from "Ndi-Ogidi: Historical Milestones and Patrilineal Genealogy of Ogidi Kingdom" 2021, by Lotanna I. O. Nzegw
                                    </motion.p>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-gray-100 to-transparent"></div>
                            </div>
                            <div className="flex justify-center mt-8">
                                <button 
                                    onClick={() => {
                                        const content = document.getElementById('history-content');
                                        if (content) {
                                            content.classList.toggle('h-48');
                                            content.classList.toggle('h-auto');
                                        }
                                    }}
                                    className="bg-gray-700 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors flex items-center gap-2 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                                >
                                    Read Full History <FaArrowDown />
                                </button>
                            </div>
                        </div>
                        <motion.div 
                            variants={fadeInUp}
                            className="lg:w-1/2"
                        >
                            <img 
                                src={Sectiom1img} 
                                alt="Ogidi Kingdom History"
                                className="w-full h-auto rounded-lg object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* King Section */}
            <motion.section 
                id="king-section"
                variants={fadeInUp}
                className="bg-gray-900 text-white py-20"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                        <motion.div 
                            variants={fadeInUp}
                            className="lg:w-1/2"
                        >
                            <img 
                                src={KingPic} 
                                alt="His Royal Majesty, Igwe (Pharm.) Alex Uzo Onyido"
                                className="w-full h-auto rounded-lg object-cover"
                            />
                        </motion.div>
                        <motion.div 
                            variants={fadeInUp}
                            className="lg:w-1/2"
                        >
                            <h2 className="text-3xl font-bold mb-6 text-amber-400">His Royal Majesty, Igwe (Pharm.) Alex Uzo Onyido</h2>
                            <h3 className="text-xl text-gray-400 mb-6">(Igwe Ezechuamagha)</h3>
                            <div className="space-y-4 text-gray-300">
                                <div className="relative">
                                    <div id="king-content" className="h-32 overflow-hidden transition-all duration-300">
                                        <p>
                                            Igwe Onyido was born on 24th November, 1956 in the ancient city of Kano to the family of late Chief and Mrs Dennis Nwafor Onyido (Okaka Ogidi) of Uruezealor Village, Ogidi in Idemili North Local Government Area of Anambra State. The young Alex started his primary education at Ibo Union Primary School, Kano in 1962. His schooling was disrupted by the Nigeria Civil War of 1967 to1970. He relocated to the East with his parents following the war.
                                        </p>
                                        <p>
                                            After the war, he completed his primary education at Ogbor Primary School, Ogidi in 1971 before attending Oraukwu Grammar School, Oraukwu between 1971 and 1976. He passed his West African Senior School Certificate Examination, WASSCE in flying colours. He graduated as a certified pharmacist from Ahmadu Bello University, ABU, Zaria in 1982.
                                        </p>
                                        <p>
                                            After his one year internship and National Youth Service, NYSC, he gained employment into Kano State Ministry of Health. By 1991, Pharmacist Onyido who had risen to the position of Assistant Chief Pharmacist, and Member, Health Services Management Board, Kano State voluntarily resigned his appointment and joined the private sector.
                                        </p>
                                        <p>
                                            He immediately established Pal Pharmaceutical Industry Ltd and later, Alben Healthcare Industry Ltd, Ogidi where he has over 3000 workers, many of whom are from the community. He also divested into the oil and gas sector with the establishment of Pal Oil and Gas Industry Ltd.
                                        </p>
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent"></div>
                                </div>
                                <div className="flex justify-center mt-8">
                                    <button 
                                        onClick={() => {
                                            const content = document.getElementById('king-content');
                                            if (content) {
                                                content.classList.toggle('h-32');
                                                content.classList.toggle('h-auto');
                                            }
                                        }}
                                        className="bg-amber-500 text-black px-8 py-4 rounded-lg hover:bg-amber-400 transition-colors flex items-center gap-2 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                                    >
                                        Read Full Biography <FaArrowDown />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Chief Section */}
            <motion.section 
                id="chief-section"
                variants={fadeInUp}
                className="bg-amber-100 py-20"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                        <motion.div 
                            variants={fadeInUp}
                            className="lg:w-1/2 order-2 lg:order-1"
                        >
                            <h2 className="text-3xl font-bold mb-4 text-amber-900">Hon. Chief Ikwuka Okoye (Anumili)</h2>
                            <h3 className="text-xl text-amber-800 mb-6">(President-General, Ogidi Union Nigeria)</h3>
                            <div className="space-y-6 text-amber-800">
                                <div className="relative">
                                    <div id="chief-content" className="h-32 overflow-hidden transition-all duration-300">
                                        <p>
                                            <b>Chief Hon. Ikwukananne Okoye (Anumili)</b> is a distinguished statesman, a bridge-builder, and a tireless servant of the people, currently serving as the <b>President-General of Ogidi Union Nigeria and Diaspora</b>. With a legacy rooted in service, peace-building, and transformative leadership, Chief Okoye stands as a beacon of hope and progress in Anambra State and beyond.
                                        </p>
                                        <p>
                                            Born in 1968 at Wusasa Hospital, Zaria, to the late Michael and Roseline Okoye, his journey began in humble surroundings but was destined for greatness. He received his primary education at Uru na Akanano Primary School, Ogidi, completing it in 1979, and graduated from Rimi College, Kaduna, in 1984. Driven by a desire to contribute meaningfully to society, he pursued a tertiary education in Business Administration and Management at the prestigious Federal Polytechnic, Oko.
                                        </p>
                                        <p>
                                            A man of many parts, Chief Okoye is a renowned farmer, seasoned administrator, and grassroots political leader, having served as a Councillor and Supervisor for Education in Idemili North Local Government Area. He also leads notable social organizations as President of Friends Progressives Club and the Elite Club, further cementing his commitment to community mobilization and development.
                                        </p>
                                        <p>
                                            Revered across Ogidi for his peacemaking prowess, Chief Okoye is widely known for settling long-standing communal disputes, particularly in Uru Ezealor, where his wisdom and diplomacy restored peace and harmony. Under his watchful leadership, Ogidi has witnessed significant infrastructural advancement, including the installation of streetlights from Afor-Igwe to Oye Olisa and from Oye-Olisa to Nkwo Eziudo—initiatives that have enhanced safety and aesthetics across the town.
                                        </p>
                                        <p>
                                            He played a pivotal role in the revitalization of the General Hospital, Ogidi, improving facilities and staffing to ensure better healthcare delivery. Deeply compassionate, Chief Okoye has offered scholarships to over 200 pupils, empowering the next generation with education, and has personally covered medical expenses for countless indigent patients in hospitals such as Immaculate Heart Hospital, Ajefo Okwuosa Memorial Hospital, Twinkle Hospital and Maternity, and Emma Obiako Memorial Hospital.
                                        </p>
                                        <p>
                                            His service and impact have earned him numerous accolades, including the Patron Award by Umuada Anambra and Ndi Iyom Association, the Royal Father Award by the Anglican Communion, and the Award of Excellence by Nnamdi Azikiwe University for contributions to industrial relations. Other notable recognitions include the Distinguished Honorary Members' Award by Military Cantonment Officers Mess, Meritorious Award by Igwebuike Age Grade, Patron Award by the National Youth Council of Nigeria, and Excellence Award by the Vigilante Group of Nigeria, Southeast Zone.
                                        </p>
                                        <p>
                                            Despite his many roles, Chief Okoye remains deeply grounded in his personal life. A lover of table tennis and avid reader, he believes in continual self-improvement and draws inspiration from books that challenge and uplift the human spirit. With unwavering vision and an unshakable commitment to his people, Chief Hon. Ikwukananne Okoye (Anumili) continues to inspire a new era of leadership rooted in service, development, and unity. His life is a testament to what is possible when purpose meets passion in the service of humanity.
                                        </p>
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-amber-100 to-transparent"></div>
                                </div>
                                <div className="flex justify-center mt-8">
                                    <button 
                                        onClick={() => {
                                            const content = document.getElementById('chief-content');
                                            if (content) {
                                                content.classList.toggle('h-32');
                                                content.classList.toggle('h-auto');
                                            }
                                        }}
                                        className="bg-amber-600 text-white px-8 py-4 rounded-lg hover:bg-amber-700 transition-colors flex items-center gap-2 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                                    >
                                        Read Full Biography <FaArrowDown />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div 
                            variants={fadeInUp}
                            className="lg:w-1/2 order-1 lg:order-2"
                        >
                            <img 
                                src={CheifPic} 
                                alt="Hon. Chief Ikwuka Okoye"
                                className="w-full h-auto rounded-lg object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Get Started Section */}
            <motion.section 
                variants={fadeInUp}
                className="mt-12"
            >
                <GetStarted />
            </motion.section>

            <Footer />
        </div>
    )
}

export default AboutPage