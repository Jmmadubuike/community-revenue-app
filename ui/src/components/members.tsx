"use client"

import { useState } from "react"
import { FaUserTie, FaUserCircle } from "react-icons/fa"
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
    name: "Prince Emeka Onyido (Onosoleze)",
    title: "High Chief",
    position: "Chairman",
    location: "Ohuozoma",
    image: EmakaOnyido,
  },
  
  {
    name: "Stephen  Ibegbu (Omelora)",
    title: "High Chief",
    position: "Vice Chairman (Admin)",
    location: "Ohuocha",
    image: Omelora,
  },
  {
    name: "Ifeatu Obi-Okoye (Igiligi)",
    title: "High Chief Sir Barr.",
    position: "Vice Chairman (Operations)",
    location: "Ogboli",
    image: Obiokoye,
  },
  {
    name: "Chike Maduagwuna (Ugolue)",
    title: "Chief Sir",
    position: "Secretary",
    location: "Ilogwuta",
    image: Ugolue,
  },
  {
    name: "Chekwube Okwuonu",
    title: "Elder",
    position: "Administrative Secretary",
    location: "",
    image: Chekwube,
  },
  
  {
    name: "Dr. Tony Meka (Ochendo)",
    title: "High Chief",
    position: "Immediate Past Chairman",
    location: "Ohuocha",
    image: Ochendu,
  },
  {
    name: "Okey Amobi \n (Oba-Ego)",
    title: "Chief (Engr.)",
    position: "Member",
    location: "",
    image: ObaEgo,
  },
  {
    name: "Obum Osakwe Ph.D (Ezeudo)",
    title: "High Chief Barr.",
    position: "Member",
    location: "",
    image: Ubum,
  },
  // {
  //   name: "Ben. Otuonweke",
  //   title: "High Chief",
  //   position: "Member",
  //   location: "Ohuocha Ph.D",
  //   image: "https://via.placeholder.com/100",
  // },
  {
    name: "Cletus Onwuzulike (Ide)",
    title: "High Chief",
    position: "Member",
    location: "",
    image: Ide,
  },
  {
    name: "Uche Ibezim (Ezechikwadolu Nke Nge Na Ogidi)",
    title: "Chief Barr.",
    position: "Member",
    location: "Ezinihitteaboro Nke Ngu Na Abo",
    image: Ibezim,
  },
  // {
  //   name: "Obinna Mbaukwu",
  //   title: "Chief",
  //   position: "Member",
  //   location: "Ilogwuta",
  //   image: "https://via.placeholder.com/100",
  // },
  // {
  //   name: "Chuka Onwuzulike (Ide Ogidi)",
  //   title: "High Chief",
  //   position: "Member",
  //   location: "Ohuocha",
  //   image: "https://via.placeholder.com/100",
  // },
  {
    name: "Chief Obiora Mbaekwe (Ezeugo)",
    title: "",
    position: "Member",
    location: "",
    image: Ezeugo,
  },
  {
    name: "Humphrey Udemezue (Akadike)",
    title: "Chief ( Engr.)",
    position: "Member",
    location: "Umueri",
    image: Akadike,
  },
  // {
  //   name: "Ubosi Achalla",
  //   title: "Chief",
  //   position: "Member",
  //   location: "Ohuofu",
  //   image: "https://via.placeholder.com/100",
  // },
  {
    name: "Chief Udoji Achebe (Okosisi)",
    title: "Chief",
    position: "Member",
    location: "",
    image: Achebe,
  },
  {
    name: " Chris Obi Okafor  (Civilian General/Ogidi Youth President)",
    title: "Hon",
    position: "Member",
    location: "",
    image: Okafor,
  },
  {
    name: "Vincent Obi  (Ezeudo)",
    title: "Chief",
    position: "Member",
    location: "Iruofu Ogidi",
    image: Ezeudo,
  },
  {
    name: "Ngozi Oligboh (Ada Ebeonadi)",
    title: "Mrs",
    position: "Member",
    location: "",
    image: Ngozi,
  },
  
  {
    name: "Obiora Ndika  (Nnanyelugo)",
    title: "Chief",
    position: "Member",
    location: "Umunwagana",
    image: Ndika,
  },
  // {
  //   name: "Obechukwu Amadi",
  //   title: "Chief",
  //   position: "Member",
  //   location: "Odoli",
  //   image: "https://via.placeholder.com/100",
  // },
  {
    name: " Anthony Ubakanma (Ubakanma)",
    title: "Comrade  Chief",
    position: "Member",
    location: "Umueri",
    image: Anthony,
  },
  

  
]

const ExecutiveMembers = () => {
  // State to track which images have failed to load
  const [failedImages, setFailedImages] = useState<Record<number, boolean>>({})

  // Handle image loading error
  const handleImageError = (index: number) => {
    setFailedImages((prev) => ({
      ...prev,
      [index]: true,
    }))
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">
        Executive Members of the Ogidi Union Advancement Forum
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
        {executiveMembers.map((member, index) => (
          <div key={index} className="flex border-b pb-4">
            <div className="flex-shrink-0 mr-4">
              <div className="rounded-full overflow-hidden w-24 h-24 bg-gray-100 flex items-center justify-center">
                {failedImages[index] || member.image === "https://via.placeholder.com/100" ? (
                  // Display avatar icon if image failed to load or is a placeholder
                  <div className="w-full h-full flex items-center justify-center bg-gray-200">
                    {member.title.toLowerCase().includes("mrs") || member.name.toLowerCase().includes("ngozi") ? (
                      <FaUserCircle size={60} className="text-gray-500" />
                    ) : (
                      <FaUserTie size={60} className="text-gray-500" />
                    )}
                  </div>
                ) : (
                  // Try to load the actual image
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-contain"
                    onError={() => handleImageError(index)}
                  />
                )}
              </div>
            </div>
            <div>
              <p className="text-sm font-bold">
                {member.title} {member.name}
              </p>
              <p className="text-sm text-red-500 font-medium mt-1">{member.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ExecutiveMembers

