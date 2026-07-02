"use client";
import { reviewCard } from "@/app/assets";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const Review = () => {
  return (
    <div id="testimonials" className="scroll-mt-35 py-16">
      <h1
        className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Kind words from satisfied <br />
        <span className="text-cyan-200">clients</span>
      </h1>
      <div className="mt-16 w-[70%] mx-auto">
        <Carousel
          showDots={false}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={4000}
        >
          {reviewCard.map((review) => (
            <div
              className="px-6"
              key={review.id}
              data-aos="flip-right"
              data-aos-delay={review.id * 100}
            >
              <Image
                src={review.image}
                alt={review.name}
                width={60}
                height={60}
                className="rounded-full"
              />
              <p className="mt-6 text-base text-gray-200 font-medium">
                &quot; Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dolorum soluta atque officia minus, omnis cum rerum dolore
                sapiente corporis voluptates ab, necessitatibus, molestias saepe
                suscipit! Non autem sapiente distinctio quos. &quot;
              </p>
              <h1 className="mt-6 text-xl font-bold text-cyan-200">
                {review.name}
              </h1>
              <p className="mt-1 text-white">{review.role}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Review;
