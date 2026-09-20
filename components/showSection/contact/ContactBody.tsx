"use client";
import { ContactInfo } from "@/components/constant/enum";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCheck, Copy, Loader2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const FIELD_CLASS =
  "bg-gray-900 border-gray-600 text-gray-100 placeholder:text-gray-500 focus-visible:ring-blue-500 aria-invalid:border-red-500";

const VSCodeContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>();

  const [copied, setCopied] = useState(false);

  const onSubmit = async (data: Inputs) => {
    const formId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;

    if (!formId) {
      toast.error("The contact form is not configured yet.");
      return;
    }

    try {
      const emailBody = `${data.message}\n\nRegards,\n${data.name}\n${data.email}`;

      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          _replyto: data.email,
          _subject: data.subject,
          message: emailBody,
          _gotcha: "",
        }),
      });

      if (response.ok) {
        toast.success("Thank you for your message. It has been sent.");
        reset();
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Failed to send message. Please try again.");
    }
  };

  const contactInfoJSON = {
    email: "mahiyarahmanrafa@gmail.com",
    discord: "rafamahiya_20616",
    whatsapp: "Mahiya Rahman Rafa",
    github: "rafaswe",
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(
        JSON.stringify(contactInfoJSON, null, 2)
      );
      setCopied(true);
      toast.success("Contact details copied.");
      setTimeout(() => setCopied(false), 1200);
    } catch {
      toast.error("Could not copy to clipboard.");
    }
  };

  return (
    <div className="w-full p-3 pb-0 sm:p-6">
      <div className="w-full">
        <div className="mb-2 flex items-center">
          <span className="text-gray-500">{"// Contact Information"}</span>
        </div>

        <div className="relative mb-6 flex gap-2 overflow-x-auto rounded-lg border border-gray-700 bg-gray-800 p-3 pl-0 pt-4 font-mono text-xs text-gray-100 sm:gap-4 sm:p-6 sm:pl-0 sm:text-sm">
          <div
            aria-hidden="true"
            className="flex h-full shrink-0 flex-col gap-1.5 px-2 font-semibold text-gray-600 sm:px-4">
            {Array.from({ length: 6 }, (_, index) => (
              <p key={index}>{index + 1}</p>
            ))}
          </div>

          <div className="flex-1">
            <div className="mb-2 flex items-center">
              <span className="text-purple-400">const</span>
              <span className="ml-2 text-blue-300">contactInfo</span>
              <span className="ml-2 text-white">=</span>
              <span className="ml-2 text-yellow-400">{`{`}</span>
            </div>

            <div className="ml-8 space-y-1">
              {ContactInfo.map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="flex flex-1 items-center">
                    <span className="text-green-400">{`"${item.label.toLowerCase()}"`}</span>
                    <span className="mx-2 text-white">:</span>
                    <Link
                      href={item.link}
                      className="rounded-sm text-orange-400 transition-colors duration-300 hover:text-orange-300 hover:underline"
                      target="_blank"
                      rel="noreferrer">
                      {`"${item.value}"`}
                    </Link>
                    <span className="text-white">
                      {index < ContactInfo.length - 1 ? "," : ""}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-2 flex items-center">
              <span className="text-yellow-400">{`};`}</span>
            </div>
          </div>

          <button
            type="button"
            onClick={handleCopy}
            aria-label="Copy contact details"
            className={`absolute right-4 top-4 rounded-sm p-1 transition-transform duration-300 hover:bg-white/10 ${
              copied ? "scale-110" : "scale-100"
            }`}>
            {copied ? (
              <CheckCheck size={16} aria-hidden="true" />
            ) : (
              <Copy size={16} aria-hidden="true" />
            )}
          </button>
        </div>

        <div className="mb-1 flex items-center gap-2">
          <span className="text-sm text-gray-500">
            {"// Contact Form Component"}
          </span>
        </div>

        <div className="rounded-lg border border-gray-700 bg-gray-800 p-3 sm:p-5">
          <div className="mb-4">
            <h2 className="text-xl font-bold text-white">Get In Touch</h2>
            <p className="text-sm text-gray-400">
              {"Fill out the form below and I'll get back to you soon."}
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3.5" noValidate>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="space-y-1.5">
                <Label
                  htmlFor="contact-name"
                  className="text-xs uppercase tracking-wide text-gray-300">
                  Name
                </Label>
                <Input
                  id="contact-name"
                  className={FIELD_CLASS}
                  placeholder="Enter your name"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "contact-name-error" : undefined}
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && (
                  <p id="contact-name-error" role="alert" className="text-xs font-semibold text-red-400">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div className="space-y-1.5">
                <Label
                  htmlFor="contact-email"
                  className="text-xs uppercase tracking-wide text-gray-300">
                  Email
                </Label>
                <Input
                  id="contact-email"
                  type="email"
                  className={FIELD_CLASS}
                  placeholder="Enter your email"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "contact-email-error" : undefined}
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Enter a valid email address",
                    },
                  })}
                />
                {errors.email && (
                  <p id="contact-email-error" role="alert" className="text-xs font-semibold text-red-400">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-1.5">
              <Label
                htmlFor="contact-subject"
                className="text-xs uppercase tracking-wide text-gray-300">
                Subject
              </Label>
              <Input
                id="contact-subject"
                className={FIELD_CLASS}
                placeholder="Enter subject"
                aria-invalid={!!errors.subject}
                aria-describedby={errors.subject ? "contact-subject-error" : undefined}
                {...register("subject", { required: "Subject is required" })}
              />
              {errors.subject && (
                <p id="contact-subject-error" role="alert" className="text-xs font-semibold text-red-400">
                  {errors.subject.message}
                </p>
              )}
            </div>

            <div className="space-y-1.5">
              <Label
                htmlFor="contact-message"
                className="text-xs uppercase tracking-wide text-gray-300">
                Message
              </Label>
              <Textarea
                id="contact-message"
                rows={6}
                className={`${FIELD_CLASS} resize-none`}
                placeholder="Enter your message"
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "contact-message-error" : undefined}
                {...register("message", {
                  required: "Message is required",
                  validate: (value) =>
                    value.trim().length > 0 || "Message is required",
                })}
              />
              {errors.message && (
                <p id="contact-message-error" role="alert" className="text-xs font-semibold text-red-400">
                  {errors.message.message}
                </p>
              )}
            </div>

            <div className="flex gap-4">
              <Button
                type="button"
                variant="secondary"
                onClick={() => reset()}
                disabled={isSubmitting}
                className="border border-gray-600 bg-gray-700 text-gray-100 hover:bg-gray-600">
                Reset
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-600 text-white hover:bg-blue-700">
                {isSubmitting && (
                  <Loader2 className="animate-spin" aria-hidden="true" />
                )}
                {isSubmitting ? "Sending..." : "Submit"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VSCodeContactForm;
