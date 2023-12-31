import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
interface Props {
  title: string;
  description: string;
  link?: string;
  linktitle: string;
}

const NoResults = ({ title, description, link, linktitle }: Props) => {
  return (
    <div className="mt-10 flex w-full flex-col items-center justify-center">
      <Image
        src="/assets/images/light-illustration.png"
        alt="light-illustration"
        width={270}
        height={200}
        className="block object-contain dark:hidden"
      />
      <Image
        src="/assets/images/dark-illustration.png"
        alt="dark-illustration"
        width={270}
        height={200}
        className="hidden object-contain dark:flex"
      />
      <h2 className="h2-bold text-dark200_light900 mt-8">{title}</h2>
      <p className="body-regular text-dark500_light700 my-3.5 mt-4 max-w-sm text-center">
        {description}
      </p>
      <Button className="mt-4 rounded-[10px] bg-primary-500 px-4 py-3 text-light-900 hover:bg-pink-800">
        {linktitle}
      </Button>
    </div>
  );
};

export default NoResults;
