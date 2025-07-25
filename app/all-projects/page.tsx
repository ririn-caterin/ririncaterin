import type { Metadata } from "next";
import AllProjects from "../components/AllProjects";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
          Welcome to my portfolio, where I share some of the projects I&apos;ve
          worked on, mainly using WordPress and WooCommerce. With a background
          in front-end development, I focus on building websites that are
          functional, easy to manage, and suited to each project&apos;s needs
          across different industries and use cases.
        </p>
        <AllProjects />
      </div>
      <div className="bg-gray-50">
        <Footer />
      </div>
    </div>
  );
};

export default Page;
