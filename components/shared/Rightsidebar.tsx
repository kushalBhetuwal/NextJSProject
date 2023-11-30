import { questions, tags } from "@/constants";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import RenderTag from "./RenderTag";

const Rightsidebar = () => {
  return (
    <section className="background-light900_dark200 light-border custom-scrollbar sticky right-0 top-0 flex h-screen flex-col overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden lg:w-[350px]">
      <div>
        <h3 className="text-dark200_light900 h3-bold">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {questions.map((question) => {
            return (
              <Link
                key={question.id}
                className="flex cursor-pointer items-center justify-between gap-7 "
                href="/question/{question.id}"
              >
                <p className="text-dark500_light700 body-medium ">
                  {question.description}
                </p>
                <Image
                  className="invert-colors"
                  alt="question"
                  src="/assets/icons/chevron-right.svg"
                  width={20}
                  height={20}
                />
              </Link>
            );
          })}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="text-dark200_light900 h3-bold">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {tags.map((tag) => (
            <RenderTag
              key={tag.id}
              id={tag.id}
              name={tag.name}
              number={tag.number}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rightsidebar;
