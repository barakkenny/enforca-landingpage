import { services } from "@/utils/data"

const Services = () => {
  return (
    <div className="px-24 pt-14">
      <h1 className="text-center text-3xl font-semibold">We Built Our Business on Customer Services</h1>
    <div className="mt-14 flex items-center justify-between gap-10">
        {services.map(({id, img, title, text}) => (
            <div key={id}>
                <img src={img} alt='career'/>
                <h3 className='mt-4 font-semibold'>{title}</h3>
                <p className="mt-2 text-gray-600">{text}</p>
            </div>
        ))}
    </div>
    </div>
  )
}

export default Services
