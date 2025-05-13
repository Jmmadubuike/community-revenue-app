
import { useState } from "react"
import Navbar from "../components/navbar"
import HeroImage from "../assets/igwe-in-cancel.jpg"
import Footer from "../components/common/footer"
// PaginationIndicator component included in the same file
const PaginationIndicator = ({ totalPages, currentPage }) => {
  return (
    <div className="flex justify-center gap-2 my-6">
      {Array.from({ length: totalPages }).map((_, index) => (
        <div key={index} className={`h-2 w-2 rounded-full ${index === currentPage ? "bg-[#4A72C0]" : "bg-gray-300"}`} />
      ))}
    </div>
  )
}

const ExecutivesPage = () => {
  const [currentPage, setCurrentPage] = useState(0)

  // Data for each page
  const pages = [
    {
      title: "Executive Members of Ogidi Union Nigeria (OUN)",
      members: [
        { position: "President General", name: "Chief Hon. Ikwuka Okoye", phone: "08037414407" },
        { position: "Vice President General", name: "Chijioke Ewesiobi Okeke", phone: "08132794099" },
        { position: "Secretary General", name: " Chukwuemeka C Muoemenam", phone: "08109199996" },
        { position: "Assistant Secretary General", name: "Chinwendu Frank Obiora", phone: "07061837868" },
        { position: "Financial Secretary", name: "Chief Chukwubunna Obor", phone: "08035448942" },
        { position: "Treasurer", name: "Dr. Kenneth Obianagha", phone: " 08032770577" },
        { position: "P.R.O.", name: " Ikechukwu Achebe", phone: "08063366350" },
        { position: "Chief Provost", name: "Elochukwu Osondu", phone: "08034274411" },
      ],
    },
    {
      title: "Igwe-in-Council",
      subtitle:
        "NAMES OF CANDIDATES FOR INAUGURATION/SWEARING INTO THE RECONSTITUTED IGWE-IN-COUNCIL (MARCH 16 - 2024)",
      sections: [
        {
          title: "AKANANO",
          members: [
            { position: "Chief", name: "Arinze Nweke (Ezeani)" },
            { position: "Chief", name: "Augustine Ekwunife" },
            { position: "Chief", name: "Obinna Umeh" },
            { position: "Chief", name: "Uche Ifeagwazi" },
            { position: "Chief", name: "Uzo Nwanna" },
          ],
        },
        {
          title: "URU",
          members: [
            { position: "Chief", name: "Chuka Onubogu" },
            { position: "Chief", name: "Charles Anaekwe" },
            { position: "Chief", name: "Ugochukwu Amene" },
            { position: "Chief", name: "Kenneth Ikelie" },
            { position: "Chief", name: "Nnamdi Umeh" },
          ],
        },
        {
          title: "EZINKWO",
          members: [
            { position: "Chief", name: "Emeka Eze" },
            { position: "Chief", name: "John Nzelu" },
            { position: "Chief", name: "Ike Nzelu" },
            { position: "Chief", name: "Boniface Nzekwe" },
            { position: "Chief", name: "Kola Oyeoka" },
          ],
        },
        {
          title: "IKENGA",
          members: [
            { position: "Chief Dr.", name: "Sam Agbata" },
            { position: "Chief", name: "Emma Chimezie" },
            { position: "Chief", name: "Livinus Atutu" },
            { position: "Chief", name: "Uchenna Okonkwo" },
            { position: "Chief", name: "Moses Umeagba" },
          ],
        },
      ],
    },
    {
      title: "Ndichie Ogidi Executives",
      members: [
        { position: "President", name: "Chief Benedict Udeze" },
        { position: "Vice-president", name: "Chief Louis Mbamalu" },
        { position: "Secretary", name: "Chief Chris Okeke" },
        { position: "Assistant Secretary", name: "Chief Uche Nwoye" },
        { position: "Financial Secretary", name: "Chief Uche Anyaorah" },
        { position: "Treasurer", name: "Chief Gabriel Okeke" },
        { position: "P.R.O.", name: "Chief Ogbu Nwankwo" },
        { position: "Provost", name: "Chief Leonard Ndubuisi" },
      ],
    },
  ]

  const nextPage = () => {
    setCurrentPage((prev) => (prev === pages.length - 1 ? 0 : prev + 1))
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev === 0 ? pages.length - 1 : prev - 1))
  }

  const renderPageContent = () => {
    const page = pages[currentPage]

    if (currentPage === 0) {
      return (
        <div className="mt-11 md:px-16">
          <h1 className="text-lg font-bold text-center text-slate-800">{page.title}</h1>
          <p className="text-center mb-6">Below is the list of members of Ogidi Union Nigeria:</p>

          <div className="space-y-3 max-w-3xl mx-auto">
            {page.members.map((member, index) => (
              <div key={index} className="bg-gray-200 px-6 py-4 rounded-md">
                {member.position}, {member.name}, {member.phone}
              </div>
            ))}
          </div>
        </div>
      )
    } else if (currentPage === 1) {
      return (
        <div className="mt-11 md:px-16">
          <h1 className="text-lg font-bold text-center text-slate-800">{page.title}</h1>
          <p className="text-center mb-6 max-w-3xl mx-auto">{page.subtitle}</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {page.sections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="space-y-3">
                <h3 className="font-bold text-center">{section.title}</h3>
                {section.members.map((member, memberIndex) => (
                  <div key={memberIndex} className="bg-gray-200 px-4 py-3 rounded-md text-sm">
                    {member.position} {member.name}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      )
    } else {
      return (
        <div className="mt-11 md:px-16">
          <h1 className="text-2xl font-bold text-center text-slate-800">{page.title}</h1>
          <div className="space-y-3 max-w-3xl mx-auto mt-6">
            {page.members.map((member, index) => (
              <div key={index} className="bg-gray-200 px-6 py-4 rounded-md">
                {member.position}: {member.name}
              </div>
            ))}
          </div>
        </div>
      )
    }
  }

  return (
    <div>
      <Navbar />

      <div>
        <div className="relative h-[80vh] bg-cover bg-center" style={{ backgroundImage: `url(${HeroImage})` }}>
          <div className="absolute inset-0 bg-gradient-to-br from-[#4A72C033] to-black via-silver"></div>
          <div className="relative z-10 flex items-center justify-center h-full text-white text-center px-4">
            <div className="flex flex-col items-center">
              <h1 className="text-4xl md:text-6xl font-bold">{pages[currentPage].title}</h1>
            </div>
          </div>
        </div>

        {renderPageContent()}

        {/* Pagination indicator */}
        <PaginationIndicator totalPages={pages.length} currentPage={currentPage} />

        {/* Navigation buttons */}
        <div className="flex justify-between max-w-3xl mx-auto my-12 px-6">
          <button
            onClick={prevPage}
            className="bg-amber-800 text-white px-6 py-2 rounded-md flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            Previous
          </button>
          <button
            onClick={nextPage}
            className="bg-amber-800 text-white px-6 py-2 rounded-md flex items-center"
          >
            Next
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ExecutivesPage

