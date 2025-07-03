import Navbar from "../components/navbar";
import Footer from "../components/common/footer";
import { useState } from "react";
import { FaUserTie, FaUserFriends, FaUser, FaChevronDown, FaChevronUp, FaPhoneAlt } from "react-icons/fa";

const executiveData = [
  {
    group: "Executive Members of Ogidi Union Nigeria (OUN)",
    members: [
      { name: "Chief Hon. Ikwuka Okoye", position: "President General", phone: "08037414407" },
      { name: "Chijioke Ewesiobi Okeke", position: "Vice President General", phone: "08132794099" },
      { name: "Chukwuemeka C. Muoemenam", position: "Secretary General", phone: "08109199996" },
      { name: "Chinwendu Frank Obiora", position: "Assistant Secretary General", phone: "07061837868" },
      { name: "Chief Chukwubunna Obor", position: "Financial Secretary", phone: "08035448942" },
      { name: "Dr. Kenneth Obianagha", position: "Treasurer", phone: "08032770577" },
      { name: "Ikechukwu Achebe", position: "P.R.O.", phone: "08063366350" },
      { name: "Elochukwu Osondu", position: "Chief Provost", phone: "08034274411" },
    ],
  },
  {
    group: "Igwe-in-Council Members",
    members: [
      { name: "Chief Nonso Uchegbu", position: "Chinyelugo", phone: "08037163142" },
      { name: "Chief Chike Maduagwuna", position: "Ugolue", phone: "08033904162" },
      { name: "Chief Nonye Osakwe", position: "Ozodinaobi", phone: "08035411000" },
      { name: "Chief Dr. Ikemefuna Ajemba", position: "Ebubechukwuzo", phone: "09030365873" },
      { name: "Chief Frank Mozie", position: "Ezenwammadu", phone: "08034102287" },
      { name: "Chief Tochukwu Chioke", position: "Ozueomee", phone: "08037985700" },
      { name: "Chief Emeka Echenona", position: "Arubaluezeama", phone: "07030209696" },
      { name: "Chief Chukwudi Ebele", position: "Ugochinyere", phone: "08033241077" },
      { name: "Chief Godwin Udeorah", position: "Egojiolu", phone: "08033838427" },
      { name: "Chief Dr. Uche Onyegbu", position: "Akulue - uno", phone: "08027654890" },
      { name: "Chief Uchenna Okonkwo", position: "Nnabuenyi", phone: "08037563417" },
      { name: "Chief Ikechukwu Okoye", position: "Nnanyelugo", phone: "08034296333" },
      { name: "Chief Emeka Arinze", position: "Akusinachi", phone: "08034102287" },
      { name: "Chief Onyebuchi Vincent", position: "Ezeogo", phone: "09030365873" },
      { name: "Chief Ndika Onyeka", position: "Nwakaibie", phone: "08036685346" },
      { name: "Chief Augustine Ifezueoke", position: "Ezenwata", phone: "08105128818" },
      { name: "Chief Ubaka Iloabachie", position: "Ojinnaka", phone: "08036685346" },
      { name: "Chief Kenneth Amobi", position: "Ezennia", phone: "08142245194" },
      { name: "Chief Obi Ibemesi", position: "Nwawelugo", phone: "08033401577" },
      { name: "Chief Ugoo Mbaekwe", position: "Ezenwata", phone: "08033356008" },
      { name: "Chief Vincent Obi", position: "Ezeudo", phone: "08035530145" },
      { name: "Chief/Engr. Okey Amobi", position: "Oba", phone: "08137227420" },
    ],
  },
  {
    group: "Ndi Ichie Ogidi",
    // icon: <FaUserTie className="text-3xl text-amber-700" />,
    members: [
      { name: "Chief Benedict Meka", position: "President", phone: "07035071973" },
      { name: "Chief Linus Udokwu", position: "Vice President", phone: "08068632666" },
      { name: "Chief Christopher Okeke", position: "Secretary", phone: "08033467264" },
      { name: "Chief Abua Twonye", position: "Assistant Secretary", phone: "08033481275" },
      { name: "Chief Osita Ekpunobi", position: "Financial Secretary", phone: "08034922137" },
      { name: "Chief Gabriel Obidike", position: "Treasurer", phone: "08062900492" },
      { name: "Chief Peter Onekamma", position: "Public Relations Officer", phone: "08037861619" },
      { name: "Chief Leonard Mbamalu", position: "Provost", phone: "08068481112" },
    ],
  },
  {
    group: "Women's Wing Executive",
    // icon: <FaUserFriends className="text-3xl text-pink-600" />,
    members: [
      { name: "Prof. Mrs. Ada Sam Omenyi", position: "Women Leader", phone: "08037723476" },
      { name: "Mrs. Stella Maduka", position: "Vice Women Leader", phone: "08036272725" },
      { name: "Lay Reader Philomena Okongwu", position: "Secretary", phone: "08060890538" },
      { name: "Dr. Ebele Ubah", position: "", phone: "08032933638" ,position:"Assistant Secretary"},
      { name: "Mrs. Maryrose Okeke-Ozoude", position: "", phone: "09060069063",position:"Financial Secretary" },
      { name: "Mrs. Ogechukwu Ndefo", position: "", phone: "08035452639" },
      { name: "Mrs. Ngozi Amamchukwu", position: "", phone: "08063325129",position:"Treasurer"},
      { name: "Mrs. Ebele Ogbogu", position: "", phone: "08037522767" },
      { name: "Mrs. Ngozi Agusiobi", position: "Provost (Uru)", phone: "08039162611" },
      { name: "Mrs. Chinwendu Egwim", position: "Provost", phone: "08138436563" },
      { name: "Mrs. Eucharia Mmadukife", position: "Provost (Ezinkwo)", phone: "07031005596" },
      { name: "Mrs. Okwukwu Agbakoba", position: "Provost", phone: "08063684846" },
      { name: "Mrs. Ngozi Ndiche", position: "", phone: "08133947761",position:"Quarter Rep. (Akanano)"},
      { name: "Mrs. Ogoo Okocha", position: "", phone: "08032687838",position:"Quarter Rep. (Uru)" },
      { name: "Mrs. Joy Okafor", position: "", phone: "08037438112" ,position:"Quarter Rep. (Ezinkwo)"},
      { name: "Mrs. Ngozi Enedo", position: "", phone: "08145752767" ,position:"Quarter Rep. (Ikenga)"},
    ],
    subgroups: [
      {
        name: "Ezinkwo Women's Wing",
        members: [
          { name: "Mrs. Joy Okafor", position: "Chairlady", phone: "08037438112" },
          { name: "Mrs. Josephine Aratoke", position: "Vice Chairlady", phone: "07045275605" },
          { name: "Mrs. Theresa Udemezue", position: "Secretary", phone: "08034674144" },
          { name: "Mrs. Anayo Okeke", position: "Ass Secretary", phone: "09165299212" },
          { name: "Mrs. Eunice OsegbO", position: "Fin Secretary", phone: "08064643725" },
          { name: "Mrs. Comfort Udemezue", position: "Treasure", phone: "07032866956" },
          { name: "Chidiebele Okoye", position: "Provost", phone: "08066898429" },
        ],
      },
      {
        name: "Ikenga Quarter Women's Wing",
        members: [
          { name: "Enedo Ngozi", position: "Chairlady", phone: "08045752767" },
          { name: "Chiebonam Ifedi", position: "Vice Chairlady", phone: "08021286016" },
          { name: "Ekene Okanmelu", position: "Secretary", phone: "09133760245" },
          { name: "Obiageli Mmaduako", position: "Ass Secretary", phone: "09019934256" },
          { name: "Adaora Onexanma", position: "Fin Secretary", phone: "09033521181" },
        ],
      },
      {
        name: "Aka – Na –Ano Women's Wing",
        members: [
          { name: "Mrs. Ngozi Ndichie", position: "", phone: "08133947761" },
          { name: "Mrs. Mercy Ilukwe", position: "", phone: "07062463084" },
          { name: "Mrs. Apollonia Ifediora", position: "", phone: "07068556299" },
          { name: "Mrs. Joy Chukwuemerie", position: "", phone: "07032932166" },
          { name: "Mrs. Obiageli Chukwunulu", position: "", phone: "08034334774" },
          { name: "Mrs. Ebele Okoye", position: "", phone: "08037759324" },
          { name: "Mrs. Chinenye Ezepe", position: "", phone: "08108926479" },
        ],
      },
      {
        name: "Uru Quarter Women's Wing",
        members: [
          { name: "Mrs. Ogoo Okocha", position: "President", phone: "09014869829" },
          { name: "Mrs. Obiechina", position: "V.P.", phone: "07034967066" },
          { name: "Ogochukwu Ubanwosu", position: "Fin Sec", phone: "08068460718" },
          { name: "Mrs. Metu", position: "Ass Fin Sec", phone: "08067838896" },
          { name: "Clementina Unobuagha", position: "Secretary", phone: "08055094494" },
          { name: "Oluchukwu Ikezue", position: "Assist Secretary", phone: "" },
          { name: "Ngozi Ezikel", position: "TreasuER", phone: "08137667966" },
          { name: "Ifeyinwa Amobi", position: "PRO", phone: "07066843911" },
        ],
      },
    ],
  },
  {
    group: "Youth Executives",
    // icon: <FaUser className="text-3xl text-green-600" />,
    members: [
      { name: "Hon. Chris Obi Okafor", position: "President", phone: "", quarter: "Ezinkwo" },
      { name: "Arc. Chika Ezepue", position: "Vice President", phone: "", quarter: "Akanano" },
      { name: "Engr. Ideli Chukwuebuka", position: "Secretary", phone: "", quarter: "Ikenga" },
      { name: "Mr. Charles Obiekwe", position: "Assistant Secretary", phone: "", quarter: "Ezinkwo" },
      { name: "Mr. Ikechukwu Okonkwo", position: "Financial Secretary", phone: "", quarter: "Akanano" },
      { name: "Mr. Udeorah Sopulu", position: "Treasurer", phone: "", quarter: "Uru" },
      { name: "Mr. Chukwudi Obianyo", position: "PRO", phone: "", quarter: "Ikenga" },
      { name: "Mr. Ikechukwu Okaro", position: "Provost", phone: "", quarter: "Uru" },
    ],
    subgroups: [
      {
        name: "Quarter Youth Chairmen",
        members: [
          { name: "Mr. Ikechukwu Okonkwo", position: "Chairman", phone: "", quarter: "Akanano quarter" },
          { name: "Mr. Udeorah Sopulu", position: "Chairman", phone: "", quarter: "Uru quarter" },
          { name: "Mr. Ibemesi Chukwuka", position: "Chairman", phone: "", quarter: "Ezinkwo quarter" },
          { name: "Mr. Chukwudi Obianyo", position: "Chairman", phone: "", quarter: "Ikenga quarter" },
        ],
      },
    ],
  },
];

function CollapsibleSection({ title, icon, children, defaultOpen = true }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <section className="bg-white rounded-lg -md overflow-hidden mb-6">
      <button
        className="w-full flex items-center justify-between p-6 bg-gray-100  focus:outline-none hover:bg-amber-50 transition-colors"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span className="flex items-center gap-3 text-2xl font-bold text-gray-800">
          {icon}
          {title}
        </span>
        {open ? <FaChevronUp /> : <FaChevronDown />}
      </button>
      {open && <div className="p-6">{children}</div>}
    </section>
  );
}

function MemberCard({ name, position, phone, quarter }) {
  return (
    <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg border border-gray-200 hover:border-amber-600 transition-colors -sm">
      <FaUserTie className="text-2xl text-amber-700 flex-shrink-0" />
      <div className="flex-1">
        <h3 className="font-bold text-lg text-gray-800">{name}</h3>
        {position && <p className="text-gray-700">{position}</p>}
        {quarter && <p className="text-gray-500 text-sm">{quarter}</p>}
        {phone && (
          <p className="mt-2 flex items-center gap-2">
            <FaPhoneAlt className="text-blue-500" />
            <a href={`tel:${phone}`} className="text-blue-600 hover:text-blue-800 underline">{phone}</a>
          </p>
        )}
      </div>
    </div>
  );
}

const ExecutivesPage = () => {
  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-gradient-to-br from-amber-100 to-amber-300 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-amber-900 drop-">Ogidi Leadership</h1>
          <p className="mt-4 text-xl text-amber-800">Meet our distinguished Executives and Council Members</p>
        </div>
      </div>
      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {executiveData.map((group, idx) => (
          <CollapsibleSection key={idx} title={group.group} icon={group.icon} defaultOpen={true}>
            <div className="grid md:grid-cols-2 gap-4">
              {group.members.map((member, i) => (
                <MemberCard key={i} {...member} />
              ))}
            </div>
            {group.subgroups && (
              <div className="mt-8 space-y-6">
                {group.subgroups.map((sub, j) => (
                  <div key={j}>
                    <h4 className="text-lg font-semibold text-amber-700 mb-2">{sub.name}</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {sub.members.map((member, k) => (
                        <MemberCard key={k} {...member} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CollapsibleSection>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default ExecutivesPage;