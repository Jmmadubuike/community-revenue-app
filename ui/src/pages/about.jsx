import Navbar from "../components/navbar"
import HeroImage from "../assets/hero.jpeg"
import Sectiom1img from "../assets/about-section-1.jpeg"
import KingPic from "../assets/kingpics.png"
import CheifPic from "../assets/cheif-about.png"
import GetStarted from '../components/getStarted';
import Footer from "../components/common/footer"

const AboutPage = () => {
    return (
        <div className="bg-white">
            <Navbar />

            {/* Hero Section */}
            <div className="relative h-[80vh] w-full overflow-hidden">
                <div className="absolute inset-0 bg-black/40 z-10"></div>
                <img 
                    src={HeroImage} 
                    alt="Ogidi Kingdom"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 z-20 flex items-center justify-center">
                    <div className="text-center px-4">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
                            About Us
                        </h1>
                        <div className="w-24 h-1 bg-white mx-auto"></div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* About Ogidi Section */}
                <section className="mb-20">
                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                        <div className="lg:w-1/2">
                            <div className="mb-6">
                                <span className="text-lg font-light text-gray-500">About Us</span>
                                <div className="w-16 h-0.5 bg-red-600 my-2"></div>
                            </div>
                            <h2 className="text-3xl font-bold mb-6">ABOUT OGIDI KINGDOM</h2>
                            <p className="text-gray-700 mb-6">
                                Ogidi Kingdom is an Igbo-speaking town and serves as the headquarters of Idemili North Local Government Area, Anambra State, Nigeria. With an estimated population of 70,000 people, it shares boundaries with neighboring towns such as Abatete, Eziowelle, Uke, Nkpor, Umunachi, Umuoji, Ogbunike, Nkwele-Ezunaka, and Umudioka.
                            </p>
                            
                            <h3 className="font-bold text-lg mb-2">TRADITIONAL FESTIVAL</h3>
                            <p className="text-gray-700 mb-6">
                                Ogidi is renowned for its mid-July annual Nwafor Festival, an 11-day celebration that takes place after the cultivation of yams. A key component of this festival is the offering of prayers for a good harvest season. The festival typically begins on the first Friday of July and is marked with vibrant displays of various categories of masquerades, creating an atmosphere of fun and cultural pride.
                            </p>
                            
                            <h3 className="font-bold text-lg mb-2">EARLY HISTORY AND SETTLEMENT</h3>
                            <p className="text-gray-700">
                                The progenitor of Ndi-Ogidi was a tall, muscular hunter-warrior known as Ezechuamagha, born in 1460 AD.
                            </p>
                        </div>
                        
                        <div className="lg:w-1/2">
                            <img 
                                src={Sectiom1img} 
                                alt="Ogidi Kingdom"
                                className="w-full h-auto rounded-lg shadow-xl object-cover"
                            />
                        </div>
                    </div>
                </section>

                {/* History Section */}
                <section className="mb-20 bg-gray-50 p-8 rounded-lg">
                    <h2 className="text-2xl font-bold mb-6">EARLY HISTORY AND SETTLEMENT</h2>
                    <div className="space-y-6 text-gray-700">
                        <p>
                            The progenitor of Ndi-Ogidi was a tall, muscular hunter-warrior known as Ezechuamagha, born in 1460 AD. Although little is known about Ezechuamagha's ancestors, Ndi-Ogidi readily acknowledge his significance in their complex ancestral history.
                        </p>
                        <p>
                            In 1485 AD, at the age of 25, Ezechuamagha (also known as Ebubedike) embarked on a great hunting expedition from his original home in the historically recognized Igbo heartland of the Awka-Orlu-Owerri-Okigwe axis, presumably near Nri. His journey led him to Ogidi through Mpia-Mputu, where he paused and encountered his two brothers, who would later found Uke and Nnobi.
                        </p>
                        <p>
                            Mputu, a lush green area situated between Ogidi, Uke, Abatete, and Umuoji, was eventually destroyed due to the alleged actions of one Ulume Nkpukpora, leading to the dispersal of its surviving inhabitants to surrounding towns.
                        </p>
                        <p>
                            At Mpia-Mputu, the bond between the future founders of Uke, Ogidi, and Nnobi was established. Uke's founder, who first settled at Mpia, is considered the eldest, followed by Ogidi, and then Nnobi, based on their original settlement order. Ezechuamagha married Anum-Ubosi, and around 1495 AD, they had a son named Inwelle. Inwelle later married Ebenebe, and around 1530 AD, they gave birth to Ogidi. Ogidi married two wives, Duaja and Amalanyia. Duaja bore Akanano, Uru, Ezinkwo, Umu-Udo, and Amokwu, while Amalanyia bore Ikenga, Nneogidi, Uruagu, and Achalla-Ogidi.
                        </p>
                        <p>
                            After leaving Mpia-Mputu, Ezechuamagha settled near the present Oye-Ogidi site, which he found ideal for his needs. His descendants later spread across the present-day geographical boundaries of Ogidi.
                        </p>
                        
                        <h3 className="font-bold text-xl mt-8">ETYMOLOGY OF OGIDI</h3>
                        <p>
                            The name Ogidi derives from Ogiidi, meaning "a strong pillar" used in erecting a house. This name reflected his strength and manliness.
                        </p>
                        
                        <h3 className="font-bold text-xl mt-8">CULTURE AND TRANSFORMATION</h3>
                        <p>
                            Over the years, Ogidi Kingdom has undergone significant cultural and normative evolution. The people of Ogidi are known for their ingenuity, resilience, and disdain for indolence. Their collective culture emphasizes hard work, personal achievement, and a reputation for excellence. Ndi-Ogidi's resourcefulness underscores their drive for success and progress.
                        </p>
                        <p className="italic mt-4">
                            Culled from "Ndi-Ogidi: Historical Milestones and Patrilineal Genealogy of Ogidi Kingdom" 2021, by Lotanna I. O. Nzegw
                        </p>
                    </div>
                </section>

                {/* King Section */}
                <section className="mb-20">
                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                        <div className="lg:w-1/2">
                            <img 
                                src={KingPic} 
                                alt="His Royal Majesty, Igwe (Pharm.) Alex Uzo Onyido"
                                className="w-full h-auto rounded-lg shadow-xl object-cover"
                            />
                        </div>
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl font-bold mb-6">His Royal Majesty, Igwe (Pharm.) Alex Uzo Onyido (Igwe Ezechuamagha)</h2>
                            <div className="space-y-4 text-gray-700">
                                <p>
                                    Igwe Onyido was born on 24th November, 1956 in the ancient city of Kano to the family of late Chief and Mrs Dennis Nwafor Onyido (Okaka Ogidi) of Uruezealor Village, Ogidi in Idemili North Local Government Area of Anambra State. The young Alex started his primary education at Ibo Union Primary School, Kano in 1962. His schooling was disrupted by the Nigeria Civil War of 1967 to1970. He relocated to the East with his parents following the war.
                                </p>
                                <p>
                                    After the war, he completed his primary education at Ogbor Primary School, Ogidi in 1971 before attending Oraukwu Grammar School, Oraukwu between 1971 and 1976. He passed his West African Senior School Certificate Examination, WASSCE in flying colours. He graduated as a certified pharmacist from Ahmadu Bello University, ABU, Zaria in 1982. After his one year internship and National Youth Service, NYSC, he gained employment into Kano State Ministry of Health.
                                </p>
                                <p>
                                    By 1991, Pharmacist Onyido who had risen to the position of Assistant Chief Pharmacist, and Member, Health Services Management Board, Kano State voluntarily resigned his appointment and joined the private sector. He immediately established Pal Pharmaceutical Industry Ltd and later, Alben Healthcare Industry Ltd, Ogidi where he has over 3000 workers, many of whom are from the community. He also divested into the oil and gas sector with the establishment of Pal Oil and Gas Industry Ltd.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Chief Section */}
                <section className="mb-20">
                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                        <div className="lg:w-1/2 order-2 lg:order-1">
                            <h2 className="text-3xl font-bold mb-4">Hon. Chief Ikwuka Okoye (Anumili)</h2>
                            <h3 className="text-xl text-gray-600 mb-6">(President-General, Ogidi Union Nigeria)</h3>
                            <div className="space-y-6 text-gray-700">
                                <p>
                                    <b>Chief Hon. Ikwukananne Okoye (Anumili)</b> is a distinguished statesman, a bridge-builder, and a tireless servant of the people, currently serving as the <b>President-General of Ogidi Union Nigeria and Diaspora</b>. With a legacy rooted in service, peace-building, and transformative leadership, Chief Okoye stands as a beacon of hope and progress in Anambra State and beyond.
                                </p>
                                <p>
                                    Born in 1968 at Wusasa Hospital, Zaria, to the late Michael and Roseline Okoye, his journey began in humble surroundings but was destined for greatness. He received his primary education at Uru na Akanano Primary School, Ogidi, completing it in 1979, and graduated from Rimi College, Kaduna, in 1984. Driven by a desire to contribute meaningfully to society, he pursued a tertiary education in Business Administration and Management at the prestigious Federal Polytechnic, Oko.
                                </p>
                                <p>
                                    A man of many parts, Chief Okoye is a <b>renowned farmer, seasoned administrator, and grassroots political leader</b>, having served as a <b>Councillor</b> and <b>Supervisor for Education in Idemili North Local Government Area</b>. He also leads notable social organizations as <b>President of Friends Progressives Club</b> and the <b>Elite Club</b>, further cementing his commitment to community mobilization and development.
                                </p>
                                <p>
                                    Revered across Ogidi for his peacemaking prowess, Chief Okoye is widely known for settling long-standing communal disputes, particularly in <b>Uru Ezealor</b>, where his wisdom and diplomacy restored peace and harmony. Under his watchful leadership, Ogidi has witnessed significant infrastructural advancement, including the <b>installation of streetlights</b> from Afor-Igwe to Oye Olisa and from Oye-Olisa to Nkwo Eziudo—initiatives that have enhanced safety and aesthetics across the town.
                                </p>
                                <p>
                                    He played a pivotal role in the <b>revitalization of the General Hospital, Ogidi</b>, improving facilities and staffing to ensure better healthcare delivery. Deeply compassionate, Chief Okoye has <b>offered scholarships to over 200 pupils</b>, empowering the next generation with education, and has <b>personally covered medical expenses for countless indigent patients</b> in hospitals such as Immaculate Heart Hospital, Ajefo Okwuosa Memorial Hospital, Twinkle Hospital and Maternity, and Emma Obiako Memorial Hospital.
                                </p>
                                <p>
                                    His service and impact have earned him numerous accolades, including the <b>Patron Award by Umuada Anambra and Ndi Iyom Association</b>, <b>the Royal Father Award by the Anglican Communion</b>, and the <b>Award of Excellence by Nnamdi Azikiwe University</b> for contributions to industrial relations. Other notable recognitions include the <b>Distinguished Honorary Members' Award by Military Cantonment Officers Mess, Meritorious Award by Igwebuike Age Grade, Patron Award by the National Youth Council of Nigeria, and Excellence Award by the Vigilante Group of Nigeria, Southeast Zone</b>.
                                </p>
                                <p>
                                    Despite his many roles, Chief Okoye remains deeply grounded in his personal life. A lover of <b>table tennis and avid reader</b>, he believes in continual self-improvement and draws inspiration from books that challenge and uplift the human spirit.
                                </p>
                                <p>
                                    With unwavering vision and an unshakable commitment to his people, <b>Chief Hon. Ikwukananne Okoye (Anumili)</b> continues to inspire a new era of leadership rooted in service, development, and unity. His life is a testament to what is possible when purpose meets passion in the service of humanity.
                                </p>
                            </div>
                        </div>
                        <div className="lg:w-1/2 order-1 lg:order-2">
                            <img 
                                src={CheifPic} 
                                alt="Hon. Chief Ikwuka Okoye"
                                className="w-full h-auto rounded-lg shadow-xl object-cover"
                            />
                        </div>
                    </div>
                </section>

                {/* Get Started Section */}
                <section className="mt-12">
                    <GetStarted />
                </section>
            </div>

            <Footer />
        </div>
    )
}

export default AboutPage