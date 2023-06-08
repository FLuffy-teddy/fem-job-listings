import Image from "next/image";
import JobLayout from "./components/jobLayout";

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
      <JobLayout />
    </main>
  );
}
