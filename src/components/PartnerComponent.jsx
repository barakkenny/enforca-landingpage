// import { partners } from "@/utils/data"

const PartnerComponent = () => {
     const partners = [
        {id: 1, img: '/robot.png', alt:'robot'},
        {id: 2, img: '/robot.png', alt:'robot'},
        {id: 3, img: '/robot.png', alt:'robot'},
        {id: 4, img: '/robot.png', alt:'robot'},
        {id: 5, img: '/robot.png', alt:'robot'},
    ]
 
  return (
    <div className="px-24 py-12">
      <h1 className="text-center text-black text-3xl font-semibold">Trusted By Professionals</h1>
      <div className="mt-4">
        {partners.map((partner) => {
            <div key={partner.id}>
            <img src={partner.img} alt={partner.alt} />
            </div>
        })}
        </div>
    </div>
  )
}

export default PartnerComponent
