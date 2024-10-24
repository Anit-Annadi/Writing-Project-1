import heroImg from "../assets/hero.svg";
import { LuExternalLink } from "react-icons/lu";

const Hero = () => {
  return (
    <div className="bg-blue-100 py-24">
      <div className="align-element grid md:grid-cols-2 items-center gap-8">
        <article>
          <h1 className="text-7xl font-bold tracking-wider">
            E-Cigarette Marketing
          </h1>
          <p className="mt-4 text-3xl text-slate-700 capitalize tracking-wide">
            and its appealing characteristics to adolescents
          </p>
          {/* <p className="mt-2 text-lg text-slate-700 capitalize tracking-wide">
            turning ideals into interactive reality
          </p> */}
          <div className="flex gap-x-1 mt-1">
            <p className="text-lg text-slate-700 capitalize tracking-wide">
              Learn More
            </p>
            <a
              href="https://www.sciencedirect.com/science/article/pii/S2211335524001840?via%3Dihub"
              target="_blank"
              className="content-center"
            >
              <LuExternalLink className="h-6 w-6 text-slate-500 hover:text-black duration-300" />
            </a>
          </div>
        </article>
        <article className="hidden md:block">
          <img src={heroImg} className="h-80 lg:h-96" />
        </article>
      </div>
    </div>
  );
};

export default Hero;
