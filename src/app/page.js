import Image from "next/image";
import bg from "../../public/background/DALL·E 2024-12-03 02.06.57 - An African-themed enchanted desert at night.webp"
import RenderModel from "@/components/RenderModel"
import Wizard from "@/components/models/Wizard";
import Navigation from "@/components/navigation";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image src={bg} alt="background image" fill className="w-full h-full object-cover object-center opacity-25"/>

      <div className="w-full h-screen">
         {/* navigation and 3rd model */}
         <Navigation/>

         <RenderModel>
          <Wizard />
         </RenderModel>
      </div>
    </main>
  );
}
