import HomeFilters from "@/components/Home/HomeFilters";
import Filter from "@/components/shared/Filter";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import Link from "next/link";

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
        <Filter filters={HomePageFilters} otherClasses="min-h-[56px] sm:min-w-[170px]" responsiveClass=" hidden max-md:flex" />
      </div>
      <HomeFilters filters={HomePageFilters}/>
    </>
  );
}
