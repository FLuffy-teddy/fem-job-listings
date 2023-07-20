"use client";

import Image from "next/image";
import data from "../json/data.json";
import { useState } from "react";

const jobListings = data;

const filterColor = "bg-filter";
const fontColor = "text-primary font-bold";
const borderColor = "border-background";
const buttonColor = "bg-primary";

const bgColor = "bg-background";

export default function Home() {
  const [jobFilter, setJobFilter] = useState<string[]>([]);

  function buildOutFilter() {
    //run through filters and return job listings based on filters selected
    //if no filters are selected return all jobs
    return jobListings.map((jobListing) => (
      <li
        className="bg-white my-4 p-4 shadow-lg border-2 border-white rounded-md"
        key={jobListing.id}
      >
        <div className="flex justify-between">
          <div className="flex">
            <Image
              className="p-2"
              src={jobListing.logo}
              alt={jobListing.company}
              width={90}
              height={20}
            />
            <div className="flex flex-col">
              <div className="flex items-center">
                <h2 className={`${fontColor} font-black`}>
                  {jobListing.company}
                </h2>
                {jobListing.new ? (
                  <h2 className="bg-cyan-900 border-full py-1 px-2 text-white rounded-full mx-2">
                    New
                  </h2>
                ) : null}
                {jobListing.featured ? (
                  <h2 className="bg-slate-900 border-full py-1 px-2 text-white rounded-full">
                    Featured
                  </h2>
                ) : null}
              </div>
              <h3 className="text-black font-bold text-lg">
                {jobListing.position}
              </h3>
              <div className="flex justify-between text-slate-500 text-md">
                <p>{jobListing.postedAt}</p>
                <p>{jobListing.contract}</p>
                <p>{jobListing.location}</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between h-fit">
            <button
              className={`${fontColor} ${filterColor} border-1 border-cyan-900 p-2 mx-1`}
              data-attribute={jobListing.role}
              onClick={jobFilterEvent}
            >
              {jobListing.role}
            </button>
            <button
              className={`${fontColor} ${filterColor} border-1 p-2 mx-1`}
              data-attribute={jobListing.level}
              onClick={jobFilterEvent}
            >
              {jobListing.level}
            </button>
            {jobListing.tools.map((tool, i) => (
              <button
                key={i}
                className={`${fontColor} ${filterColor} border-1 p-2 mx-1`}
                data-attribute={tool}
                onClick={jobFilterEvent}
              >
                {tool}
              </button>
            ))}
            {jobListing.languages.map((language, i) => (
              <button
                key={i}
                className={`${fontColor} ${filterColor} border-1 p-2 mx-1`}
                data-attribute={language}
                onClick={jobFilterEvent}
              >
                {language}
              </button>
            ))}
          </div>
        </div>
      </li>
    ));
  }
  const jobFilterEvent = (event: any) => {
    const jobAttribute = String(event.target.getAttribute("data-attribute"));

    //if filter is already active prevent filter from attaching

    const isFound = jobFilter.some((element) => {
      if (element === jobAttribute) {
        return true;
      }
      return false;
    });

    if (!isFound) {
      setJobFilter([...jobFilter, jobAttribute]);
    }
  };

  const removeJobFilter = (event: any) => {
    var sibling = event.target.previousElementSibling;
    const jobAttribute = String(sibling.getAttribute("data-attribute"));

    setJobFilter(
      jobFilter.filter((newFilterType) => newFilterType !== jobAttribute)
    );
  };
  function resetJobFilter() {
    setJobFilter(
      jobFilter.filter((newFilterType) => newFilterType !== newFilterType)
    );
  }
  return (
    <main className={`min-h-full ${bgColor}`}>
      <header className="min-h-8 bg-cyan-900">
        <Image
          src="/bg-header-desktop.svg"
          alt="header image"
          width={2000}
          height={150}
        />
      </header>
      <ul className="max-w-6xl m-auto py-8 relative">
        {jobFilter.length > 0 ? (
          <div className="absolute w-full px-4 py-8 -top-16 bg-white shadow-lg border-2 border-white rounded-md flex align-center flex justify-between">
            <ul className="flex">
              {jobFilter.map((filter, i) => (
                <div className="flex px-2" key={i}>
                  <li
                    className={`${fontColor} ${filterColor} border-1 border-cyan-900 p-2 rounded-md`}
                    data-attribute={filter}
                  >
                    {filter}
                  </li>
                  <button
                    className={`h-full w-1/4 bg-cyan-900 border-full px-2 text-white rounded-sm ${buttonColor}`}
                    onClick={removeJobFilter}
                  >
                    X
                  </button>
                </div>
              ))}
            </ul>
            <button className={`${fontColor}`} onClick={resetJobFilter}>
              Clear
            </button>
          </div>
        ) : (
          buildOutFilter()
        )}
      </ul>
    </main>
  );
}
