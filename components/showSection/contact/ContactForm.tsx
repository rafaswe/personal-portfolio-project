"use client";

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
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  // console.log(watch("example"));
  return (
    <div className="">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-2 gap-3 pr-3">
        <div className="flex flex-col gap-1 col-span-1">
          <p className="tracking-wide">NAME</p>
          <input
            // defaultValue="test"
            {...register("name")}
            className="rounded-none outline-2 bg-primary p-2 focus:outline outline-tertiary"
          />
        </div>

        {/* include validation with required or other standard HTML validation rules */}
        <div className="flex flex-col gap-1 col-span-1">
          <p className="tracking-wide">EMAIL</p>
          <input
            // defaultValue="test"
            {...register("email")}
            className="rounded-none outline-2 bg-primary p-2 focus:outline outline-tertiary"
          />
          {errors.email && <span>This field is required</span>}
        </div>
        <div className="flex flex-col gap-1 col-span-2">
          <p className="tracking-wide">SUBJECT</p>
          <input
            // defaultValue="test"
            {...register("subject")}
            className="rounded-none outline-2 bg-primary p-2 focus:outline outline-tertiary"
          />
          {errors.email && <span>This field is required</span>}
        </div>
        <div className="flex flex-col gap-1 col-span-2">
          <p className="tracking-wide">SUBJECT</p>
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
                // placeholder="Write your message here..."
                rows={4}
                onChange={onChange}
                value={value}
                className="rounded-none outline-2 bg-primary p-2 focus:outline outline-tertiary"
              />
            )}
          />
          {errors.email && <span>This field is required</span>}
        </div>
        <div className="col-span-2">
          <button
            type="submit"
            className="px-4 py-1 text-primary font-semibold  bg-tertiary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
