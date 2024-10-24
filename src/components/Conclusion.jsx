import conclusionSvg from "../assets/conclusion.svg";
import SectionTitle from "./SectionTitle";

const Experiment = () => {
  return (
    <section className="py-20 bg-white" id="conclusion">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <article>
          <SectionTitle text="conclusion" />
          <p className="text-slate-600 mt-8 leading-loose">
            In this study, adolescents indicated that certain characteristics of
            e-cigarette marketing influenced them to buy and use e-cigarettes.
            These factors include:
          </p>
          <ul className="list-disc list-inside text-slate-600 mt-4 space-y-2 pl-8">
            <li>Product placement</li>
            <li>Free product samples</li>
            <li>Price incentives</li>
            <li>Continuous pro-e-cigarette marketing</li>
          </ul>
        </article>
        <img src={conclusionSvg} className="w-full h-64" />
      </div>
    </section>
  );
};

export default Experiment;
