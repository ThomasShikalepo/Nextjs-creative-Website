import React from "react";
import ItemLayout from "./ItemLayout";


const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
        <ItemLayout className={" col-span-full lg:col-span-8 row-span-2 flex-col items-start"}>
          <h2 className="text-xl md:text-2xl text-left w-full capitalize">
            Architect of Enchantment
          </h2>
          <p className="font-light text-sm sm:text-base md:text-lg space-y-4">
            Greetings, traveler! I am Thomas Shikalepo, a student at the University of Science and Technology (NUST). I am passionate about using magic (technology) to solve real-world problems.
          </p>
          <p className="font-light text-sm sm:text-base md:text-lg space-y-4">
            With tools like React and Next.js, I create smooth and powerful digital experiences. Using backend magic like Ballerina, I build fast and secure platforms guided by the principles of Jamstack.
          </p>
          <p className="font-light text-sm sm:text-base md:text-lg space-y-4">
            My projects include crafting hand-tracking game spells, a football analysis tool using Python, and a hospital management system. Each one reflects my love for creativity and innovation.
          </p>
          <p className="font-light text-sm sm:text-base md:text-lg space-y-4">
            Join me on this journey as I learn new skills, create magical solutions, and shape the future of the web!
          </p>


        </ItemLayout>

        <ItemLayout className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}>
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            24 <sub className="font-semibold text-base">Years of Age</sub>
          </p>
        </ItemLayout>

        <ItemLayout className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}>
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            2 <sub className="font-semibold text-base">Years of Experience</sub>
          </p>
        </ItemLayout>

        <ItemLayout className={" col-span-full sm:col-span-6 md:col-span-4 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=ThomasShikalepo&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FFFFFF&text_bold=false"
            alt="ThomasDeon"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api?username=ThomasShikalepo&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FFFFFF&text_bold=false"
            alt="ThomasDeon"
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

        <ItemLayout className={"col-span-full md:col-span-6 col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://github-readme-streak-stats.herokuapp.com?user=thomasshikalepo&theme=dark&hide_border=true&background=EB545400&ring=FEFE5B&currStreakNum=FEFE5B"
            alt="GitHub Streak"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api/pin/?username=ThomasShikalepo&repo=Nextjs-creative-Website&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FFFFFF&text_bold=false&description_lines_count=2"
            alt="ThomasDeon"
            loading="lazy"
          />
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
