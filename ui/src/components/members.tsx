import type React from "react"

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
    position: "Chairman",
    location: "Ohuozoma",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Rotuu Odi-Okoye",
    title: "High Chief Barr.",
    position: "1st Vice Chairman",
    location: "Ogboli",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Steve Ibegbu",
    title: "High Chief",
    position: "2nd Vice Chairman",
    location: "Ohuocha",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Chike Madugwuna",
    title: "Chief Sir",
    position: "Secretary",
    location: "Ilogwuta",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Chekwube Okwuonu",
    title: "Elder",
    position: "Administrative Secretary",
    location: "",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Dr. Tony Neka",
    title: "High Chief",
    position: "Member",
    location: "Ohuocha",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Ben. Otuonweke",
    title: "High Chief",
    position: "Member",
    location: "Ohuocha Ph.D",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Uzike Ibezim",
    title: "Chief Barr.",
    position: "Member",
    location: "Ezinihitteaboro Nke Ngu Na Abo",
    image: "https://via.placeholder.com/100",
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
    name: "Humphrey Umezinwa",
    title: "Chief Engr.",
    position: "Member",
    location: "Umueri",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Ubosi Achalla",
    title: "Chief",
    position: "Member",
    location: "Ohuofu",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Vincent Obi",
    title: "Chief",
    position: "Member",
    location: "Iruofu Ogidi",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Ngozi Ofoghan",
    title: "Mrs",
    position: "Member",
    location: "Ania Ebenweali",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Obora Ndika",
    title: "Chief",
    position: "Member",
    location: "Umunwagana",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Obechukwu Amadi",
    title: "Chief",
    position: "Member",
    location: "Odoli",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Cornelius Anthony Ugbamna",
    title: "Chief",
    position: "Member",
    location: "Umueri",
    image: "https://via.placeholder.com/100",
  },
]

const ExecutiveMembers: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">
        Executive Members Of The Ogidi Union Advancement Forum
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

