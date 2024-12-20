import Link from "next/link";

const projects = [
  {
    title: "E-Commerce Pet Store",
    year: "2024",
    description:
      "Developed a pet store platform using Next.js, TypeScript, Tailwind CSS, and Supabase. Implemented authentication, product search, reviews, and a smooth checkout system.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
  },
  {
    title: "Malika AI Landing Page",
    year: "2024",
    description:
      "Created an AI landing page with WordPress, showcasing features and pricing within a tight deadline, focusing on SEO optimization.",
    technologies: ["WordPress", "SEO"],
  },
  {
    title: "Shopia Mobile Application",
    year: "2019",
    description:
      "Built the front-end with Ionic, translating Figma designs into functional UI, ensuring client requirements were met.",
    technologies: ["Ionic", "Figma"],
  },
  {
    title: "UGM Website",
    year: "2019",
    description:
      "Developed UGM's official website, converting PSD designs into responsive HTML layouts with consistency and UX in mind.",
    technologies: ["HTML", "CSS", "PSD"],
  },
  {
    title: "Polygon Bikes Website",
    year: "2018",
    description:
      "Built a responsive e-commerce website, focusing on product displays and user-friendly navigation.",
    technologies: ["HTML", "CSS", "E-Commerce"],
  },
  {
    title: "The Voyager & Kensington Themes",
    year: "2017",
    description:
      "Created two HTML themes approved on ThemeForest, focusing on clean, structured code and versatility.",
    technologies: ["HTML", "CSS", "ThemeForest"],
  },
];

export default function SectionProjects() {
  const colors = [
    "bg-customBlue",
    "bg-customYellow",
    "bg-customPurple",
    "bg-customPink",
  ];
  return (
    <section className="py-20 md:py-24">
      <div className="container mx-auto">
        <h2 className="text-2xl mb-10 md:text-4xl md:mb-14 font-semibold text-center">
          Project Experience
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-3 md:px-0">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`${
                colors[index % colors.length]
              } p-6 rounded-lg shadow-lg hover:shadow-md transition-transform duration-300`}
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm mb-4">{project.year}</p>
              <p className="text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-200 text-xs px-1 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-20">
          <Link
            href="/all-projects"
            className="bg-customOrange font-medium px-10 py-4 rounded-full hover:bg-customOrange-dark transition duration-300"
          >
            50++ Other Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
