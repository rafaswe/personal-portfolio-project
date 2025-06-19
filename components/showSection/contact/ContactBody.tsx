"use client";
import { CheckCheck, Copy } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Controller, useForm } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const VSCodeContactForm = () => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [isToastError, setIsToastError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [copied, setCopied] = useState(false);

  const showToast = (message: string, isError: boolean = false) => {
    setToastMessage(message);
    setIsToastError(isError);
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 3000);
  };

  const onSubmit = async (data: Inputs) => {
    setIsSubmitting(true);

    // Replace 'YOUR_FORMSPREE_ID' with your actual Formspree form ID
    const formId =
      process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID || "YOUR_FORMSPREE_ID";

    try {
      const emailBody = `${data.message}\n\nRegards,\n${data.name}\n${data.email}`;

      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          _replyto: data.email, // This sets the reply-to address
          _subject: data.subject, // This sets the email subject
          message: emailBody,
          // Additional Formspree fields
          _gotcha: "", // Honeypot field for spam protection
        }),
      });

      if (response.ok) {
        showToast("Thank you for your message. It has been sent.");
        reset();
      } else {
        const errorData = await response.json();
        console.error("Formspree error:", errorData);
        showToast("Something went wrong. Please try again.", true);
      }
    } catch (error) {
      console.error("Error sending the form data:", error);
      showToast("Failed to send message. Please try again.", true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    reset();
  };

  const contactInfo = [
    {
      label: "Email",
      value: "mahiyarahmanrafa@gmail.com",
      link: "mailto:mahiyarahmanrafa@gmail.com",
    },
    {
      label: "Discord",
      value: "rafamahiya_20616",
      link: "https://discordapp.com/users/rafamahiya_20616",
    },
    {
      label: "WhatsApp",
      value: "Mahiya Rahman Rafa",
      link: "https://wa.me/1631907601",
    },
    {
      label: "GitHub",
      value: "rafaswe",
      link: "https://github.com/rafaswe",
    },
  ];

  const contactInfoJSON = {
    email: "mahiyarahmanrafa@gmail.com",
    discord: "rafamahiya_20616",
    whatsapp: "Mahiya Rahman Rafa",
    github: "rafaswe",
  };

  const handleCopy = async () => {
    const text = JSON.stringify(contactInfoJSON, null, 2);
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };
  return (
    <div className="w-full p-6 pb-0">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-2">
          <span className="text-gray-500">{"// Contact Information"}</span>
        </div>
        <div className="bg-gray-800 rounded-lg relative flex text-gray-100 border border-gray-700 p-6 pl-0 gap-4 pt-4 mb-6 font-mono">
          {/* Line Numbers */}
          <div className="h-full px-4 text-gray-600 font-semibold flex flex-col gap-1.5">
            {Array(6)
              .fill("")
              .map((_, index) => (
                <p key={index}>{index + 1}</p>
              ))}
          </div>
          {/* Contact Information Display - JSON Format */}
          <div className="flex-1">
            <div className="flex items-center mb-2">
              <span className="text-purple-400">const</span>
              <span className="text-blue-300 ml-2">contactInfo</span>
              <span className="text-white ml-2">=</span>
              <span className="text-yellow-400 ml-2">{`{`}</span>
            </div>

            <div className="ml-8 space-y-1">
              {contactInfo.map((item, index) => {
                return (
                  <div key={index} className="flex items-center">
                    <div className="flex items-center flex-1">
                      <span className="text-green-400">{`"${item.label.toLowerCase()}"`}</span>
                      <span className="text-white mx-2">:</span>
                      <Link
                        href={item.link}
                        className="text-orange-400 hover:text-orange-300 transition-all hover:underline hover:cursor-pointer duration-300"
                        target="_blank"
                        rel="noreferrer">
                        {`"${item.value}"`}
                      </Link>
                      <span className="text-white">
                        {index < contactInfo.length - 1 ? "," : ""}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center mt-2">
              <span className="text-yellow-400">{`};`}</span>
            </div>
          </div>

          <button
            className={`absolute right-4 top-4 transition-transform duration-300 ${
              copied ? "scale-110" : "scale-100"
            }`}
            onClick={handleCopy}>
            {copied ? <CheckCheck size={16} /> : <Copy size={16} />}
          </button>
        </div>

        <div className="mb-1">
          <div className="flex items-center space-x-2">
            <span className="text-gray-500 text-sm">
              {"// Contact Form Component"}
            </span>
          </div>
        </div>

        {/* Form Section */}
        <div className="bg-gray-800 rounded-lg border border-gray-700 p-5">
          <div className="mb-4">
            <h2 className="text-xl font-bold text-white ">Get In Touch</h2>
            <p className="text-gray-400 text-sm">
              {"Fill out the form below and I'll get back to you soon."}
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3.5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-300 uppercase tracking-wide">
                  Name
                </label>
                <input
                  {...register("name", {
                    required: "Name is required",
                    minLength: { value: 1, message: "Name is required" },
                  })}
                  type="text"
                  className={`w-full px-3 py-2 bg-gray-900 border ${
                    errors.name ? "border-red-500" : "border-gray-600"
                  } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-100`}
                  placeholder="Enter your name"
                />
                {errors.name && (
                  <div className="text-red-400 text-xs font-semibold">
                    {errors.name.message}
                  </div>
                )}
              </div>

              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-300 uppercase tracking-wide">
                  Email
                </label>
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Enter a valid email address",
                    },
                  })}
                  type="email"
                  className={`w-full px-3 py-2 bg-gray-900 border ${
                    errors.email ? "border-red-500" : "border-gray-600"
                  } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-100`}
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <div className="text-red-400 text-xs font-semibold">
                    {errors.email.message}
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-300 uppercase tracking-wide">
                Subject
              </label>
              <input
                {...register("subject", {
                  required: "Subject is required",
                  minLength: { value: 1, message: "Subject is required" },
                })}
                type="text"
                className={`w-full px-3 py-2 bg-gray-900 border ${
                  errors.subject ? "border-red-500" : "border-gray-600"
                } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-100`}
                placeholder="Enter subject"
              />
              {errors.subject && (
                <div className="text-red-400 text-xs font-semibold">
                  {errors.subject.message}
                </div>
              )}
            </div>

            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-300 uppercase tracking-wide">
                Message
              </label>
              <Controller
                name="message"
                control={control}
                rules={{
                  required: "Message is required",
                  validate: {
                    minLength: (value: string) =>
                      value.trim().length >= 1 || "Message is required",
                  },
                }}
                render={({ field: { onChange, value } }) => (
                  <textarea
                    onChange={onChange}
                    value={value || ""}
                    rows={6}
                    className={`w-full px-3 py-2 bg-gray-900 border ${
                      errors.message ? "border-red-500" : "border-gray-600"
                    } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-100 resize-none`}
                    placeholder="Enter your message"
                  />
                )}
              />
              {errors.message && (
                <div className="text-red-400 text-xs font-semibold">
                  {errors.message.message}
                </div>
              )}
            </div>

            <div className="flex space-x-4">
              <button
                type="button"
                onClick={handleReset}
                disabled={isSubmitting}
                className="px-6 py-2 bg-gray-700 text-gray-100 font-semibold hover:bg-gray-600 transition-colors border border-gray-600 disabled:opacity-50 disabled:cursor-not-allowed">
                Reset
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-2 bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                {isSubmitting ? "Sending..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Toast Notification */}
      {toastVisible && (
        <div
          className={`fixed top-4 right-4 px-4 py-2 shadow-lg ${
            isToastError ? "bg-red-600" : "bg-green-600"
          } text-white z-50 border border-gray-700`}>
          {toastMessage}
        </div>
      )}
    </div>
  );
};

export default VSCodeContactForm;
