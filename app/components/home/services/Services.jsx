import { serviceCard } from "@/app/assets";
import Image from "next/image";

const Services = () => {
  return (
    <div id="services" className="py-16 scroll-mt-35">
      <h1
        data-aos="fade-up"
        data-aos-delay="50"
        className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white"
      >
        Colleborate with brand <br /> and agencies to create <br /> impactful
        results
      </h1>
      <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mt-20 items-center">
        {serviceCard.map((service) => (
          <div
            key={service.id}
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            data-aos-delay={`${service.id * 100}`}
          >
            <Image
              src={service.icon}
              alt={service.title}
              width={60}
              height={60}
            />
            <h1 className="mt-6 text-xl md:text-2xl font-bold text-gray-200">
              {service.title}
            </h1>
            <p className="mt-6 text-gray-300">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
