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
    "Front-End Developer with hands-on experience building and customizing WordPress and WooCommerce websites. I focus on layout styling, theme customization, and ensuring a smooth user experience across devices. I enjoy solving front-end issues and making sure everything looks clean and works as expected.",
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
