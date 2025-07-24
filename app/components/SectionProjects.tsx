import Link from "next/link";

const projects = [
  {
    title: "MCI Carbon Website",
    year: "2025",
    link: "https://mcicarbon.co.id/",
    displayLink: "mcicarbon.co.id",
    description:
      "Developed a WooCommerce website for premium carbon auto parts using WordPress, focusing on visual layout and functional customization.",
    technologies: ["Wordpress", "Woocommerce"],
  },
  {
    title: "Amanah Farm Website",
    year: "2025",
    link: "https://amanahfarm.com/",
    displayLink: "amanahfarm.com",
    description:
      "Built a WooCommerce based website for a vegetable supplier using WordPress, with clean layout and organized product display.",
    technologies: ["WordPress", "Woocommerce"],
  },
  {
    title: "Ksatria Baja Hitam Website",
    year: "2025",
    link: "https://ksatria.co.id/",
    displayLink: "ksatria.co.id",
    description:
      "Created a WordPress website for a service business with easy to read content and a layout that works well on all devices.",
    technologies: ["WordPress"],
  },
  {
    title: "Karyatama Bangun Sawit Website",
    year: "2025",
    link: "https://karyatamasawit.com/",
    displayLink: "karyatamasawit.com",
    description:
      "Built website for a palm oil industry company using WordPress and WooCommerce, with product showcase and clean layout.",
    technologies: ["Wordpress", "Woocommerce"],
  },
  {
    title: "Karyatama Komposit Website",
    year: "2025",
    link: "https://karyatamakomposit.com/",
    displayLink: "karyatamakomposit.com",
    description:
      "Created a WordPress and WooCommerce website for a carbon composite manufacturer, featuring clean product layout and responsive design.",
    technologies: ["Wordpress", "Woocommerce"],
  },
  {
    title: "Little Qurani Website",
    year: "2025",
    link: "https://littlequrani.id/",
    displayLink: "littlequrani.id",
    description:
      "Built a WordPress website for an online Qur'an learning course for kids, with clear class information and responsive layout.",
    technologies: ["Wordpress"],
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
              <p className="text-sm mb-2">{project.description}</p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block italic text-sm mb-4 text-sky-500 hover:text-sky-600 transition-colors"
                >
                  {project.displayLink}
                </a>
              )}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-200 text-xs px-2 py-1 rounded"
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
