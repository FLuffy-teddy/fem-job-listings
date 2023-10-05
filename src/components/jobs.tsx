import { LogoArray } from "./imagesarray";
import { jobType } from "../app/page";
import Image from "next/image";

type propsType = {
  jobs: jobType[];
  handleFilter: (basedOn: string) => void;
};

export default function JobsComponent({ jobs, handleFilter }: propsType) {
  return (
    <>
      {jobs.map((job) => (
        <div
          key={job.id}
          className="flex md:flex-row flex-col gap-6 bg-white justify-between md:items-center shadow-xl py-4 px-6 shadow-filter"
        >
          <div className="flex md:flex-row relative flex-col justify-center md:items-center gap-4 border-b pb-4 md:border-none">
            <section className="absolute top-0 -translate-y-1/2 md:relative md:top-12">
              <Image
                src={LogoArray[job.id - 1]}
                width={50}
                height={50}
                alt="Company Logo"
              />
            </section>
            <section className="mt-12 flex flex-col gap-2">
              <div className="flex gap-3 items-center">
                <span className="text-primary font-bold">{job.company}</span>
                {job.new ? (
                  <span className="bg-primary text-white p-2 rounded-2xl leading-none">
                    NEW!
                  </span>
                ) : (
                  <></>
                )}
                {job.featured ? (
                  <span className="bg-tertiary rounded-2xl text-white p-2 leading-none">
                    FEATURED
                  </span>
                ) : (
                  <></>
                )}
              </div>
              <div className="font-black hover:text-primary hover:cursor-pointer">
                {job.position}
              </div>
              <div className="flex gap-3 items-center text-slate-400">
                <span>{job.postedAt}</span>.<span>{job.contract}</span>.
                <span>{job.location}</span>
              </div>
            </section>
          </div>

          <section className="flex flex-wrap gap-4">
            {[job.role, job.level, ...job.tools, ...job.languages].map(
              (item, i) => (
                <div
                  key={i}
                  onClick={() => handleFilter(item)}
                  className="bg-filter p-2 rounded cursor-pointer text-primary hover:text-white hover:bg-primary"
                >
                  {item}
                </div>
              )
            )}
          </section>
        </div>
      ))}
    </>
  );
}
