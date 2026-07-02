import { assets, projectCard } from "@/app/assets";
import Image from "next/image";

const Projects = () => {
  return (
    <div className="py-16 scroll-mt-35" id="works">
      <h1
        className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        A small selection of recent <br />
        <span className="text-cyan-200">projects</span>
      </h1>
      <div className="w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
        {projectCard.map((project) => (
          <div
            key={project.id}
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay={project.id * 100}
          >
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={600}
              className="rounded-lg w-full"
            />
            <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
              {project.title}
            </h1>
            <p className="mt-2 font-medium text-white/80">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
