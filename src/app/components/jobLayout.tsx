import Image from "next/image";
import data from "../../json/data.json";

const jobListings = data;

interface isNewInterface {
  newJob: boolean;
}
interface isFeaturedInterface {
  Featured: boolean;
}

function IsNew({ newJob }: isNewInterface) {
  if (!newJob) {
    return null;
  }
  return <h2 className="bg-cyan-900 border-full p-2">{newJob}</h2>;
}
function IsFeatured({ Featured }: isFeaturedInterface) {
  if (!Featured) {
    return null;
  }
  return <h2 className="bg-black-900 border-full p-2">{Featured}</h2>;
}

export default function JobLayout() {
  return (
    <ul>
      {jobListings.map((jobListing) => (
        <li className="mx-2 p-4 shadow-lg" key={jobListing.id}>
          <div className="flex justify-between">
            <div className="flex">
              <Image
                src={jobListing.logo}
                alt={jobListing.company}
                width={50}
                height={50}
              />
              <div className="flex flex-col">
                <div className="flex">
                  <h2 className="text-cyan-900">{jobListing.company}</h2>
                  <IsNew newJob={jobListing.new} />
                  <IsFeatured Featured={jobListing.featured} />
                </div>
                <h3 className="text-black font-bold text-lg">
                  {jobListing.position}
                </h3>
                <div className="flex justify-between">
                  <p className="text-slate-500 text-md">
                    {jobListing.postedAt}
                  </p>
                  <p className="text-slate-500 text-md">
                    {jobListing.contract}
                  </p>
                  <p className="text-slate-500 text-md">
                    {jobListing.location}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <h4 className="bg-cyan-500 text-cyan-900 border-1 border-cyan-900 p-2">
                {jobListing.role}
              </h4>
              <h4 className="bg-cyan-500 text-cyan-900 border-1 border-cyan-900 p-2">
                {jobListing.position}
              </h4>
              {jobListing.languages}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
