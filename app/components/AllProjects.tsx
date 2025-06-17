const ProjectTable = () => {
  const projects = [
    {
      year: "2025",
      name: "MentorQu Website",
      description:
        "Developed the MentorQu website using WordPress page builder.",
      role: "Front-End Developer",
    },
    {
      year: "2025",
      name: "Karyatana Komposit Website",
      description:
        "Developed the Karyatama Komposit website using WordPress page builder.",
      role: "Front-End Developer",
    },
    {
      year: "2025",
      name: "Amanah Farm Website",
      description:
        "Developed the Amanah Farm website using WordPress page builder.",
      role: "Front-End Developer",
    },
    {
      year: "2025",
      name: "Karyatama Bangun Sawit Website",
      description:
        "Developed the Karyatama Bangun Sawit website using WordPress page builder.",
      role: "Front-End Developer",
    },
    {
      year: "2025",
      name: "Ksatria Baja Hitam Website",
      description:
        "Developed the Ksatria Baja Hitam website using WordPress page builder.",
      role: "Front-End Developer",
    },
    {
      year: "2025",
      name: "MCI Carbon Website",
      description:
        "Developed the MCI Carbon website using WordPress page builder.",
      role: "Front-End Developer",
    },
    {
      year: "2024",
      name: "Malika AI Website",
      role: "Front-End Developer",
      description:
        "Developed the malika.ai website using a WordPress page builder.",
    },
    {
      year: "2024",
      name: "Aksoro Website",
      role: "Front-End Developer",
      description:
        "Update the appearance of Aksoro website according to the latest design",
    },
    {
      year: "2022",
      name: "Syarihub Website",
      role: "Front-End Developer",
      description: "Update the appearance of Syarihub website",
    },
    {
      year: "2020",
      name: "Berakal Website",
      role: "Front-End Developer",
      description: "Slice Figma design to HTML for website Berakal",
    },
    {
      year: "2019",
      name: "Shopia Mobile Application",
      role: "Front-End Developer",
      description:
        "Slice Figma design to HTML for mobile apps Shopia (Beauty Clinic)",
    },
    {
      year: "2019",
      name: "Hipwee Website",
      role: "Front-End Developer",
      description: "Slice PSD to HTML for website Hipwee",
    },
    {
      year: "2019",
      name: "UGM Website",
      role: "Front-End Developer",
      description:
        "Slice PSD to HTML for company profile Gajah Mada University",
    },
    {
      year: "2019",
      name: "Adaro Web Information System",
      role: "Front-End Developer",
      description: "Slice XD to HTML for Adaro web information system",
    },
    {
      year: "2019",
      name: "Luwansa Website",
      role: "Front-End Developer",
      description:
        "Slice PSD to HTML for company profile Luwansa Hotel and Convention Center",
    },
    {
      year: "2019",
      name: "Sandlik Website",
      role: "Front-End Developer",
      description:
        "Slice PSD to HTML for company profile Sandlik Constructions",
    },
    {
      year: "2019",
      name: "Toyu Website",
      role: "Front-End Developer",
      description: "Slice XD to HTML for e-commerce website Toyu",
    },
    {
      year: "2019",
      name: "Amily Hijab Website",
      role: "Front-End Developer",
      description: "Slice PSD to HTML for e-commerce website Amily Hijab",
    },
    {
      year: "2018",
      name: "ASEAN Energy Website",
      role: "Front-End Developer",
      description: "Slice PSD to HTML for company profile ASEAN Energy",
    },
    {
      year: "2018",
      name: "Ayo Haji Website",
      role: "Front-End Developer",
      description: "Customize website appearance Ayo Haji based on mockup",
    },
    {
      year: "2018",
      name: "DPP UGM Website",
      role: "Front-End Developer",
      description:
        "Slice PSD to HTML for company profile DPP Gajah Mada University",
    },
    {
      year: "2018",
      name: "JHU Hipwee Website",
      role: "Front-End Developer",
      description:
        "Slice PSD to HTML for microsite John Hopkins University x Hipwee",
    },
    {
      year: "2018",
      name: "Masjid Gedhe Website",
      role: "Front-End Developer",
      description:
        "Customize User Interface website Gedhe Mosque Yogyakarta based on mockup",
    },
    {
      year: "2018",
      name: "Mr DIY Website",
      role: "Front-End Developer",
      description: "Build a single page for Mr DIY event",
    },
    {
      year: "2018",
      name: "Pustaka Tonjoo Website",
      role: "Front-End Developer",
      description: "Slice PSD to HTML for product knowledge in Tonjoo",
    },
    {
      year: "2018",
      name: "Erge Store Website",
      role: "Front-End Developer",
      description: "Slice PSD to HTML for e-commerce website Erge Store",
    },
    {
      year: "2018",
      name: "Samara Lombok Website",
      role: "Front-End Developer",
      description:
        "Customize website appearance for company Profile Samara Lombok based on mockup",
    },
    {
      year: "2018",
      name: "Gamifikasi Hipwee",
      role: "Front-End Developer",
      description: "Slice PSD to HTML for one of Hipwee features",
    },
    {
      year: "2018",
      name: "Website GNP Project",
      role: "Front-End Developer",
      description: "Customize website appearance GNP Project based on mockup",
    },
    {
      year: "2018",
      name: "Cari Teman Makan Website",
      role: "Front-End Developer",
      description:
        "Customize website appearance for company profile Bintang Ridler x Hipwee based on mockup",
    },
    {
      year: "2018",
      name: "Polygon Website",
      role: "Front-End Developer",
      description: "Slice PSD to HTML for e-commerce website Polygon Bikes",
    },
    {
      year: "2017",
      name: "Kensington Wordpress Theme",
      role: "Front-End Developer",
      description:
        "Build wordpress theme Kensington HTML version for Themeforest",
    },
    {
      year: "2017",
      name: "The Voyager HTML Theme",
      role: "Front-End Developer",
      description: "Build HTML theme The Voyager for Themeforest",
    },
    {
      year: "2017",
      name: "Balkondes Website",
      role: "Front-End Developer",
      description: "Slice PSD to HTML for company profile Balkondes Borobudur",
    },
    {
      year: "2017",
      name: "Dari Penjuru Website",
      role: "Front-End Developer",
      description: "Slice PSD to HTML for company profile DariPenjuru",
    },
    {
      year: "2017",
      name: "Ayo Indonesia Website",
      role: "Front-End Developer",
      description:
        "Slice PSD to HTML for sport community website Ayo Indonesia",
    },
    {
      year: "2017",
      name: "Anak Baru Website",
      role: "Wordpress Developer",
      description:
        "Build a local guide website that will help newcomers to find places on Melbourne and Sydney",
    },
    {
      year: "2017",
      name: "The Real Ummi Website",
      role: "Wordpress Developer",
      description:
        "Build and maintain mom's lifestyle website using Wordpress.",
    },
    {
      year: "2016",
      name: "LDN ERNST Website",
      role: "Wordpress Developer",
      description:
        "Build website for a lawyer company and create the user's manual.",
    },
    {
      year: "2016",
      name: "Beamer Multimedia Website",
      role: "Wordpress Developer",
      description:
        "Build website for a multimedia service company and create the user's manual.",
    },
    {
      year: "2016",
      name: "Dinas Pendidikan Kabupaten Barru Website",
      role: "Wordpress Developer",
      description:
        "Build website Education Departement of Barru District and create the user's manual.",
    },
    {
      year: "2016",
      name: "ULP UNDIP Web Application",
      role: "Front-end Developer",
      description:
        "Create HTML pages for Auction management application for ULP Diponegoro University",
    },
    {
      year: "2016",
      name: "ALSTE Web Application",
      role: "Front-end Developer",
      description:
        "Create HTML pages for Information System for High School Graduation 3 Semarang City.",
    },
    {
      year: "2016",
      name: "RSUD Kabupaten Barru Website",
      role: "Wordpress Developer",
      description:
        "Build website Hospital of Barru District and create the user's manual.",
    },
    {
      year: "2016",
      name: "SMKN 1 Bawen Website",
      role: "Wordpress Developer",
      description:
        "Build website State Vocation High School 1 Bawen and create the user's manual.",
    },
    {
      year: "2016",
      name: "PPID Kab. Barru Website",
      role: "Wordpress Developer",
      description:
        "Build local government profile and create the user's manual.",
    },
    {
      year: "2016",
      name: "KARWAS UNDIP Web Application",
      role: "Front-end Developer",
      description: "Create HTML pages for KARWAS Diponegoro University",
    },
    {
      year: "2016",
      name: "KPE BKD Semarang Web Application",
      role: "Front-end Developer",
      description:
        "Create HTML pages for Employee card management information system electronic for BKD Semarang City.",
    },
    {
      year: "2016",
      name: "SIMASTER Web Application",
      role: "Front-end Developer",
      description: "Create HTML pages for Web Application Simaster",
    },
    {
      year: "2016",
      name: "JAPSI UNDIP Websitte",
      role: "Wordpress Developer",
      description:
        "Build website JAPSI at the University of Diponegoro. and create the user's manual",
    },
    {
      year: "2016",
      name: "Psikologi UNDIP Website",
      role: "Wordpress Developer",
      description:
        "Build website Faculty of Psychology at the University of Diponegoro. and create the user's manual",
    },
    {
      year: "2016",
      name: "Web Application of Survey Balai Monitoring",
      role: "Front-end Developer",
      description:
        "Create HTML pages for Web Application of Survey Balai Monitoring in Semarang City",
    },
    {
      year: "2016",
      name: "CV. Bintang Sentosa Sejahtera Website",
      role: "WordPress Developer",
      description:
        "Build company profile website for a commercial and service company, and create the user's manual.",
    },
    {
      year: "2016",
      name: "Balubaid Ikhwan Website",
      role: "WordPress Developer",
      description:
        "Build company profile website for a company that organize The Hajj and Umrah pilgrimage, and create the user's manual.",
    },
    {
      year: "2016",
      name: "AbsenKU Website",
      role: "Front-end Developer",
      description:
        "Build one page web application of information system for tracking employee attendance",
    },
    {
      year: "2016",
      name: "Borobudur Marathon - International Running Event Website",
      role: "WordPress Developer",
      description:
        "Build a website for International running event and create the registration system page",
    },
    {
      year: "2016",
      name: "AbsenKU Karyawan Web Application",
      role: "Front-end Developer",
      description: "Create HTML pages for web application AbsenKU Karyawan",
    },
    {
      year: "2015",
      name: "Web Application of FH UNDIP '96",
      role: "Front-end Developer",
      description:
        "Create HTML pages for web application of Diponegoro University Graduation for Law Faculty",
    },
    {
      year: "2015",
      name: "Karya Zirang Website",
      role: "WordPress Developer",
      description:
        "Build company profile website for Zirang Business Group and create the user's manual.",
    },
    {
      year: "2015",
      name: "GINSI Jateng Website",
      role: "WordPress Developer",
      description:
        "Build company profile website for an importer company and create the user's manual.",
    },
    {
      year: "2015",
      name: "Borobudur10K - International Running Event Website",
      role: "WordPress Developer",
      description: "Build a website for International running event",
    },
    {
      year: "2015",
      name: "BPR Weleri Makmur Website",
      role: "WordPress Developer",
      description:
        "Build company profile website for a bank and create the user's manual.",
    },
  ] as const;

  return (
    <div className="overflow-x-auto">
      <div className="overflow-x-auto">
        <div className="w-full text-sm">
          {/* Header */}
          <div className="hidden md:flex px-6 py-3 font-medium border-y-2 border-customOrange">
            <span className="w-[70px]">Year</span>
            <span className="w-[240px] pr-5">Project Name</span>
            <span className="w-1/6">Role</span>
            <span className="w-3/6">Description</span>
          </div>

          {/* Data Rows */}
          <div>
            {projects.map((project, index) => (
              <div
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-customYellow" : "bg-white"
                } px-6 py-4`}
              >
                {/* Mobile View */}
                <div className="block md:hidden">
                  <div className="mb-2">
                    <span className="font-medium">Year:</span> {project.year}
                  </div>
                  <div className="mb-2">
                    <span className="font-medium">Project Name:</span>{" "}
                    {project.name}
                  </div>
                  <div className="mb-2">
                    <span className="font-medium">Role:</span> {project.role}
                  </div>
                  <div>
                    <span className="font-medium">Description:</span>{" "}
                    {project.description}
                  </div>
                </div>

                {/* Desktop View */}
                <div className="hidden md:flex">
                  <div className="w-[70px]">{project.year}</div>
                  <div className="w-[240px] pr-5">{project.name}</div>
                  <div className="w-1/6">{project.role}</div>
                  <div className="w-3/6">{project.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectTable;
