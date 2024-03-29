import "./globals.css";
import { League_Spartan } from "next/font/google";

const inter = League_Spartan({ subsets: ["latin"] });

export const metadata = {
  title: "Job Listings",
  description: "Next JS Job Listings",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
