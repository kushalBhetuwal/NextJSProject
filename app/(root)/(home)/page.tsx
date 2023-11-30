import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { Button } from "@/components/ui/button";
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
    <LocalSearchbar/>
    Filter
    </>
   
  );
}
