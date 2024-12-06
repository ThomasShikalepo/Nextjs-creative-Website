import clsx from "clsx";
import React from "react";

const ItemLayout = ({ children, className }) => {
  return (
    <div
      className={clsx(
        "custom-bg p-8 rounded-xl flex items-center justify-center space-y-8",
        className
      )}
    >
      {children}
    </div>
  );
};

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-8 w-full">

        <ItemLayout className={"col-span-8 row-span-2 flex-col items-start"}>
        <h2 className="text-2xl text-left w-full capitalize">
  Architect of Enchantment
</h2>
<p className="font-light">
  My journey in web development is fueled by an array of mystical tools and languages, with JavaScript at the core of my craft. I wield frameworks like React and Next.js with precision, creating seamless portals (websites) that connect realms (users) across the digital universe. The ancient art of the Jamstack empowers me to craft fast, secure, and dynamic experiences, while my skills ensure every creation is not only functional but also visually captivating. Join me as I explore new spells and technologies to shape the future of the web.
</p>


        </ItemLayout>

        <ItemLayout className={"col-span-4 text-accent"}>
          <p className="font-semibold w-full text-left text-5xl">
            24 <sub className="font-semibold text-base">Years of Age</sub>
        </p>
        </ItemLayout>

        <ItemLayout className={"col-span-4 text-accent"}>
        <p className="font-semibold w-full text-left text-5xl">
            2 <sub className="font-semibold text-base">Years of Experience</sub>
        </p>
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
 