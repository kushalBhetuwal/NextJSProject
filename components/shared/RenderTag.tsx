import React from "react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { tag } from "@/types";

const RenderTag = ({ id, name, number }: tag) => {
  return (
    <Link href="/id" key={id} className="flex justify-between gap-2">
      <Badge className="subtle-medium background-light800_dark300 text-light400_light500 rounded-md border-none px-4 py-2 uppercase">
        {name}
      </Badge>
      <p className="small-medium text-dark500_light700">{number}</p>
    </Link>
  );
};

export default RenderTag;
