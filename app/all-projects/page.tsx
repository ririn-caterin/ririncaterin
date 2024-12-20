import type { Metadata } from "next";
import AllProjects from "../components/AllProjects";
import Header from "../components/Header";

export const metadata: Metadata = {
  title: "Ririn Caterin | Front End Developer",
  description:
    "Front-End Developer specializing in modern, responsive web applications with expertise in Next.js, TypeScript, Tailwind CSS, and Material UI. Delivering intuitive, high-performing, and SEO-optimized user experiences.",
  alternates: {
    canonical: `https://ririncaterin.com/all-projects`,
  },
};

const Page = () => {
  return (
    <div>
      <Header />
      <div className="container mx-auto py-14">
        <h2 className="text-2xl mb-6 md:text-4xl md:mb-14 font-semibold text-center">
          Portfolio of Completed Projects
        </h2>
        <p className="text-sm mb-4 md:text-base md:mb-10">
          Welcome to my portfolio, where I showcase projects I have successfully
          completed over the years. With a strong background in front-end
          development, I have crafted responsive, user-friendly, and
          high-performance websites and applications for diverse clients.
          Explore the highlights of my work below, demonstrating my technical
          expertise and the impactful contributions I’ve made.
        </p>
        <AllProjects />
      </div>
    </div>
  );
};

export default Page;
