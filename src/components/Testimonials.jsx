import TestimonialCard from "./TestimonialCard";
import { testimonials } from "../data";
import SectionTitle from "./SectionTitle";

const Testimonials = () => {
  return (
    <section className="py-20 align-element" id="testimonials">
      <SectionTitle text="testimonials" />
      <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-4 justify-items-center mx-auto w-full max-w-7xl">
        {testimonials.map((project) => {
          return <TestimonialCard key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
};

export default Testimonials;
