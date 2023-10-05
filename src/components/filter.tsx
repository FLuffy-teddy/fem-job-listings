import { jobType } from "../app/page";
import data from "../json/data.json";
import RemoveIcon from "../../public/icon-remove.svg";
import Image from "next/image";

type propsTypeFilter = {
  filterText: string[];
  setFilterText: React.Dispatch<React.SetStateAction<string[]>>;
  setJobs: React.Dispatch<React.SetStateAction<jobType[]>>;
};

export default function Filter({
  filterText,
  setFilterText,
  setJobs,
}: propsTypeFilter) {
  function ClearFilter() {
    setFilterText([]);
    setJobs(data);
  }
  function removeSelectedFilter(selected: string) {
    const newFilter = filterText.filter((i) => i !== selected);
    setFilterText(newFilter);
    const co = data.filter((arr1) => {
      if (
        newFilter.every((element) =>
          [arr1.role, arr1.level, ...arr1.tools, ...arr1.languages].includes(
            element
          )
        )
      )
        return true;
    });
    setJobs(co);
  }
  return (
    <>
      {filterText.length > 0 && (
        <section className="flex md:w-3/4 justify-between m-auto gap-3 rounded items-center -translate-y-full bg-white p-4 shadow-xl">
          <div className="flex flex-wrap gap-3 px-4">
            {filterText.map((f) => (
              <div key={f} className="flex items-center ">
                <span className="bg-filter p-2 rounded-tl rounded-bl font-semibold text-primary">
                  {f}{" "}
                </span>
                <div
                  className="bg-primary p-2 rounded-br rounded-tr hover:bg-tertiary hover:cursor-pointer min-h-full flex"
                  onClick={() => removeSelectedFilter(f)}
                >
                  <Image src={RemoveIcon} height={12} width={12} alt="Remove" />
                </div>
              </div>
            ))}
          </div>
          <div className="">
            <button
              className="hover:underline hover:text-primary p-1 text-slate-400 font-bold"
              onClick={ClearFilter}
            >
              Clear
            </button>
          </div>
        </section>
      )}
    </>
  );
}
