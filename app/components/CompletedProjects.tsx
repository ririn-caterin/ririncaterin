const CompletedProjects = () => {
  const clients = [
    { name: "Universitas Gadjah Mada", logo: "/images/logo-ugm.png" },
    { name: "Sprinthink", logo: "/images/logo-sprinthink.png" },
    { name: "SyariHub", logo: "/images/logo-syarihub.png" },
    { name: "Universitas Diponegoro", logo: "/images/logo-undip.png" },
    { name: "Hipwee", logo: "/images/logo-hipwee.png" },
    { name: "Balkondes Borobudur", logo: "/images/logo-balkondes.png" },
    { name: "Polygon", logo: "/images/logo-polygon.png" },
    { name: "Aksoro", logo: "/images/logo-aksoro.png" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Clients and Projects I’ve Been Part Of
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">
          {clients.map((client, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={client.logo}
                alt={client.name}
                className="max-w-[120px] h-auto"
              />
            </div>
          ))}
        </div>
        <div className="mt-8">
          <button className="inline-block bg-orange-300 text-white font-semibold py-2 px-6 rounded-full">
            50+ Other Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default CompletedProjects;
