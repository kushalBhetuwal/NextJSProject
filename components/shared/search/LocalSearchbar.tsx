import React from "react";
import { Input } from "@/components/ui/input";
import Image from "next/image";

const LocalSearchbar = () => {
  return (
    <div className="background-light800_darkgradient mt-8 flex gap-4 rounded-[10px] p-2">
      <Image
        src="/assets/icons/search.svg"
        alt="searchlocal"
        width={24}
        height={24}
        className="cursor-pointer"
      />
      <Input
        placeholder="Search for questions ...."
        type="text"
        value=""
        className="no-focus placeholder text-dark400_light700  border-none bg-transparent shadow-none outline-none"
      />
    </div>
  );
};

export default LocalSearchbar;
