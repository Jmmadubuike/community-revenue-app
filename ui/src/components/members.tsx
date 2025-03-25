import type React from "react"
import EmakaOnyido from "../assets/members/emeka_onyido.jpg"
import Obiokoye from "../assets/members/obi-okoye.jpg"
import Omelora from "../assets/members/omelora.jpg"
import Ugolue from "../assets/members/ugolue.jpg"
import Ubum from "../assets/members/obum.jpg"
import Ibezim from "../assets/members/ibezim.jpg"
import Ezeugo from "../assets/members/ezeugo.jpg"
import Ide from "../assets/members/ide.jpg"
import Akadike from "../assets/members/akadike.jpg"
import Achebe from "../assets/members/achebe.jpg"
import Ndika from "../assets/members/ndika.jpg"
import Ngozi from "../assets/members/ngozi.jpg"
import Chekwube from "../assets/members/checkwube.jpg"
import Ezeudo from "../assets/members/ezeudo.jpg"
import Ochendu from "../assets/members/ochendu.jpg"
import ObaEgo from "../assets/members/ObaEgo.jpg"
import Okafor from "../assets/members/okafor.jpg"
import Anthony from "../assets/members/anthony.jpg"

















// Define the type for executive members
type ExecutiveMember = {
  name: string
  title: string
  position: string
  location: string
  image: string
}

// Create an array of executive members data
const executiveMembers: ExecutiveMember[] = [
  {
    name: "Dr. Emeka Onyido",
    title: "High Chief",
    position: "Chairman, Operation",
    location: "Ohuozoma",
    image: EmakaOnyido,
  },
  {
    name: "Rotuu Odi-Okoye",
    title: "High Chief Barr.",
    position: "Chairman, Operation",
    location: "Ogboli",
    image: Obiokoye
  },
  {
    name: "Stephen  Ibegbu (omelora)",
    title: "High Chief",
    position: "Chairman, Admin",
    location: "Ohuocha",
    image: Omelora
  },
  {
    name: "Chike Maduagwuna, (Ugolue)",
    title: "Chief Sir",
    position: "Secretary",
    location: "Ilogwuta",
    image:Ugolue
  },
  {
    name: "Chekwube Okwuonu",
    title: "Elder",
    position: "Administrative Secretary",
    location: "",
    image: Chekwube
  },
  {
    name: "Okey Amobi. (ObaEgo)",
    title: "Chief(Engr)",
    position: "Member",
    location: "",
    image: ObaEgo
  },


  {
    name: "Dr. Tony Meka",
    title: "High Chief",
    position: "Member",
    location: "Ohuocha",
    image: Ochendu
  },

  {
    name: "Obum Osakwe Ph.D",
    title: "High Chief Barr.",
    position: "Member",
    location: "",
    image: Ubum,
  },
  {
    name: "Ben. Otuonweke",
    title: "High Chief",
    position: "Member",
    location: "Ohuocha Ph.D",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Cletus Onwuzulike (Ide)",
    title: "High Chief",
    position: "Member",
    location: "",
    image: Ide,
  },
  {
    name: "Uche Ibezim (Ezechikwadolu)",
    title: "Chief Barr.",
    position: "Member",
    location: "Ezinihitteaboro Nke Ngu Na Abo",
    image: Ibezim,
  },
  {
    name: "Obinna Mbaukwu",
    title: "Chief",
    position: "Member",
    location: "Ilogwuta",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Chuka Onwuzulike",
    title: "High Chief",
    position: "Member",
    location: "Ohuocha",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Chief Obiora Mbaekwe (Ezeugo)",
    title: "",
    position: "Member",
    location: "",
    image: Ezeugo,
  },
  {
    name: " Humphrey Udemezue (Akadike)",
    title: "Chief Engr.",
    position: "Member",
    location: "Umueri",
    image: Akadike
  },
  {
    name: "Ubosi Achalla",
    title: "Chief",
    position: "Member",
    location: "Ohuofu",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Chief Udoji Achebe   (Okosisi)",
    title: "Chief",
    position: "Member",
    location: "",
    image: Achebe
  },

  {
    name: " Chris Obi Okafor",
    title: "Hon",
    position: "Member",
    location: "",
    image: Okafor
  },
  {
    name: "Vincent Obi  (Ezeudo)",
    title: "Chief",
    position: "Member",
    location: "Iruofu Ogidi",
    image: Ezeudo,
  },
  {
    name: "Ngozi Oligboh (Ada Ebeondi)",
    title: "Mrs",
    position: "Member",
    location: "",
    image: Ngozi
  },
  {
    name: "Obora Ndika  (Nnanyelugo)",
    title: "Chief",
    position: "Member",
    location: "Umunwagana",
    image: Ndika
  },
  {
    name: "Obechukwu Amadi",
    title: "Chief",
    position: "Member",
    location: "Odoli",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Ubakanma Anthony ( People)",
    title: "Comrade  Chief",
    position: "Member",
    location: "Umueri",
    image: Anthony
  },
]

const ExecutiveMembers: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">
        Executive Members Of The Ogidi Union Advancement Forum
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
        {executiveMembers.map((member, index) => (
          <div key={index} className="flex border-b pb-4">
            <div className="flex-shrink-0 mr-4">
              <div className="rounded-full overflow-hidden w-16 h-16 border">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <p className="font-medium text-sm">
                {member.title} {member.name}
              </p>
              <p className="text-sm text-gray-600">{member.location}</p>
              <p className="text-sm text-red-500 font-medium mt-1">{member.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ExecutiveMembers

