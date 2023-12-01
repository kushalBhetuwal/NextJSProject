"use client";
import React, { MouseEvent, useState } from "react";
import { Button } from "../ui/button";

interface Props {
  filters: {
    name: string;
    value: string;
  }[];
}

const HomeFilters = ({ filters }: Props) => {
  const [active, setActive] = useState("newest");
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    setActive(e.currentTarget.value);
  };
  // can be also done in other way
  // const handleClick = (value:string)=>setActive(value);

  return (
    <div className="mt-10 hidden gap-3 md:flex">
      {filters.map((item) => {
        return (
          <Button
            key={item.value}
            value={item.value}
            onClick={(e) => handleClick(e)}
            // onClick ={()=>handleClick(item.value)}
            className={`${
              active === item.value
                ? "bg-light-200 text-primary-500 dark:bg-dark-400 dark:text-primary-500"
                : "bg-light-800 text-light-500  dark:bg-dark-300 dark:text-light-500"
            }background-light800_dark300 ml-4 rounded-[8px] px-6 py-4 shadow-none`}
          >
            {item.name}
          </Button>
        );
      })}
    </div>
  );
};

export default HomeFilters;
