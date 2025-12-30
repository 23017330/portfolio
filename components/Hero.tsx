"use client";

import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TypewriterEffect } from "./ui/TypewriterEffect";

const Hero = () => {
  const words = [
    { text: "打造", className: "text-purple dark:text-purple" },
    { text: "高性能", className: "text-purple dark:text-purple" },
    { text: "三维", className: "text-purple dark:text-purple" },
    { text: "互动", className: "text-purple dark:text-purple" },
    { text: "体验", className: "text-purple dark:text-purple" },
  ];

  return (
    <div
      id="home"
      className="relative min-h-screen overflow-hidden pb-20 pt-36"
    >
      {/* Background (z-0) */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div className="h-full w-full bg-[url('/bg.png')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/45" />
      </div>

      {/* Spotlights (z-10) */}
      <div className="pointer-events-none absolute inset-0 z-10" aria-hidden="true">
        <Spotlight
          className="absolute -top-40 -left-10 h-screen md:-left-32 md:-top-20"
          fill="white"
        />
        <Spotlight
          className="absolute top-10 left-full h-[80vh]"
          fill="purple"
        />
        <Spotlight
          className="absolute top-28 left-80 h-[80vh] w-[50vw]"
          fill="#87CEEB"
        />
        <Spotlight
          className="absolute -top-20 left-1/2 h-[40vh] w-[30vw] -translate-x-1/2 transform"
          fill="white"
        />
      </div>

      {/* Foreground content (z-20) */}
      <div className="relative z-20 flex justify-center my-20">
        <div className="flex max-w-[89vw] flex-col items-center justify-center md:max-w-2xl lg:max-w-[60vw]">
          <img
            src="/dp.jpg"
            alt="profile-pic"
            className="mb-5 h-80 w-80 rounded-full border-2 border-white object-cover"
          />

          <h2 className="max-w-80 text-center text-xs uppercase tracking-widest text-white">
            马子琛 · 南航 IMIS
          </h2>

          <TypewriterEffect
            className="my-5 text-center text-white md:text-5xl lg:text-6xl"
            words={words}
          />

          <p className="mb-4 text-center text-sm text-white md:text-lg md:tracking-wider lg:text-2xl">
            你好，我是马子琛，南京航空航天大学信息管理与信息系统专业在读生。
            擅长用 Next.js、Three.js 与动效设计，做出有温度的数字体验。
          </p>

          <div className="flex flex-col md:flex-row md:flex-wrap gap-3 w-full justify-center">
            <a
              href="https://github.com/23017330"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <MagicButton
                title="GitHub · 开源作品"
                icon={<FaLocationArrow />}
                position="right"
                containerClassName="w-full md:w-56"
              />
            </a>
            <a
              href="https://www.nuaa.edu.cn/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <MagicButton
                title="南航官网"
                icon={<FaLocationArrow />}
                position="right"
                containerClassName="w-full md:w-44"
                otherClasses="!bg-[#0e1427]"
              />
            </a>
            <a
              href="为https://aao-eas.nuaa.edu.cn/eams/login.action"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <MagicButton
                title="教务网入口"
                icon={<FaLocationArrow />}
                position="right"
                containerClassName="w-full md:w-44"
                otherClasses="!bg-[#0e1427]"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
