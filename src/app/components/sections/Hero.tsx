import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 lg:mr-28 py-16 text-white">
      <div className="max-w-3xl text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold leading-tight">
          {"Hi, I'm Abel – "}
          <br />
          <span>Software Engineer</span> & <span>Creative Coder</span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl font-light text-gray-100">
          Sr. Software Engineer{" "}
          <span className="font-semibold text-rose-500">|</span> Front End
          Developer <span className="font-semibold text-rose-500">|</span> React
          Native <span className="font-semibold text-rose-500">|</span> React JS
        </p>

        <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
          <Link
            href="#projects"
            className="bg-rose-500 hover:bg-rose-600 text-white py-3 px-6 rounded-lg text-sm font-semibold shadow-md"
          >
            View Projects
          </Link>
          <Link
            href="/downloads/resume_EN 2025.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-lg text-sm font-semibold shadow-md"
          >
            Download CV
          </Link>
        </div>
      </div>

      <div className="mb-10 md:mb-0">
        <Image
          src="/assets/images/avatar.png"
          alt="Abel 3D avatar"
          width={300}
          height={300}
          className="drop-shadow-2xl"
        />
      </div>
    </section>
  );
}
