import { useState } from "react";
import data from "../json/data.json";
import headerImg from "./assets/images/bg-header-desktop.svg";
import headermobile from "./assets/images/bg-header-mobile.svg";
import JobsComponent from "../app/components/jobs";
import Filter from "../app/components/filter";

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

function App() {
  const [jobs, setJobs] = useState<jobType[]>(data);
  const [filterText, setFilterText] = useState<string[]>([]);
  function handleFilter(basedOn: string) {
    setFilterText([...filterText, basedOn]);
    const d = [...jobs].filter((item) =>
      [item.role, item.level, ...item.tools, ...item.languages].includes(
        basedOn
      )
    );
    setJobs(d);
  }

  return (
    <>
      <header className="mb-10 w-full bg-[#5ba4a4]">
        <img
          src={window.innerWidth > 750 ? headerImg : headermobile}
          alt="header"
          className="w-full h-2/3"
        />
      </header>
      <main className="px-6">
        <Filter
          filterText={filterText}
          setFilterText={setFilterText}
          setJobs={setJobs}
        />
        <article className="flex flex-col gap-10 md:w-3/4 m-auto">
          <JobsComponent handleFilter={handleFilter} jobs={jobs} />
        </article>
      </main>
    </>
  );
}
