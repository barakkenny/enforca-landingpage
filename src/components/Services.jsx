import { services } from "@/utils/data";

const Services = () => {
  return (
    <div className="px-24 pt-20 lg:px-16 xl:px-24 md:px-12 sm:px-16 xxs:px-4 xs:px-8">
      <h1 className="text-center xxs:text-lg xs:text-2xl sm:text-3xl font-semibold">
        We Built Our Business on Customer Services
      </h1>
      <div className="mt-16 flex xxs:justify-center md:justify-between xxs:flex-wrap md:flex-nowrap gap-10">
        {services.map(({ id, img, title, text }) => (
          <div key={id} className="shadow-lg xs:w-[90%] sm:w-[70%]">
            <img src={img} className="w-[500px] h-[200px]" alt="career" />
            <h3 className="mt-4 font-semibold px-2">{title}</h3>
            <p className="sm:w-[80%] mt-2 text-gray-60 px-2 pb-2">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
