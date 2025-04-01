import { FaArrowRightLong } from "react-icons/fa6";

const Card = ({ title, description }) => {
  return (
    <div className="group text-white border-2 border-white rounded-3xl px-4 sm:px-6 md:px-8 pt-6 sm:pt-8 md:pt-10 pb-5 text-left transition-all duration-300">
      <h1 className="text-3xl sm:text-4xl font-medium">{title}</h1>
      <p className="mt-3 sm:mt-4 w-full text-lg sm:text-xl">{description}</p>
      
      <button className="flex items-center gap-3 sm:gap-5 mt-5 sm:mt-6 border px-4 sm:px-5 py-2 sm:py-3 border-white text-white rounded-3xl transition-all duration-300 group-hover:bg-black group-hover:text-white">
        <span className="text-xl sm:text-2xl">Read More</span>
        <div className="p-1 sm:p-2 border border-white rounded-3xl text-center transition-transform duration-300 group-hover:rotate-90 group-hover:border-amber-300">
          <FaArrowRightLong />
        </div>
      </button>
    </div>
  );
};

export default Card;
