import Image from "next/image";

const SectionAbout = () => {
  return (
    <section className="pt-10 bg-customPurple">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Kontainer teks */}
        <div className="w-full md:w-1/2 text-center md:text-left mt-6 md:mt-0">
          <h1 className="text-3xl md:text-5xl font-semibold mb-4 leading-snug md:leading-tight">
            Hi, I’m Ririn Caterin.
          </h1>
          <p className="text-sm md:text-base leading-6 md:leading-7 mb-6">
            Front-End Developer specializing in building modern, responsive, and
            user-friendly web applications. With expertise in Next.js,
            TypeScript, Tailwind CSS, and Material UI, I combine front-end
            development with SEO optimization to deliver intuitive,
            high-performing, and search engine-friendly experiences.
          </p>
        </div>

        {/* Kontainer gambar */}
        <div className="relative flex justify-center items-center">
          <Image
            src="/images/ririn-caterin-web.webp"
            alt="Ririn Caterin"
            width={400}
            height={300}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default SectionAbout;
