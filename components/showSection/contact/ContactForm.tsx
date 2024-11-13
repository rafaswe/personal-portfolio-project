"use client";

import Toast from "@/components/common/toast.component";
import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [isToastError, setIsToastError] = useState(false); // State for error detection

  const showToast = (message: string, isError: boolean = false) => {
    setToastMessage(message);
    setIsToastError(isError); // Update the toast error state
    setToastVisible(true);
  };

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const formId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;

    try {
      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
        }),
      });

      if (response.ok) {
        showToast("Thank you for your message. It has been sent.");
        reset(); // Reset the form after submission
      } else {
        showToast("Something went wrong. Please try again.", true); // Show error
      }
    } catch (error) {
      console.error("Error sending the form data:", error);
      showToast("There was an error sending your message.", true); // Show error
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-2 gap-y-3 gap-x-4 pr-3">
        {/* Form Fields */}
        <div className="flex flex-col gap-1 col-span-1">
          <p className="tracking-wide">NAME</p>
          <input
            {...register("name", { required: true, minLength: 1 })}
            className="rounded-none outline-2 bg-primary p-2 focus:outline outline-tertiary"
          />
          {errors.name && (
            <span className="text-xs text-tertiary font-semibold">
              Enter valid name
            </span>
          )}
        </div>
        <div className="flex flex-col gap-1 col-span-1">
          <p className="tracking-wide">EMAIL</p>
          <input
            {...register("email", {
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Entered value does not match email format",
              },
            })}
            type="email"
            className="rounded-none outline-2 bg-primary p-2 focus:outline outline-tertiary"
          />
          {errors.email && (
            <span className="text-xs text-tertiary font-semibold">
              Enter valid email address
            </span>
          )}
        </div>
        <div className="flex flex-col gap-1 col-span-2">
          <p className="tracking-wide">SUBJECT</p>
          <input
            {...register("subject", { required: true, minLength: 1 })}
            className="rounded-none outline-2 bg-primary p-2 focus:outline outline-tertiary"
          />
          {errors.email && (
            <span className="text-xs text-tertiary font-semibold">
              Enter valid subject
            </span>
          )}
        </div>
        <div className="flex flex-col gap-1 col-span-2">
          <p className="tracking-wide">MESSAGE</p>
          <Controller
            name="message"
            control={control}
            rules={{
              required: true,
              validate: {
                maxLength: (value: string) => value.length >= 1,
              },
            }}
            render={({ field: { onChange, value } }) => (
              <textarea
                cols={90}
                rows={4}
                onChange={onChange}
                value={value}
                className="rounded-none outline-2 bg-primary p-2 focus:outline outline-tertiary"
              />
            )}
          />
          {errors.email && (
            <span className="text-xs text-tertiary font-semibold">
              Enter valid message
            </span>
          )}
        </div>
        <div className="col-span-2 flex gap-3">
          <button
            type="reset"
            className="px-4 py-1 text-primary font-semibold  bg-white"
            onClick={() => reset()}>
            Reset
          </button>

          <button
            type="submit"
            className="px-4 py-1 text-primary font-semibold  bg-tertiary">
            Submit
          </button>
        </div>
      </form>

      {/* Toast Notification */}
      <Toast
        message={toastMessage}
        isVisible={toastVisible}
        isError={isToastError} // Pass the isError prop
        onClose={() => setToastVisible(false)}
      />
    </div>
  );
};

export default ContactForm;
