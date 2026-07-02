"use client";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { toast } from "react-toastify";

const Contact = () => {
  return (
    <div className="py-16" id="contact">
      <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div data-aos="fade-right" data-aos-delay="100">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-200">
            Schedule a call with me to see if I can help
          </h1>
          <p className="text-gray-400 mt-6 text-base sm:text-lg">
            Reach out to me today and let’s discuss how I can help you achieve
            your goals.
          </p>
          <div className="mt-7">
            <div className="flex items-center space-x-3 mb-4">
              <BiPhone className="w-9 h-9 text-cyan-300" />
              <p className="text-xl font-bold text-gray-400">+123 456 789</p>
            </div>
            <div className="flex items-center space-x-3 mb-4">
              <BiEnvelope className="w-9 h-9 text-cyan-300" />
              <p className="text-xl font-bold text-gray-400">
                hello@example.com
              </p>
            </div>
            <div className="flex items-center space-x-3 mb-4">
              <BiMap className="w-9 h-9 text-cyan-300" />
              <p className="text-xl font-bold text-gray-400">Atlanta, USA</p>
            </div>
          </div>
          <div className="flex items-center mt-8 space-x-3">
            <div className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center cursor-pointer justify-center flex-col hover:bg-blue-800 transition-all duration-300">
              <FaFacebookF className="text-white w-6 h-6" />
            </div>
            <div className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center cursor-pointer justify-center flex-col hover:bg-red-600 transition-all duration-300">
              <FaYoutube className="text-white w-6 h-6" />
            </div>
            <div className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center cursor-pointer justify-center flex-col hover:bg-sky-400 transition-all duration-300">
              <FaTwitter className="text-white w-6 h-6" />
            </div>
            <div className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center cursor-pointer justify-center flex-col hover:bg-pink-500 transition-all duration-300">
              <FaInstagram className="text-white w-6 h-6" />
            </div>
          </div>
        </div>
        <div
          className="md:p-10 p-5 bg-col-5 rounded-lg space-y-6"
          data-aos="fade-left"
          data-aos-delay="100"
        >
          <input
            type="text"
            placeholder="Name"
            className="px-4 py-3.5 text-white outline-none rounded-md w-full placeholder:text-white/70 bg-col-6"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="px-4 py-3.5 text-white outline-none rounded-md w-full placeholder:text-white/70 bg-col-6"
          />
          <input
            type="text"
            placeholder="Mobile Number"
            className="px-4 py-3.5 text-white outline-none rounded-md w-full placeholder:text-white/70 bg-col-6"
          />
          <textarea
            rows={5}
            placeholder="Your Message"
            className="px-4 py-3.5 text-white outline-none rounded-md w-full placeholder:text-white/70 bg-col-6 resize-none"
          ></textarea>
          <button
            type="submit"
            className="px-12 py-4 bg-blue-950 hover:bg-blue-900 transition-all duration-300 cursor-pointer rounded-full text-white"
            onClick={() => toast("This is just a Test Form")}
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
