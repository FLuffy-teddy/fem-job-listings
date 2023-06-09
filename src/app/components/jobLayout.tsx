import Image from "next/image";
import data from "../../json/data.json";

const jobListings = data;

export default function JobLayout() {
  return (
    <ul className="max-w-6xl m-auto py-8">
      {jobListings.map((jobListing) => (
        <li className="my-2 p-4 shadow-lg" key={jobListing.id}>
          <div className="flex justify-between">
            <div className="flex">
              <Image
                src={jobListing.logo}
                alt={jobListing.company}
                width={50}
                height={20}
              />
              <div className="flex flex-col">
                <div className="flex">
                  <h2 className="text-cyan-900">{jobListing.company}</h2>
                  {jobListing.new ? (
                    <h2 className="bg-cyan-900 border-full p-2">New</h2>
                  ) : null}
                  {jobListing.featured ? (
                    <h2 className="bg-black-900 border-full p-2">Featured</h2>
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
              <h4 className="bg-cyan-500 text-cyan-900 border-1 border-cyan-900 p-2 mx-1">
                {jobListing.role}
              </h4>
              <h4 className="bg-cyan-500 text-cyan-900 border-1 border-cyan-900 p-2 mx-1">
                {jobListing.position}
              </h4>
              <h4 className="bg-cyan-500 text-cyan-900 border-1 border-cyan-900 p-2 mx-1">
                {jobListing.languages}
              </h4>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
