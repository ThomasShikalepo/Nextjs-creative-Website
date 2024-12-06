import Image from "next/image";
import bg from "../../../../public/background/contact-background.png";
import Form from "@/components/projects/contacts/Form";


export default function Contact() {
  return (
    <main>
      {/* Background Image */}
      <Image
        src={bg}
        alt="background-image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25"
        layout="fill" // Ensures it covers the entire viewport size
        priority // Makes sure the background image loads quickly
      />

      <article className="relative w-full flex flex-col items-center justify-center space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <h1 className="text-accent font-semibold text-center text-4xl capitalize whitespace-nowrap">
            Summon the Wizard
          </h1>
          <p className="text-center font-light">
            Step into the circle of enchantment and weave your words into the fabric of the cosmos. Whether you seek to conjure collaborations, unlock mysteries, or simply share tales of adventure, your messages are treasured scrolls within this realm. Use the form below to send your missive through the ethereal network, and await the whisper of magic in the response.
          </p>

        </div>
        <Form/>
      </article>
    </main>
  );
}
