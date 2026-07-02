import { blogCard } from "@/app/assets";
import Image from "next/image";

const Blog = () => {
  return (
    <div className="py-16">
      {" "}
      <h1
        className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        My latest <span className="text-cyan-200"> Blogs</span>
      </h1>
      <div className="w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-3 xl:gap-4 gap-10 items-center mt-16">
        {blogCard.map((blog) => (
          <div
            key={blog.id}
            data-aos="fade-right"
            data-aos-delay={blog.id * 100}
          >
            <Image
              src={blog.image}
              alt={blog.title}
              width={500}
              height={500}
              className="object-cover w-full"
            />
            <p className="mt-4 text-gray-500 font-medium text-base sm:text-lg">
              {blog.date}
            </p>
            <h1 className="mt-5 text-lg sm:text-xl font-bold text-white hover:underline hover:text-cyan-200 cursor-pointer transition-all duration-300">
              {blog.title}
            </h1>
            <ul className="mt-4 flex gap-2 items-center">
              {blog.tag.map((tag, i) => (
                <li
                  key={i}
                  className="px-4 py-1.5 bg-blue-950 text-white text-sm sm:text-base font-bold rounded-full"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
