"use client";

import Image, { StaticImageData } from "next/image";
import Workflow01 from "@/public/images/workflow-01.png";
import Workflow02 from "@/public/images/workflow-02.png";
import Workflow03 from "@/public/images/workflow-03.png";

export default function Workflows() {
  return (
    <section id="workflows" className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-8 sm:py-12 md:py-16 lg:py-20 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1]">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-8 sm:pb-12 md:pb-16 lg:pb-20 text-center">
            <div className="inline-flex items-center gap-2 sm:gap-3 pb-2 sm:pb-3 before:h-px before:w-4 sm:before:w-6 md:before:w-8 before:bg-linear-to-r before:from-transparent before:to-[#EF5EA5]/50 after:h-px after:w-4 sm:after:w-6 md:after:w-8 after:bg-linear-to-l after:from-transparent after:to-[#EF5EA5]/50">
              <span className="inline-flex bg-linear-to-r from-[#3aa181] to-[#EF5EA5] bg-clip-text text-transparent text-sm sm:text-base">
                Seamless Workflows
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),#EF5EA5,var(--color-gray-50),#3aa181,var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-3 sm:pb-4 font-nacelle text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-transparent leading-tight">
              From idea to production in minutes
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-[#EF5EA5]/65 max-w-2xl mx-auto leading-relaxed">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
          </div>

          {/* Workflow items */}
          <div className="mx-auto max-w-5xl space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24">
            {/* 1st item */}
            <WorkflowItem
              workflow={{
                img: Workflow01,
                tag: "Setup",
                title: "Simplify team collaboration",
                excerpt:
                  "Quickly apply filters to refine your issues lists and create custom views.",
              }}
            />
            {/* 2nd item */}
            <WorkflowItem
              workflow={{
                img: Workflow02,
                tag: "Configure",
                title: "Powerful and flexible team settings",
                excerpt:
                  "Quickly apply filters to refine your issues lists and create custom views.",
              }}
              reverse
            />
            {/* 3rd item */}
            <WorkflowItem
              workflow={{
                img: Workflow03,
                tag: "Organize",
                title: "Effortlessly manage and organize tasks",
                excerpt:
                  "Quickly apply filters to refine your issues lists and create custom views.",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function WorkflowItem({
  workflow,
  reverse = false,
}: {
  workflow: {
    img: StaticImageData;
    tag: string;
    title: string;
    excerpt: string;
  };
  reverse?: boolean;
}) {
  return (
    <div
      className={`flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:flex-row xl:items-center ${
        reverse ? "xl:flex-row-reverse" : ""
      }`}
    >
      {/* Image */}
      <div className="relative flex-1 py-8 sm:py-10 md:py-12 xl:py-0 before:absolute before:inset-0 before:bg-linear-to-t before:from-gray-800/50 before:via-gray-900/25 before:to-gray-900/25 before:backdrop-blur-sm xl:before:bg-none">
        <div className="relative flex justify-center before:absolute before:-inset-2 sm:before:-inset-3 md:before:-inset-4 before:animate-[spin_3s_linear_infinite] before:rounded-full before:border before:border-transparent before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[background:conic-gradient(from_180deg,transparent,--theme(--color-slate-400))_border-box] after:absolute after:-inset-2 sm:after:-inset-3 md:after:-inset-4 after:animate-[spin_2s_linear_infinite_reverse] after:rounded-full after:border after:border-transparent after:[mask-composite:exclude_!important] after:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:[background:conic-gradient(from_180deg,transparent,--theme(--color-slate-400))_border-box]">
          <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-gray-800 p-1.5 sm:p-2 before:pointer-events-none before:absolute before:inset-0 before:bg-linear-to-br before:from-gray-800/50 before:via-transparent before:to-transparent">
            <div className="group relative overflow-hidden rounded-lg sm:rounded-xl before:pointer-events-none before:absolute before:inset-0 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-[#3aa181]/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-32 sm:after:-left-40 md:after:-left-48 after:-top-32 sm:after:-top-40 md:after:-top-48 after:z-30 after:h-48 sm:after:h-56 md:after:h-64 after:w-48 sm:after:w-56 md:after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-[#3aa181] after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100">
              <Image
                className="rounded-lg sm:rounded-xl w-full h-auto"
                src={workflow.img}
                width={600}
                height={360}
                alt={workflow.title}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 xl:max-w-md">
        <div className="text-center xl:text-left px-4 sm:px-6 xl:px-0">
          <div className="mb-4 sm:mb-5 md:mb-6">
            <div className="inline-flex rounded-full bg-gray-700/30 px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-medium text-gray-200 before:bg-gray-700/70">
              <span className="bg-linear-to-r from-[#3aa181] to-[#EF5EA5] bg-clip-text text-transparent">
                {workflow.tag}
              </span>
            </div>
          </div>
          <h3 className="mb-3 sm:mb-4 md:mb-5 font-nacelle text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-200 leading-tight">
            {workflow.title}
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-[#EF5EA5]/65 leading-relaxed max-w-lg mx-auto xl:mx-0">
            {workflow.excerpt}
          </p>
        </div>
      </div>
    </div>
  );
}
