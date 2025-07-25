const ProjectTable = () => {
  const projects = [
    {
      year: "2025",
      name: "Little Qurani Website",
      description: "Developed the Little Qurani website using WordPress",
      role: "WordPress Developer",
    },
    {
      year: "2025",
      name: "MentorQu Website",
      description:
        "Developed the MentorQu website using WordPress and WooCommerce",
      role: "Front-End Developer",
    },
    {
      year: "2025",
      name: "Karyatama Komposit Website",
      description:
        "Developed the Karyatama Komposit website using WordPress and WooCommerce",
      role: "Front-End Developer",
    },
    {
      year: "2025",
      name: "Amanah Farm Website",
      description:
        "Developed the Amanah Farm website using WordPress and WooCommerce",
      role: "Front-End Developer",
    },
    {
      year: "2025",
      name: "Karyatama Bangun Sawit Website",
      description:
        "Developed the Karyatama Bangun Sawit website using WordPress and WooCommerce",
      role: "Front-End Developer",
    },
    {
      year: "2025",
      name: "Ksatria Baja Hitam Website",
      description: "Developed the Ksatria Baja Hitam website using WordPress",
      role: "Front-End Developer",
    },
    {
      year: "2025",
      name: "MCI Carbon Website",
      description:
        "Developed the MCI Carbon website using WordPress and WooCommerce",
      role: "Front-End Developer",
    },
    {
      year: "2024",
      name: "Malika AI Website",
      role: "Front-End Developer",
      description: "Developed the malika.ai website using WordPress",
    },
    {
      year: "2024",
      name: "Aksoro Website",
      role: "Front-End Developer",
      description:
        "Updated the Aksoro website with a new design using WordPress",
    },
    {
      year: "2022",
      name: "Syarihub Website",
      role: "Front-End Developer",
      description:
        "Updated the Syarihub website with a new design using WordPress",
    },
    {
      year: "2020",
      name: "Berakal Website",
      role: "Front-End Developer",
      description: "Sliced Figma design to HTML for website Berakal",
    },
    {
      year: "2019",
      name: "Shopia Mobile Application",
      role: "Front-End Developer",
      description:
        "Sliced Figma design to HTML for mobile apps Shopia (Beauty Clinic)",
    },
    {
      year: "2019",
      name: "Hipwee Website",
      role: "Front-End Developer",
      description:
        "Built HTML pages for Hipwee, later implemented as a WordPress theme",
    },
    {
      year: "2019",
      name: "UGM Website",
      role: "Front-End Developer",
      description:
        "Built HTML pages for UGM, later implemented as a WordPress theme",
    },
    {
      year: "2019",
      name: "Adaro Web Information System",
      role: "Front-End Developer",
      description: "Sliced XD to HTML for Adaro web information system",
    },
    {
      year: "2019",
      name: "Luwansa Website",
      role: "Front-End Developer",
      description:
        "Built HTML pages for company profile Luwansa Hotel and Convention Center, later implemented as a WordPress theme",
    },
    {
      year: "2019",
      name: "Sandlik Website",
      role: "Front-End Developer",
      description:
        "Built HTML pages for company profile Sandlik Constructions, later implemented as a WordPress theme",
    },
    {
      year: "2019",
      name: "Toyu Website",
      role: "Front-End Developer",
      description:
        "Built HTML pages for Toyu e-commerce website, later implemented as WordPress theme",
    },
    {
      year: "2019",
      name: "Amily Hijab Website",
      role: "Front-End Developer",
      description:
        "Built HTML pages for Amily Hijab e-commerce website, later implemented as WordPress theme",
    },
    {
      year: "2018",
      name: "ASEAN Energy Website",
      role: "Front-End Developer",
      description:
        "Built HTML pages for ASEAN Energy, later implemented as a WordPress theme",
    },
    {
      year: "2018",
      name: "Ayo Haji Website",
      role: "Front-End Developer",
      description: "Developed the Ayo Haji website using WordPress",
    },
    {
      year: "2018",
      name: "DPP UGM Website",
      role: "Front-End Developer",
      description:
        "Built HTML pages for company profile DPP Gajah Mada University, later implemented as a WordPress theme",
    },
    {
      year: "2018",
      name: "JHU Hipwee Website",
      role: "Front-End Developer",
      description:
        "Built HTML pages for microsite John Hopkins University x Hipwee, later implemented as a WordPress theme",
    },
    {
      year: "2018",
      name: "Masjid Gedhe Website",
      role: "Front-End Developer",
      description:
        "Developed the Gedhe Mosque Yogyakarta website using WordPress",
    },
    {
      year: "2018",
      name: "Mr DIY Website",
      role: "Front-End Developer",
      description: "Built a single page for Mr DIY event",
    },
    {
      year: "2018",
      name: "Pustaka Tonjoo Website",
      role: "Front-End Developer",
      description: "Sliced PSD to HTML for product knowledge in Tonjoo",
    },
    {
      year: "2018",
      name: "Erge Store Website",
      role: "Front-End Developer",
      description:
        "Built HTML pages for Erge Store e-commerce website, later implemented as WordPress theme",
    },
    {
      year: "2018",
      name: "Samara Lombok Website",
      role: "Front-End Developer",
      description:
        "Built HTML pages for company Profile Samara Lombok website, later implemented as WordPress theme",
    },
    {
      year: "2018",
      name: "Gamifikasi Hipwee",
      role: "Front-End Developer",
      description: "Sliced PSD to HTML for one of Hipwee features",
    },
    {
      year: "2018",
      name: "Website GNP Project",
      role: "Front-End Developer",
      description:
        "Built HTML pages for GNP Project website, later implemented as WordPress theme",
    },
    {
      year: "2018",
      name: "Cari Teman Makan Website",
      role: "Front-End Developer",
      description:
        "Customized website appearance for company profile Bintang Ridler x Hipwee based on mockup",
    },
    {
      year: "2018",
      name: "Polygon Website",
      role: "Front-End Developer",
      description:
        "Built HTML pages for Polygon Bikes e-commerce website, later implemented as WordPress theme",
    },
    {
      year: "2017",
      name: "Kensington Wordpress Theme",
      role: "Front-End Developer",
      description:
        "Built WordPress Theme Kensington HTML version for ThemeForest",
    },
    {
      year: "2017",
      name: "The Voyager HTML Theme",
      role: "Front-End Developer",
      description:
        "Built HTML Theme The Voyager for ThemeForest, later implemented as WordPress theme",
    },
    {
      year: "2017",
      name: "Balkondes Website",
      role: "Front-End Developer",
      description:
        "Built HTML pages for company profile Balkondes Borobudur website, later implemented as WordPress theme",
    },
    {
      year: "2017",
      name: "Dari Penjuru Website",
      role: "Front-End Developer",
      description:
        "Built HTML pages for DariPenjuru website, later implemented as WordPress theme",
    },
    {
      year: "2017",
      name: "Ayo Indonesia Website",
      role: "Front-End Developer",
      description:
        "Sliced PSD to HTML for sport community website Ayo Indonesia",
    },
    {
      year: "2017",
      name: "Anak Baru Website",
      role: "WordPress Developer",
      description:
        "Built a local guide website using WordPress that will help newcomers to find places on Melbourne and Sydney",
    },
    {
      year: "2016",
      name: "LDN ERNST Website",
      role: "WordPress Developer",
      description:
        "Built a website using WordPress for a lawyer company and created the user manual",
    },
    {
      year: "2016",
      name: "Beamer Multimedia Website",
      role: "WordPress Developer",
      description:
        "Built a website using WordPress for a multimedia service company and created the user manual",
    },
    {
      year: "2016",
      name: "Dinas Pendidikan Kabupaten Barru Website",
      role: "WordPress Developer",
      description:
        "Built a website using WordPress for Education Departement of Barru District and created the user manual",
    },
    {
      year: "2016",
      name: "ULP UNDIP Web Application",
      role: "Front-end Developer",
      description:
        "Created HTML pages for Auction management application for ULP Diponegoro University",
    },
    {
      year: "2016",
      name: "ALSTE Web Application",
      role: "Front-end Developer",
      description:
        "Created HTML pages for Information System for High School Graduation 3 Semarang City",
    },
    {
      year: "2016",
      name: "RSUD Kabupaten Barru Website",
      role: "WordPress Developer",
      description:
        "Built website using WordPress for Hospital of Barru District and created the user manual",
    },
    {
      year: "2016",
      name: "SMKN 1 Bawen Website",
      role: "WordPress Developer",
      description:
        "Built a website using WordPress for State Vocational High School 1 Bawen and created the user manual.",
    },
    {
      year: "2016",
      name: "PPID Kab. Barru Website",
      role: "WordPress Developer",
      description:
        "Built a profile website for a local government using WordPress and created the user manual",
    },
    {
      year: "2016",
      name: "KARWAS UNDIP Web Application",
      role: "Front-end Developer",
      description: "Created HTML pages for KARWAS Diponegoro University",
    },
    {
      year: "2016",
      name: "KPE BKD Semarang Web Application",
      role: "Front-end Developer",
      description:
        "Created HTML pages for Employee card management information system electronic for BKD Semarang City",
    },
    {
      year: "2016",
      name: "SIMASTER Web Application",
      role: "Front-end Developer",
      description: "Created HTML pages for Web Application Simaster",
    },
    {
      year: "2016",
      name: "JAPSI UNDIP Website",
      role: "WordPress Developer",
      description:
        "Built the JAPSI website at Diponegoro University using WordPress and created the user manual",
    },
    {
      year: "2016",
      name: "Psikologi UNDIP Website",
      role: "WordPress Developer",
      description:
        "Built website Faculty of Psychology at the University of Diponegoro using WordPress, and created the user manual",
    },
    {
      year: "2016",
      name: "Web Application of Survey Balai Monitoring",
      role: "Front-end Developer",
      description:
        "Created HTML pages for Web Application of Survey Balai Monitoring in Semarang City",
    },
    {
      year: "2016",
      name: "CV. Bintang Sentosa Sejahtera Website",
      role: "WordPress Developer",
      description:
        "Built company profile website for a commercial and service company using WordPress, and created the user manual",
    },
    {
      year: "2016",
      name: "Balubaid Ikhwan Website",
      role: "WordPress Developer",
      description:
        "Built company profile website for a company that organize The Hajj and Umrah pilgrimage using WordPress, and created the user manual",
    },
    {
      year: "2016",
      name: "AbsenKU Website",
      role: "Front-end Developer",
      description:
        "Built one page web application of information system for tracking employee attendance",
    },
    {
      year: "2016",
      name: "Borobudur Marathon - International Running Event Website",
      role: "WordPress Developer",
      description:
        "Built a website for International running event using WordPress",
    },
    {
      year: "2016",
      name: "AbsenKU Karyawan Web Application",
      role: "Front-end Developer",
      description: "Created HTML pages for web application AbsenKU Karyawan",
    },
    {
      year: "2015",
      name: "Web Application of FH UNDIP '96",
      role: "Front-end Developer",
      description:
        "Created HTML pages for web application of Diponegoro University Graduation for Law Faculty",
    },
    {
      year: "2015",
      name: "Karya Zirang Website",
      role: "WordPress Developer",
      description:
        "Built company profile website for Zirang Business Group using WordPress and created the user manual",
    },
    {
      year: "2015",
      name: "GINSI Jateng Website",
      role: "WordPress Developer",
      description:
        "Built company profile website for an importer company using WordPress and created the user manual",
    },
    {
      year: "2015",
      name: "Borobudur10K - International Running Event Website",
      role: "WordPress Developer",
      description:
        "Built a website for International running event using WordPress",
    },
    {
      year: "2015",
      name: "BPR Weleri Makmur Website",
      role: "WordPress Developer",
      description:
        "Built company profile website for a Bank using WordPress and created the user manual",
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
