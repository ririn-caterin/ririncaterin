import Footer from "./components/Footer";
import Header from "./components/Header";
import SectionAbout from "./components/SectionAbout";
import SectionColaboration from "./components/SectionCollaboration";
import SectionProjects from "./components/SectionProjects";
import SectionSkills from "./components/SectionSkills";

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
