import { services } from "@/utils/data";

const Services = () => {
  return (
    <div className="px-24 pt-20">
      <h1 className="text-center text-3xl font-semibold">
        We Built Our Business on Customer Services
      </h1>
      <div className="mt-16 flex justify-between gap-10">
        {services.map(({ id, img, title, text }) => (
          <div key={id} className="shadow-lg">
            <img src={img} className="w-[500px] h-[200px]" alt="career" />
            <h3 className="mt-4 font-semibold px-2">{title}</h3>
            <p className="mt-2 text-gray-60 px-2 pb-2">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
