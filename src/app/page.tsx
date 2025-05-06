import Image from "next/image";
import HeroSection from "./components/sections/Hero";
import FeaturedProjects from "./components/sections/FeaturedProjects";

export default function Home() {
  const socialLinks = [
    { href: "https://github.com/Abel13", img: "github.png", label: "GitHub" },
    {
      href: "https://www.youtube.com/@AbelDutraUI",
      img: "youtube.png",
      label: "YouTube",
    },
    {
      href: "https://www.linkedin.com/in/abeldutra/",
      img: "linkedin.png",
      label: "LinkedIn",
    },
    {
      href: "https://www.instagram.com/b13.abel",
      img: "instagram.png",
      label: "Instagram",
    },
    {
      href: "https://www.twitch.tv/abeldutraui",
      img: "twitch.png",
      label: "Twitch",
    },
    {
      href: "https://www.buymeacoffee.com/abeldutraui",
      img: "bmc.png",
      label: "Buy Me a Coffee",
    },
  ];

  return (
    <div className="bg-[linear-gradient(145deg,#5B0A91,#8B0A91,#E43F5A)] flex flex-col min-h-screen font-[var(--font-sans)]  text-[var(--color-foreground)]">
      <header className="flex bg-white px-10 justify-between gap-5 p-4 shadow-2xl">
        <div className="flex items-center gap-2">
          <Image
            src="/assets/images/logo.png"
            alt="Logo icon"
            width={45}
            height={45}
            priority
          />
          <span className="text-lg font-semibold tracking-tight">
            ABEL DUTRA UI
          </span>
        </div>

        <nav className="flex gap-2 items-center">
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              title={link.label}
            >
              <Image
                src={`/assets/images/${link.img}`}
                alt={`${link.label} icon`}
                width={36}
                height={36}
              />
            </a>
          ))}
        </nav>
      </header>

      <main className="flex flex-col flex-1">
        <HeroSection />
        <FeaturedProjects />
      </main>

      <footer className="py-6 text-sm text-center text-white">
        <p>{`Made with {} and ❤️ by Abel`}</p>
      </footer>
    </div>
  );
}
