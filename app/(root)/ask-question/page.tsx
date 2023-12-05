import Question from "@/components/forms/Question";
import React from "react";

const page = () => {
  return (
    <div>
      <h1 className="text-dark100_light900 h1-bold">Ask a Question</h1>
      <div className="mt-9">
        <Question />
      </div>
    </div>
  );
};

export default page;
