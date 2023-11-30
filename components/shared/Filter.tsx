import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import React from "react";
interface Props {
  filters: {
    name: string;
    value: string;
  }[];
  otherClasses?: string;
  responsiveClass?: string;
}

const Filter = ({ filters, otherClasses, responsiveClass }: Props) => {
  return (
    <div className={`${responsiveClass}`}>
      <Select>
        <SelectTrigger
          className={`${otherClasses}  background-light800_dark300 light-border text-dark500_light700 rounded-[10px] border-none px-5 shadow-none outline-none`}
        >
          <div className="line-clamp-1 flex-1 text-left">
            <SelectValue placeholder="Select a Filter" />
            <SelectContent>
              {filters.map((filter) => {
                return (
                  <SelectItem
                    key={filter.value}
                    value={filter.value}
                    className="text-dark500_light700"
                  >
                    {filter.name}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </div>
        </SelectTrigger>
      </Select>
    </div>
  );
};

export default Filter;
