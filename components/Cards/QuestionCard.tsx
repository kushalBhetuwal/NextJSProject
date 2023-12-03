import React from "react";
import RenderTag from "../shared/RenderTag";
import Link from "next/link";
import Metric from "../shared/Metric";
import { formatLargeNumber, getTimestamp } from "@/lib/utils";
interface Props {
  id: string;
  title: string;
  tags: {
    id: string;
    name: string;
  }[];
  author: string;
  upvotes: number;
  views: number;
  answers: Array<{ value: number }>;
  createdAt: Date;
}
const QuestionCard = ({
  id,
  title,
  tags,
  author,
  upvotes,
  views,
  answers,
  createdAt,
}: Props) => {
  return (
    <div className="card-wrapper rounded-[10px] p-9 sm:px-11">
      <div className="flex">
        <div className="text-dark400_light700 line-clamp-1 flex flex-col max-sm:line-clamp-1">
          {title}
          <Link href={`question/${id}`}></Link>
        </div>
        {/* if signed in make edit button */}
      </div>
      <div className="mt-3.5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <RenderTag key={tag.id} id={tag.id} name={tag.name} />
        ))}
      </div>
      <div className="flex-between text-dark400_light700 mt-6 w-full flex-wrap gap-3">
        <Metric
          imgurl="/assets/images/avatar.png"
          alt="author"
          value={author}
          title={`|asked ${getTimestamp(createdAt)}`}
          href={`/profile/${id}`}
          textstyle="body-medium text-dark400_light700"
        />
        <div className="flex  gap-3">
          <Metric
            imgurl="/assets/icons/like.svg"
            alt="votes"
            value={formatLargeNumber(upvotes)}
            title="Votes"
            textstyle="small-medium text-dark400_light800"
          />
          <Metric
            imgurl="/assets/icons/message.svg"
            alt="answers"
            value={formatLargeNumber(answers[0].value)}
            title="Answers"
            textstyle="small-medium text-dark400_light800"
          />
          <Metric
            imgurl="/assets/icons/eye.svg"
            alt="eye"
            value={formatLargeNumber(views)}
            title="Views"
            textstyle="small-medium text-dark400_light800"
          />
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
