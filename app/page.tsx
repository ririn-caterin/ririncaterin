import type { Metadata } from "next";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SectionAbout from "./components/SectionAbout";
import SectionColaboration from "./components/SectionCollaboration";
import SectionProjects from "./components/SectionProjects";
import SectionSkills from "./components/SectionSkills";

export const metadata: Metadata = {
  title: "Ririn Caterin | Front End Developer",
  description:
    "Front-End Developer specializing in modern, responsive web applications with expertise in Next.js, TypeScript, Tailwind CSS, and Material UI. Delivering intuitive, high-performing, and SEO-optimized user experiences.",
  alternates: {
    canonical: `https://ririncaterin.com/`,
  },
};

const Page = () => {
  return (
    <div className="text-customBlack">
      <Header />
      <SectionAbout />
      <SectionSkills />
      <SectionProjects />
      <SectionColaboration />
      <Footer />
    </div>
  );
};

export default Page;
