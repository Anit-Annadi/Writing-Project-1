import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

const TestimonialCard = ({ url, img, github, title, text }) => {
  return (
    <article className="group h-72 w-72 [perspective:1000px]">
      <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front Face */}
        <div className="absolute inset-0 h-full w-full rounded-xl [backface-visibility:hidden] content-center">
          <img
            className="h-48 w-48 mx-auto object-cover rounded-full"
            src={img}
          />
        </div>
        {/* Back Face */}
        <div className="absolute inset-0 h-full w-full rounded-xl bg-white/80 px-6 text-center text-slate-700 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="flex min-h-full flex-col items-center justify-center">
            <h2 className="text-xl font-bold mb-2">Testimonial</h2>
            <p className="text-base text-pretty text-center mb-2">{text}</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default TestimonialCard;
