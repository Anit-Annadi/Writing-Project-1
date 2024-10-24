import experimentSvg from "../assets/experiment.svg";
import SectionTitle from "./SectionTitle";

const Experiment = () => {
  return (
    <section className="py-20" id="experiment">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={experimentSvg} className="w-full h-64" />
        <article>
          <SectionTitle text="experiment" />
          <p className="text-slate-600 mt-8 leading-loose">
            Many e-cigarette companies gear their marketing towards adolescents.
            To determine the characteristics of this marketing that specifically
            appeal to adolescents, we held eleven 90-minute discussions with
            12-19-year-olds.
          </p>
        </article>
      </div>
    </section>
  );
};

export default Experiment;
