import {
  FaReact,
  FaJs,
  FaGitAlt,
  FaWordpress,
  FaSearch,
  FaCode,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const skills = [
  {
    title: "Wordpress",
    caption: "Content Management System",
    icon: <FaWordpress className="text-sky-700" />,
  },
  {
    title: "Woocommerce",
    caption: "E-Commerce Plugin Platform",
    icon: (
      <img
        src="/images/woo-logo.svg"
        alt="WooCommerce Logo"
        className="w-6 h-6 object-contain"
      />
    ),
  },
  {
    title: "React JS",
    caption: "UI component development",
    icon: <FaReact className="text-blue-400" />,
  },
  {
    title: "JavaScript (ES6+)",
    caption: "Dynamic scripting",
    icon: <FaJs className="text-yellow-400" />,
  },
  {
    title: "TypeScript",
    caption: "Typed JavaScript",
    icon: <FaCode className="text-blue-500" />,
  },
  {
    title: "Tailwind CSS",
    caption: "Utility-first CSS framework",
    icon: <SiTailwindcss className="text-teal-400" />,
  },
  {
    title: "API Integration",
    caption: "Consuming REST & GraphQL APIs",
    icon: <FaCode className="text-gray-500" />,
  },
  {
    title: "GIT",
    caption: "Version control",
    icon: <FaGitAlt className="text-orange-500" />,
  },
  {
    title: "SEO Optimization",
    caption: "Improving search visibility",
    icon: <FaSearch className="text-green-500" />,
  },
];

const SectionSkills = () => {
  return (
    <section className="bg-gray-50 py-14 md:py-24">
      <div className="container mx-auto">
        <h2 className="text-2xl mb-10 md:text-4xl md:mb-14 font-semibold text-center">
          Skills and Technologies
        </h2>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-12 pl-10 md:pl-12">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-3 flex-row md:items-center md:gap-4"
            >
              <div className="text-2xl md:text-2xl">{skill.icon}</div>
              <div>
                <h3 className="text-[10px] uppercase text-gray-500 md:text-xs">
                  {skill.caption}
                </h3>
                <p className="text-lg font-semibold md:text-xl">
                  {skill.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionSkills;
