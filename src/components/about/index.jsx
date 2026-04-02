import React from "react";
import ItemLayout from "./ItemLayout";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="text-xl md:text-2xl text-left w-full capitalize">
            Thomas Shikalepo
          </h2>
          <p className="font-light text-sm sm:text-base md:text-lg space-y-4">
            Hello, I&apos;m Thomas Shikalepo, a passionate developer driven by a
            desire to create impactful, innovative solutions. I thrive on the
            challenge of solving real-world problems with technology, constantly
            exploring new tools and techniques to expand my skills and push the
            boundaries of what&apos;s possible.
          </p>
          <p className="font-light text-sm sm:text-base md:text-lg space-y-4">
            My expertise spans both frontend and backend development, where I
            focus on building intuitive, secure, and scalable digital
            experiences. I believe in creating solutions that are not only
            functional but also user-centered and efficient. With a strong
            foundation in web technologies such as JavaScript, Java, and
            Ballerina, I&apos;m constantly refining my approach to building
            robust platforms.
          </p>
          <p className="font-light text-sm sm:text-base md:text-lg space-y-4">
            I am passionate about collaborating with others, sharing ideas, and
            learning from diverse perspectives. As I continue to grow in my
            journey as a developer, I am excited to contribute to projects that
            drive positive change, enhance social wellbeing, and make a lasting
            impact.
          </p>
          <p className="font-light text-sm sm:text-base md:text-lg space-y-4">
            Join me as I continue exploring the ever-evolving landscape of
            technology, pushing the limits of creativity and innovation to shape
            the future of the web.
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            24 <sub className="font-semibold text-base">Years of Age</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent flex-col items-start gap-2"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            2+ <sub className="font-semibold text-base">Years of Experience</sub>
          </p>
          <p className="font-light text-sm text-white/60">
            Consistently building projects, pushing commits, and shipping real-world solutions since 2023.
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full sm:col-span-6 md:col-span-4 !p-0"}
        >
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=ThomasShikalepo&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FFFFFF&text_bold=false"
            alt="ThomasDeon"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <img
            className="w-full h-auto min-h-[200px] object-contain"
            src="https://github-readme-stats.vercel.app/api?username=ThomasShikalepo&show_icons=true&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&cache_seconds=86400"
            alt="Thomas Deon GitHub Stats"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full "}>
          <img
            className="w-full h-auto"
            src="https://skillicons.dev/icons?i=js,css,html,python,java,php,mysql,react,threejs,vscode,github,kafka"
            alt="ThomasDeon"
            loading="lazy"
          />
        </ItemLayout>



        <ItemLayout className={"col-span-full md:col-span-6 flex-col items-start gap-3"}>
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" className="text-accent">
              <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8V1.5Z"/>
            </svg>
            <span className="text-accent font-semibold text-base">ThomasShikalepo /</span>
            <a
              href="https://github.com/ThomasShikalepo/Nextjs-creative-Website"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-semibold text-base hover:text-accent transition-colors"
            >
              Nextjs-creative-Website
            </a>
          </div>
          <p className="font-light text-sm text-white/70">
            A modern, animated creative portfolio built with Next.js, Tailwind CSS, and Three.js — showcasing projects, skills, and experience with a cinematic feel.
          </p>
          <div className="flex flex-wrap gap-2 mt-1">
            <span className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">Next.js</span>
            <span className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60 border border-white/10">Three.js</span>
            <span className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60 border border-white/10">Tailwind CSS</span>
            <span className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60 border border-white/10">JavaScript</span>
          </div>
        </ItemLayout>

        <div className="col-span-full md:col-span-6 !p-0 flex  justify-center">
          <img
            className="w-3/4 md:w-1/2 items-center h-auto rounded-lg shadow-md"
            src="/background/IMG-20231009-WA0042(1).png"
            alt="Portrait of Thomas Shikalepo"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutDetails;
