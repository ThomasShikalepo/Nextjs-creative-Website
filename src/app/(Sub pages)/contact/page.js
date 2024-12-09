import Image from "next/image";
import bg from "../../../../public/background/contact-background.png";
import Form from "@/components/contacts/Form";


export default function Contact() {
  return (
    <main>
      {/* Background Image */}
      <Image
        src={bg}
        sizes="100vw "
        alt="background-image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25"
        layout="fill" // Ensures it covers the entire viewport size
        priority // Makes sure the background image loads quickly
      />

      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <h1 className="text-accent font-semibold text-center text-5xl capitalize whitespace-nowrap">
            Summon the Wizard
          </h1>
          <p className="text-center font-light text-lg xs:text-xl">
            Step into the circle of magic and share your message. <br />
            Whether you are seeking collaboration, answers to mysteries,<br /> or simply wish to connect,
            your words are treasures in this realm.Use the form below to send your missive, and await a magical reply.
          </p>
        </div>
        <Form />
      </article>

    </main>
  );
}
