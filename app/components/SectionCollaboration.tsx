import Link from "next/link";

const SectionColaboration = () => {
  return (
    <section className="bg-gray-100 py-14 md:py-24 text-center ">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-4xl font-semibold mb-4">
          Looking for a Front-End Developer? Let&apos;s talk!
        </h2>
        <p className="md:text-lg mb-10">
          Fast, functional, and scalable WordPress solutions.
        </p>
        <Link
          href="https://api.whatsapp.com/send?phone=6281393893163"
          className="bg-customOrange font-medium px-10 py-4 rounded-full hover:bg-customOrange-dark transition duration-300"
        >
          Contact Me
        </Link>
      </div>
    </section>
  );
};

export default SectionColaboration;
