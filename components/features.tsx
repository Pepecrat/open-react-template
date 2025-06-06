import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";
import FeaturesImage from "@/public/images/features.png";

export default function Features() {
  return (
    <section id="features" className="relative">
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShapeGray}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-80 -translate-x-[120%] opacity-50"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-[#EF5EA5]/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-[#EF5EA5]/50">
              <span className="inline-flex bg-linear-to-r from-[#3aa181] to-[#EF5EA5] bg-clip-text text-transparent">
                Powerful Features
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),#EF5EA5,var(--color-gray-50),#3aa181,var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Simplicity meets power
            </h2>
            <p className="text-lg text-[#EF5EA5]/65">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur excepteur sint occaecat
              cupidatat.
            </p>
          </div>
          <div className="flex justify-center pb-4 md:pb-12" data-aos="fade-up">
            <Image
              className="max-w-none"
              src={FeaturesImage}
              width={1104}
              height={384}
              alt="Features"
            />
          </div>
          {/* Items */}
          <div className="mx-auto grid max-w-sm gap-12 sm:max-w-none sm:grid-cols-2 md:gap-x-14 md:gap-y-16 lg:grid-cols-3">
            <article>
              <svg
                className="mb-3 fill-[#3aa181]"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
              >
                <path d="M0 0h14v17H0V0Zm2 2v13h10V2H2Z" />
                <path
                  fillOpacity=".48"
                  d="m16.295 5.393 7.528 2.034-4.436 16.412L5.87 20.185l.522-1.93 11.585 3.132 3.392-12.55-5.597-1.514.522-1.93Z"
                />
              </svg>
              <h3 className="mb-1 font-nacelle text-[1.0625rem] font-semibold text-gray-200">
                Excepteur sint occaecat
              </h3>
              <p className="text-[#EF5EA5]/65">
                Keep your company's lights on with customizable, iterative, and
                structured workflows.
              </p>
            </article>
            <article>
              <svg
                className="mb-3 fill-[#3aa181]"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
              >
                <path
                  fillOpacity=".48"
                  d="M8.5 24 0 15.5V8.4L8.5 0l8.4 8.5v7.1L8.5 24Zm0-2.828L14.9 15.1V8.9L8.5 2.828 2.1 8.9v6.2l6.4 6.072Z"
                />
                <path d="M8.5 15.5 4.9 11.9l1.4-1.4 2.2 2.1 4.2-4.2 1.4 1.4-5.6 5.7Z" />
              </svg>
              <h3 className="mb-1 font-nacelle text-[1.0625rem] font-semibold text-gray-200">
                Ut enim ad minim
              </h3>
              <p className="text-[#EF5EA5]/65">
                Keep your company's lights on with customizable, iterative, and
                structured workflows.
              </p>
            </article>
            <article>
              <svg
                className="mb-3 fill-[#3aa181]"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
              >
                <path
                  fillOpacity=".48"
                  d="M11 0v24l13-6V6L11 0ZM9 1.2 0 6v12l9 4.8V1.2Z"
                />
              </svg>
              <h3 className="mb-1 font-nacelle text-[1.0625rem] font-semibold text-gray-200">
                Duis aute irure dolor
              </h3>
              <p className="text-[#EF5EA5]/65">
                Keep your company's lights on with customizable, iterative, and
                structured workflows.
              </p>
            </article>
            <article>
              <svg
                className="mb-3 fill-[#3aa181]"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
              >
                <path d="M15 8.5c0 .465-.015.928-.043 1.387l-3.833 1.911c-.345.345-.79.631-1.286.83L8.5 9.5 11.043 7A7.46 7.46 0 0 1 15 8.5Z" />
                <path
                  fillOpacity=".48"
                  d="M8.5 24C3.806 24 0 20.194 0 15.5S3.806 7 8.5 7s8.5 3.806 8.5 8.5-3.806 8.5-8.5 8.5Zm0-2c3.59 0 6.5-2.91 6.5-6.5S12.09 9 8.5 9 2 11.91 2 15.5 4.91 22 8.5 22Z"
                />
                <path d="M8.5 9.5c-.465 0-.928.015-1.387.043L5.202 6.71A7.46 7.46 0 0 1 8.5 6c.465 0 .928.015 1.387.043L11.798 8.29A7.46 7.46 0 0 0 8.5 9.5Z" />
              </svg>
              <h3 className="mb-1 font-nacelle text-[1.0625rem] font-semibold text-gray-200">
                Reprehenderit in voluptate
              </h3>
              <p className="text-[#EF5EA5]/65">
                Keep your company's lights on with customizable, iterative, and
                structured workflows.
              </p>
            </article>
            <article>
              <svg
                className="mb-3 fill-[#3aa181]"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
              >
                <path
                  fillOpacity=".48"
                  d="M12 8.8a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                />
                <path d="m7.454 2.891.891-.454L7.437.655l-.891.454a12 12 0 0 0 0 21.382l.89.454.91-1.781-.892-.455a10 10 0 0 1 0-17.818ZM17.456 1.11l-.891-.454-.909 1.782.891.454a10 10 0 0 1 0 17.819l-.89.454.908 1.781.89-.454a12 12 0 0 0 0-21.382Z" />
              </svg>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Flexible Workflows
              </h3>
              <p className="text-indigo-200/65">
                Track progress across custom flows for your team. Find the right
                balance for the user, privacy and security.
              </p>
            </article>
            <article>
              <svg
                className="mb-3 fill-indigo-500"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
              >
                <path
                  fillOpacity=".48"
                  d="M19 8h5v2h-5V8Zm-4 5h9v2h-9v-2Zm9 5H11v2h13v-2Z"
                />
                <path d="M19.406 3.844 6.083 20.497.586 15 2 13.586l3.917 3.917L17.844 2.595l1.562 1.25Z" />
              </svg>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Unified Timeline
              </h3>
              <p className="text-indigo-200/65">
                Track progress across custom flows for your team. Find the right
                balance for the user, privacy and security.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
