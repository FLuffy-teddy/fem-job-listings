"use client";

import { useState } from "react";
import data from "../json/data.json";
import headerImg from "../../public/bg-header-desktop.svg";
import headermobile from "../../public/bg-header-mobile.svg";
import JobsComponent from "../app/components/jobs";
import Filter from "../app/components/filter";
import Image from "next/image";

export type jobType = {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
};

export default function App() {
  const [jobs, setJobs] = useState<jobType[]>(data);
  const [filterText, setFilterText] = useState<string[]>([]);

  function handleFilter(filterCriteria: string) {
    const isFound = filterText.find((element) => {
      if (element === filterCriteria) {
        return true;
      }
      return false;
    });

    const newFilter = [...jobs].filter((item) =>
      [item.role, item.level, ...item.tools, ...item.languages].includes(
        filterCriteria
      )
    );

    if (!isFound) {
      setFilterText([...filterText, filterCriteria]);
      setJobs(newFilter);
    }
  }

  return (
    <>
      <header className="mb-10 w-full bg-[#5ba4a4]">
        <Image
          src={window.innerWidth > 750 ? headerImg : headermobile}
          height={1000}
          width={2000}
          alt={"Header"}
        />
      </header>
      <main className="px-6 text-base">
        <Filter
          filterText={filterText}
          setFilterText={setFilterText}
          setJobs={setJobs}
        />
        <article className="flex flex-col gap-6 md:w-3/4 m-auto">
          <JobsComponent handleFilter={handleFilter} jobs={jobs} />
        </article>
      </main>
    </>
  );
}
