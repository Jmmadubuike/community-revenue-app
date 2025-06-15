import Navbar from "../components/navbar"
import HeroImage from "../assets/igwe-in-cancel.jpg"
import Footer from "../components/common/footer"

const ExecutivesPage = () => {
  // Data for all executive groups
  const executiveGroups = [
    {
      title: "Executive Members of Ogidi Union Nigeria (OUN)",
      members: [
        { position: "President General", name: "Chief Hon. Ikwuka Okoye", phone: "08037414407" },
        { position: "Vice President General", name: "Chijioke Ewesiobi Okeke", phone: "08132794099" },
        { position: "Secretary General", name: "Chukwuemeka C Muoemenam", phone: "08109199996" },
        { position: "Assistant Secretary General", name: "Chinwendu Frank Obiora", phone: "07061837868" },
        { position: "Financial Secretary", name: "Chief Chukwubunna Obor", phone: "08035448942" },
        { position: "Treasurer", name: "Dr. Kenneth Obianagha", phone: "08032770577" },
        { position: "P.R.O.", name: "Ikechukwu Achebe", phone: "08063366350" },
        { position: "Chief Provost", name: "Elochukwu Osondu", phone: "08034274411" },
      ],
    },
    {
      title: "Igwe-in-Council Members",
      subtitle: "List of Council Members with their Titles and Contact Information",
      members: [
        { no: 1, name: "Chief Nonso Uchegbu", title: "Chinyelugo", phone: "08037163142" },
        { no: 2, name: "Chief Chike Maduagwuna", title: "Ugolue", phone: "08033904162" },
        { no: 3, name: "Chief Nonye Osakwe", title: "Ozodinaobi", phone: "08035411000" },
        { no: 4, name: "Chief Dr. Ikemefuna Ajemba", title: "Ebubechukwuzo", phone: "09030365873" },
        { no: 5, name: "Chief Frank Mozie", title: "Ezenwammadu", phone: "08034102287" },
        { no: 6, name: "Chief Tochukwu Chioke", title: "Ozueomee", phone: "08037985700" },
        { no: 7, name: "Chief Emeka Echenona", title: "Arubaluezeama", phone: "07030209696" },
        { no: 8, name: "Chief Chukwudi Ebele", title: "Ugochinyere", phone: "08033241077" },
        { no: 9, name: "Chief Godwin Udeorah", title: "Egojiolu", phone: "08033838427" },
        { no: 10, name: "Chief Dr. Uche Onyegbu", title: "Akulue - uno", phone: "08027654890" },
        { no: 11, name: "Chief Uchenna Okonkwo", title: "Nnabuenyi", phone: "08037563417" },
        { no: 12, name: "Chief Ikechukwu Okoye", title: "Nnanyelugo", phone: "08034296333" },
        { no: 13, name: "Chief Emeka Arinze", title: "Akusinachi", phone: "08034102287" },
        { no: 14, name: "Chief Onyebuchi Vincent", title: "Ezeogo", phone: "09030365873" },
        { no: 15, name: "Chief Ndika Onyeka", title: "Nwakaibie", phone: "08036685346" },
        { no: 16, name: "Chief Augustine Ifezueoke", title: "Ezenwata", phone: "08105128818" },
        { no: 17, name: "Chief Ubaka Iloabachie", title: "Ojinnaka", phone: "08036685346" },
        { no: 18, name: "Chief Kenneth Amobi", title: "Ezennia", phone: "08142245194" },
        { no: 19, name: "Chief Obi Ibemesi", title: "Nwawelugo", phone: "08033401577" },
        { no: 20, name: "Chief Ugoo Mbaekwe", title: "Ezenwata", phone: "08033356008" },
        { no: 21, name: "Chief Vincent Obi", title: "Ezeudo", phone: "08035530145" },
        { no: 22, name: "Chief/Engr. Okey Amobi", title: "Oba", phone: "08137227420" },
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

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-[50vh] bg-cover bg-center" style={{ backgroundImage: `url(${HeroImage})` }}>
        <div className="absolute inset-0 bg-gradient-to-br from-[#4A72C033] to-black via-silver"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-white text-center px-4">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl md:text-6xl font-bold">Ogidi Leadership</h1>
            <p className="mt-4 text-xl">Meet our distinguished executives and council members</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {executiveGroups.map((group, index) => (
          <section key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 bg-gray-100 border-b">
              <h2 className="text-2xl font-bold text-gray-800">{group.title}</h2>
              {group.subtitle && <p className="text-gray-600 mt-2">{group.subtitle}</p>}
            </div>
            
            <div className="p-6">
              {group.title.includes("Igwe-in-Council") ? (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone No.</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {group.members.map((member, idx) => (
                        <tr key={idx} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{member.no}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{member.name}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{member.title}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 hover:text-blue-800">
                            <a href={`tel:${member.phone}`}>{member.phone}</a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 gap-4">
                  {group.members.map((member, idx) => (
                    <div key={idx} className="bg-gray-50 p-4 rounded-lg border border-gray-200 hover:border-amber-600 transition-colors">
                      <h3 className="font-bold text-lg text-gray-800">{member.position}</h3>
                      <p className="text-gray-700">{member.name}</p>
                      {member.phone && (
                        <p className="mt-2">
                          <a href={`tel:${member.phone}`} className="text-blue-600 hover:text-blue-800">
                            {member.phone}
                          </a>
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        ))}
      </div>

      <Footer />
    </div>
  )
}

export default ExecutivesPage