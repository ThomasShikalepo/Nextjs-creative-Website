"use client";
import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from 'sonner'
import { motion } from "framer-motion";



const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    }
  }
}

const item = {
  hidden: { scale: 0 },
  show: { scale: 1 }

}

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const sendEmail = (params) => {

    const toastId = toast.loading("Casting your message into the cosmic flow. Please wait as the enchantment completes...")
    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        params,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
          
        }
      )
      .then(
        () => {
          toast.success("Your message has been sent through the fabric of the cosmos. Await the whisper of magic as I craft my response!", { id: toastId })
        },
        (error) => {
          toast.error("The enchantment faltered while sending your message. Please try again and let the magic flow anew!", { id: toastId })
        }
      );
  };
  const onSubmit = (data) => {
    const templateParams = {
      to_name: "Thomas Deon",
      from_name: data.name,
      reply_to: data.email,
      message: data.message,
    };

    sendEmail(templateParams);
  };



  return (

    <>


      <Toaster richColors={true} />

      <motion.form

        variants={container}
        initial="hidden"
        animate="show"

        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md w-full flex flex-col items-center justify-center space-y-4"
      >
        <motion.input
          variants={item}
          type="text"
          placeholder="name"
          {...register("name", {
            required: "This Field is required!",
            minLength: {
              value: 3,
              message: "The name should be at least 3 character long",
            },
          })}
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
        />
        {errors.name && (
          <span className="inline-block text-accent">{errors.name.message}</span>
        )}
        <motion.input
          variants={item}
          type="email"
          placeholder="email"
          {...register("email", { required: "Email is required!" })}
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
        />

        {errors.email && (
          <span className="inline-block text-accent">{errors.email.message}</span>
        )}
        <motion.textarea
          placeholder="message"
          {...register("message", {
            required: "Message is required!",
            maxLength: {
              value: 500,
              message: "Message should be less than 500 characters long",
            },
            minLength: {
              value: 10,
              message: "Message should be more than 10 characters long",
            },
          })}
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
        />
        {errors.message && (
          <span className="inline-block text-accent">
            {errors.message.message}
          </span>
        )}

        <motion.input
          variants={item}
          value="Send Mystic Message"
          className="px-10 py-4 rounded-md shadow-lg bg-background border border-accent/30 border-solid hover:shadow-glass-sm backdrop-blur-sm text-foreground focus:outline-none 
  focus:ring-2 focus:ring-accent/50 cursor-pointer capitlize"
          type="submit"
        />
      </motion.form>
    </>
  );
}