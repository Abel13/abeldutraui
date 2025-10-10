import Image from "next/image";

const experiences = [
  {
    company: "Petros",
    role: "Senior React Native Developer",
    period: "Dec 2023 – Present",
    description: [
      "Maintenance and evolution of the Petros app.",
      "Focus on performance, scalability, and new feature development.",
    ],
    tech: [
      "React Native",
      "Expo",
      "Zustand",
      "React Testing Library",
      "Firebase Analytics",
      "Firebase Cloud Messaging",
      "Azure DevOps",
    ],
    projects: [
      {
        logo: "/assets/experiences/petros.webp",
        name: "Petros App",
        downloads: "+100K downloads",
        playStore:
          "https://play.google.com/store/apps/details?id=br.com.petros",
        appStore: "https://apps.apple.com/us/app/petros-app/id1440476590",
      },
    ],
  },
  {
    company: "Act Digital",
    role: "Tech Lead – Hands-on",
    period: "Dec 2021 – Nov 2023",
    description: [
      "Technical leadership of a cross-functional mobile team.",
      "End-to-end project management focused on React Native, ReactJS, and NodeJS.",
    ],
    tech: [
      "React Native",
      "Expo",
      "Redux",
      "Context API",
      "NodeJS",
      "PostgreSQL",
      "Firebase",
      "AWS S3",
      "Azure DevOps",
      "SCRUM",
    ],
    projects: [
      {
        logo: "/assets/experiences/petros.webp",
        name: "Petros App",
        downloads: "+100K downloads",
        playStore:
          "https://play.google.com/store/apps/details?id=br.com.petros",
        appStore: "https://apps.apple.com/us/app/petros-app/id1440476590",
      },
      {
        logo: "/assets/experiences/einstein.webp",
        name: "Guia Obstétrico",
        playStore:
          "https://play.google.com/store/apps/details?id=br.einstein.appobstetricia&hl=pt_BR",
        appStore:
          "https://apps.apple.com/br/app/guia-obst%C3%A9trico/id1621361749",
      },
    ],
  },
  {
    company: "Accurate Software",
    role: "Senior Mobile Developer",
    period: "Jan 2021 – Nov 2021",
    description: [
      "Development of cross-platform mobile applications using Flutter.",
    ],
    tech: ["Flutter", "MobX", "Jira", "Bitbucket"],
    projects: [
      {
        logo: "/assets/experiences/mambo.webp",
        name: "Mambo",
        downloads: "+50K downloads",
        playStore:
          "https://play.google.com/store/apps/details?id=br.com.app.mambodelivery&hl=pt_BR",
        appStore: "https://apps.apple.com/br/app/mambo/id1578478397",
      },
    ],
  },
  {
    company: "Lexis Nexis – via Luby Software",
    role: "React Native Developer",
    period: "May 2020 – Dec 2020",
    description: [
      "Development of responsive mobile UIs with React Native.",
      "Migration from MobX to Redux + Saga.",
      "Testing with Jest and Enzyme.",
    ],
    tech: [
      "React Native",
      "Expo",
      "Redux",
      "MobX",
      "Jest",
      "Firebase",
      "SCRUM",
    ],
  },
  {
    company: "Luby Software",
    role: "Full Stack Developer",
    period: "Jul 2019 – Dec 2020",
    description: [
      "Worked on multiple projects using React Native, NodeJS, and ReactJS.",
    ],
    tech: [
      "React Native",
      "ReactJS",
      "NodeJS",
      "Expo",
      "Firebase",
      "AWS",
      "SCRUM",
    ],
  },
  {
    company: "MEI Fácil",
    role: "Mobile Developer",
    period: "Nov 2017 – May 2019",
    description: [
      "Maintenance and evolution of the MEI Fácil mobile app.",
      "Integration of native Android features with React Native.",
    ],
    tech: ["React Native CLI", "Redux + Saga", "Firebase", "Azure DevOps"],
    projects: [
      {
        logo: "/assets/experiences/meifacil.webp",
        name: "MEI Fácil",
        downloads: "+10M downloads",
        playStore:
          "https://play.google.com/store/apps/details?id=com.appmei&hl=pt_BR",
        appStore:
          "https://apps.apple.com/br/app/mei-f%C3%A1cil-est%C3%A1-no-app-neon/id1615638746",
      },
    ],
  },
  {
    company: "SS Business",
    role: "Frontend Developer",
    period: "Sep 2013 – Mar 2014",
    description: [
      "Development of desktop software using VB.NET and SQL Server.",
    ],
    tech: ["VB.NET", "SQL Server"],
  },
  {
    company: "Autocom",
    role: "Frontend Developer",
    period: "Dec 2012 – Sep 2013",
    description: [
      "Development of desktop applications using C# and Windows Forms.",
    ],
    tech: ["C#", "Windows Forms"],
  },
  {
    company: "Atlanta Sistemas",
    role: "Frontend Developer",
    period: "Apr 2011 – Dec 2012",
    description: [
      "Development of desktop applications using C#, VB6, and VB.NET.",
      "Worked with various databases including MySQL, SQL Server, Firebird, and more.",
    ],
    tech: [
      "C#",
      "VB.NET",
      "VB6",
      "MySQL",
      "SQL Server",
      "Firebird",
      "Access",
      "SQLite",
    ],
  },
];

export default function Experiences() {
  return (
    <section id="experiences" className="pb-20 pt-20 px-6 md:px-12">
      <h2 className="text-3xl sm:text-4xl font-heading font-semibold mb-12 text-white">
        Professional Experiences
      </h2>

      <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
        {experiences.map((exp) => (
          <div
            key={exp.company}
            className="rounded-xl bg-white text-foreground shadow-xl p-6 flex flex-col hover:scale-[1.02] transition-transform duration-300"
          >
            <div className="flex flex-col mb-2">
              <h3 className="text-xl font-semibold">{exp.role}</h3>
              <span className="text-xs text-gray-500">{exp.period}</span>
            </div>
            <p className="text-sm font-semibold mb-1 text-purple-800">
              {exp.company}
            </p>
            <ul className="list-disc list-inside text-sm mb-4">
              {exp.description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 text-xs mb-4">
              {exp.tech.map((tech) => (
                <span
                  key={tech}
                  className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            {exp.projects && (
              <div className="flex flex-col w-full justify-end h-full">
                <span className="border-b border-b-purple-800 gap-4 mb-2 font-semibold">
                  Featured Projects
                </span>
                <div className="border-t-purple-800 flex md:flex-row flex-col gap-4">
                  {exp.projects.map((project) => (
                    <div
                      key={project.name}
                      className="rounded-2xl bg-[linear-gradient(145deg,#5B0A91,#640a91,#8f3fe4)] bg-white/10 backdrop-blur-md border border-white/20 p-4 shadow-md flex flex-col items-center text-center transition hover:scale-[1.02] duration-300"
                    >
                      <Image
                        src={project.logo}
                        alt={project.name}
                        width={60}
                        height={60}
                        className="w-14 h-14 object-contain rounded-lg bg-white/80 p-1"
                      />

                      <p className="mt-3 text-sm font-bold text-white">
                        {project.name}
                      </p>

                      {project.downloads && (
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg py-1 px-3">
                          <p className="text-xs text-purple-200">
                            {project.downloads}
                          </p>
                        </div>
                      )}

                      <div className="flex gap-2 mt-3 flex-wrap justify-center">
                        {project.playStore && (
                          <a
                            href={project.playStore}
                            target="_blank"
                            className="text-xs font-medium bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-lg transition"
                          >
                            Play Store
                          </a>
                        )}
                        {project.appStore && (
                          <a
                            href={project.appStore}
                            target="_blank"
                            className="text-xs font-medium bg-black hover:bg-neutral-800 text-white px-3 py-1 rounded-lg transition"
                          >
                            App Store
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
