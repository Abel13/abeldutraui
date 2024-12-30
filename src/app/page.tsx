"use client";
import Image from "next/image";
import {
  RiGithubLine,
  RiInstagramLine,
  RiLinkedinLine,
  RiTwitchLine,
  RiYoutubeLine,
} from "react-icons/ri";
import under_construction_animation from "../assets/lotties/under-construction.json";
import buyMeACoffee from "@/assets/bmc-logo.svg";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Home() {
  const github = "https://github.com/Abel13";
  const youtube = "https://www.youtube.com/@AbelDutraUI";
  const linkedin = "https://www.linkedin.com/in/abeldutra/";
  const instagram = "https://www.instagram.com/abel.o.dutra";
  const twitch = "https://www.twitch.tv/abeldutraui";
  const bmc = "https://www.buymeacoffee.com/abeldutraui";

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex w-full border-b justify-center">
        <div className="flex w-full justify-between gap-5 items-center m-4 md:w-7/12">
          <h1 className="md:text-xl text-sm">ABEL DUTRA UI</h1>
          <div className="flex text-sm">
            <a href={github} target="blank">
              <RiGithubLine style={{ marginInline: 8 }} size={24} />
            </a>
            <a href={youtube} target="blank">
              <RiYoutubeLine style={{ marginInline: 8 }} size={24} />
            </a>

            <a href={linkedin} target="blank">
              <RiLinkedinLine style={{ marginInline: 8 }} size={24} />
            </a>

            <a href={instagram} target="blank">
              <RiInstagramLine style={{ marginInline: 8 }} size={24} />
            </a>

            <a href={twitch} target="blank">
              <RiTwitchLine style={{ marginInline: 8 }} size={24} />
            </a>

            {/* <a href={bmc} target="blank">
              <Image
                src={buyMeACoffee}
                height={22}
                width={30}
                alt=""
              />
            </a> */}
          </div>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center h-full">
        <DotLottieReact data={under_construction_animation} loop autoplay />
      </div>
    </main>
  );
}
