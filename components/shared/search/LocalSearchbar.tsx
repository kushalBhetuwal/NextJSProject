import React from "react";
import { Input } from "@/components/ui/input";
import Image from "next/image";

 interface customInputs{
    placeholder:string;
    route:string;
    imgSrc:string;
    width:number;
    height:number;
    otherClasses:string;
}

const LocalSearchbar = ({placeholder, imgSrc, width, height, otherClasses}:customInputs) => {
  return (
    <div className={`background-light800_darkgradient  flex gap-4 rounded-[10px] p-2 ${otherClasses}`}>
      <Image
        src={imgSrc}
        alt="searchlocal"
        width={width}
        height={height}
        className="cursor-pointer"
      />
      <Input
        placeholder={placeholder}
        type="text"
        value=""
        className="no-focus placeholder background-light800_darkgradient  border-none bg-transparent shadow-none outline-none"
      />
    </div>
  );
};

export default LocalSearchbar;
