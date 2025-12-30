"use client";

import { FaLocationArrow } from "react-icons/fa";

const campusLinks = [
  {
    title: "南航官网",
    href: "https://www.nuaa.edu.cn/",
    desc: "学校要闻、通知公告、办事服务与资源入口。",
    tag: "nuaa.edu.cn",
  },
  {
    title: "教务网",
    href: "https://jw.nuaa.edu.cn/",
    desc: "选课、成绩、培养计划与教学通知一站办理。",
    tag: "jw.nuaa.edu.cn",
  },
];

const CampusLinks = () => {
  return (
    <section id="campus" className="py-16">
      <h1 className="heading">
        南航 <span className="text-purple">校园通道</span>
      </h1>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {campusLinks.map((item) => (
          <a
            key={item.title}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#0b1020] via-[#11182d] to-[#1e2745] p-6 transition-transform duration-200 hover:-translate-y-1 hover:border-white/30"
          >
            <div className="absolute inset-0 opacity-40 group-hover:opacity-60 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.25),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(14,165,233,0.2),transparent_35%)]" />
            <div className="relative flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/60">
              快速跳转
              <span className="rounded-full bg-white/10 px-2 py-1 text-[11px] text-white/80">
                {item.tag}
              </span>
            </div>
            <div className="relative mt-4 flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-white/80 leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-purple transition group-hover:scale-110">
                <FaLocationArrow />
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default CampusLinks;
