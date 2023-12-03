import QuestionCard from "@/components/Cards/QuestionCard";
import HomeFilters from "@/components/Home/HomeFilters";
import Filter from "@/components/shared/Filter";
import NoResults from "@/components/shared/NoResults";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import Link from "next/link";
const questions = [
  {
    id: "1",
    title:
      "Best practices for data fetching in a Next.js application with Server-Side Rendering (SSR)?",
    tags: [
      { id: "1", name: "React.js" },
      { id: "2", name: "Javascript" },
    ],
    author: "John Smith",
    upvotes: 1335,
    views: 150057676,
    answers: [{value:2345443}],
    createdAt: new Date("2023-05-15T12:30:00"),
  },
  {
    id: "2",
    title: "Javascript is the best programming language",
    tags: [
      { id: "1", name: "Node.js" },
      { id: "2", name: "SQL" },
    ],
    author: "David Brown",
    upvotes: 2465,
    views: 258906898,
    answers: [{value:43455}],
    createdAt: new Date("2021-05-15T12:30:00"),
  },
];

export default function Home() {
  return (
    <>
      <div className="flex w-full justify-between max-sm:flex-col-reverse sm:items-center ">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link href="/ask-question" className="flex justify-end">
          <Button className="paragraph-medium primary-gradient  w-[173px]   gap-[10px] rounded-[8px] px-3 py-4 text-center text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          placeholder="Search for questions..."
          route="/"
          imgSrc="/assets/icons/search.svg"
          width={24}
          height={24}
          otherClasses="flex-1"
        />
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          responsiveClass=" hidden max-md:flex"
        />
      </div>
      <HomeFilters filters={HomePageFilters} />
      <div className="mt-10">
        {questions.length > 0 ? (
          questions.map((question) => {
            return (
              <QuestionCard
                key={question.id}
                id={question.id}
                title={question.title}
                tags={question.tags}
                author={question.author}
                upvotes={question.upvotes} 
                answers={question.answers}
                createdAt={question.createdAt}
                views={question.views}
              />
            );
          })
        ) : (
          <NoResults
            title="There is no questions to show"
            description="Be the first to break silence! Ask a question and stand out in the
          crowd, Get involved in learning process effectively."
            link="/ask-question"
            linktitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
}
