import React from "react";
import { questions } from "../data";
import SectionTitle from "./SectionTitle";
import QuestionCard from "./QuestionCard";

const Questions = () => {
  return (
    <section className="w-full bg-white">
      <div className="py-20 align-element" id="questions">
        <SectionTitle text="example discussion questions" />
        <div className="py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {questions.map((skill) => {
            return <QuestionCard key={skill.id} {...skill} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Questions;
