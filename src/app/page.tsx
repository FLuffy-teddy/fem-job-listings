import Image from "next/image";
import data from "../json/data.json";

const jobListings = data;

function jobLayout() {
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
                  <h2 className="text-cyan-900">
                  {jobListing.company}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default function Home() {
  return (
    <main className="min-h-full">
      <header className="min-h-8 bg-cyan-900">
        <Image
          src="/bg-header-desktop"
          alt="header image"
          width={2000}
          height={150}
        />
      </header>
    </main>
  );
}
