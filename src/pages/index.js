import Image from "next/image";

import Background from "../assets/Background.png";
import SignInButton from "@/components/SignInButton";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <div className="mx-auto max-w-[85rem] px-4 pt-12 sm:px-6 lg:px-8 lg:pt-0">
        {/* Grid */}
        <div className="grid gap-4 md:grid-cols-2 md:items-center md:gap-8 xl:gap-20">
          <div>
            <h1 className="block text-3xl font-bold text-gray-800 dark:text-white sm:text-4xl lg:text-6xl lg:leading-tight">
              Empower Change,{" "}
              <span className="text-blue-600">ConnectForGood</span>
            </h1>
            <p className="mt-3 text-lg text-gray-800 dark:text-gray-400">
              Make a difference in your community with ConnectForGood. We
              connect you with local non-profits that need your help.
            </p>
            {/* Buttons */}
            <div className="mt-7 grid w-full gap-3 sm:inline-flex">
              <SignInButton>
                Get started
                <svg
                  className="h-2.5 w-2.5"
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                  />
                </svg>
              </SignInButton>
              <a
                className="inline-flex items-center justify-center gap-x-3.5 rounded-md border px-4 py-3 text-center text-sm font-medium shadow-sm transition hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white dark:border-gray-800 dark:text-white dark:shadow-slate-700/[.7] dark:hover:border-gray-600 dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800 lg:text-base"
                href="#"
              >
                Go to dashboard
              </a>
            </div>
          </div>
          {/* End Col */}
          <div className="relative ml-4">
            <img
              className="rounded-md lg:h-[42rem] lg:w-[55rem]"
              src="https://images.unsplash.com/photo-1665686377065-08ba896d16fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&h=800&q=80"
              alt="Image Description"
            />
            <div className="absolute inset-0 -z-[1] -mb-4 -ml-4 mr-4 mt-4 h-full w-full rounded-md bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 dark:from-slate-800 dark:via-slate-900/0 dark:to-slate-900/0 lg:-mb-6 lg:-ml-6 lg:mr-6 lg:mt-6" />
            {/* SVG*/}
            <div className="absolute bottom-0 left-0">
              <svg
                className="ml-auto h-auto w-2/3 text-white dark:text-slate-900"
                width={630}
                height={451}
                viewBox="0 0 630 451"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x={531}
                  y={352}
                  width={99}
                  height={99}
                  fill="currentColor"
                />
                <rect
                  x={140}
                  y={352}
                  width={106}
                  height={99}
                  fill="currentColor"
                />
                <rect
                  x={482}
                  y={402}
                  width={64}
                  height={49}
                  fill="currentColor"
                />
                <rect
                  x={433}
                  y={402}
                  width={63}
                  height={49}
                  fill="currentColor"
                />
                <rect
                  x={384}
                  y={352}
                  width={49}
                  height={50}
                  fill="currentColor"
                />
                <rect
                  x={531}
                  y={328}
                  width={50}
                  height={50}
                  fill="currentColor"
                />
                <rect
                  x={99}
                  y={303}
                  width={49}
                  height={58}
                  fill="currentColor"
                />
                <rect
                  x={99}
                  y={352}
                  width={49}
                  height={50}
                  fill="currentColor"
                />
                <rect
                  x={99}
                  y={392}
                  width={49}
                  height={59}
                  fill="currentColor"
                />
                <rect
                  x={44}
                  y={402}
                  width={66}
                  height={49}
                  fill="currentColor"
                />
                <rect
                  x={234}
                  y={402}
                  width={62}
                  height={49}
                  fill="currentColor"
                />
                <rect
                  x={334}
                  y={303}
                  width={50}
                  height={49}
                  fill="currentColor"
                />
                <rect x={581} width={49} height={49} fill="currentColor" />
                <rect x={581} width={49} height={64} fill="currentColor" />
                <rect
                  x={482}
                  y={123}
                  width={49}
                  height={49}
                  fill="currentColor"
                />
                <rect
                  x={507}
                  y={124}
                  width={49}
                  height={24}
                  fill="currentColor"
                />
                <rect
                  x={531}
                  y={49}
                  width={99}
                  height={99}
                  fill="currentColor"
                />
              </svg>
            </div>
            {/* End SVG*/}
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>
      {/* End Hero */}
    </>
  );
}