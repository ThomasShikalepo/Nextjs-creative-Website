import Image from "next/image";
import bg from "../../../../public/background/background.webp";
import { projectsData } from "../../data";
import ProjectList from "@/components/projects";
import RenderModel from "@/components/RenderModel";
import dynamic from "next/dynamic";


const Staff = dynamic(() => import("@/components/models/Staff", {ssr: false}))

export default function Home() {
  return (
    <main>
      <Image
        src={bg}
        alt="background-image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25 " priority sizes="100vw"
      />

      <ProjectList projects={projectsData} />

      <div className="flex items-center justify-center fixed top-16 lg:top-20 
      -z-10
      -translate-x-1/2 lg:translate-x-0
      left-1/2
      lg:-left-24 h-screen">
        <RenderModel >
          <Staff />
        </RenderModel>
      </div>
    </main>
  );
}