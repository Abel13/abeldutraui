import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "Sheep Finance",
    description:
      "Personal finance management app built with React Native and NodeJS.",
    tech: [
      "React Native",
      "NodeJS",
      "Expo",
      "Postgres",
      "GitHub Actions",
      "Redux",
    ],
    image: "/assets/images/sheepfinance.png",
    playStore:
      "https://play.google.com/store/apps/details?id=com.b13.sheep.finance",
    appStore: "https://apps.apple.com/us/app/sheep-finance/id1643414738",
    demo: "https://app.sheepfinance.com",
  },
  {
    title: "Tatuh",
    description:
      "An app for tattoo artists and people looking for tattoo artists.",
    tech: [
      "React Native",
      "i18n",
      "Expo Router",
      "Expo",
      "Zustand",
      "Expo Location",
      "GitHub Actions",
      "Expo Application Services",
    ],
    image: "/assets/images/tatuh.png",
    playStore:
      "https://play.google.com/store/apps/details?id=com.b13soft.tatuh",
    appStore: "https://apps.apple.com/id6740008221",
    demo: "https://tatuh.app/",
  },
  {
    title: "Quem sou eu?",
    description:
      "A casual game where players try to guess as many words as possible through clues given by friends.",
    tech: ["React Native", "Expo", "Expo Router", "Zustand"],
    image: "/assets/images/whoami.png",
    playStore:
      "https://play.google.com/store/apps/details?id=com.abelb13.whoami",
    appStore: "https://apps.apple.com/us/app/quem-sou-eu-quiz/id6740008221",
    demo: "",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="py-20 px-6 md:px-12">
      <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-12 text-white">
        Featured Projects
      </h2>

      <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-xl bg-white text-foreground shadow-xl p-6 flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300"
          >
            <div className="flex w-full bg-[linear-gradient(145deg,#5B0A91,#8B0A91,#AB0A91)] rounded-lg p-4 justify-center">
              <Image
                src={project.image}
                alt={project.title}
                width={300}
                height={300}
                className="rounded-full object-cover mb-4 border-2 bg-white"
              />
            </div>
            <h3 className="mt-5 text-xl font-semibold mb-2">{project.title}</h3>
            <p className="flex text-sm mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 text-xs mb-4">
              {project.tech.map((tech) => (
                <span key={tech} className="bg-white/20 px-2 py-1 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex flex-1 items-baseline flex-wrap gap-4 mt-auto">
              {project.demo && (
                <Link
                  href={project.demo}
                  target="_blank"
                  className="border border-purple-600 bg-purple-600 text-white py-2 px-4 rounded font-semibold text-sm hover:bg-white hover:text-black"
                >
                  Website
                </Link>
              )}
              {project.appStore && (
                <Link
                  href={project.appStore}
                  target="_blank"
                  className="border border-black bg-black text-white py-2 px-4 rounded font-semibold text-sm hover:bg-white hover:text-black"
                >
                  App Store
                </Link>
              )}
              {project.playStore && (
                <Link
                  href={project.playStore}
                  target="_blank"
                  className="border border-blue-500 bg-blue-600 text-white py-2 px-4 rounded font-semibold text-sm hover:bg-white hover:text-black"
                >
                  Play Store
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
