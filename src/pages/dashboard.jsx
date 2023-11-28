import Button from "@/components/Button";
import Grid from "@/components/Grid";
import Loader from "@/components/Loader";
import Layout from "@/components/Navbar/layout";

import Head from "next/head";

import { AiOutlinePlus } from "react-icons/ai";

import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

import Link from "next/link";

export default function Dashboard() {
  const router = useRouter();
  const { data: session, status } = useSession();
  if (status === "loading") {
    return <Loader />;
  }
  if (status === "unauthenticated") {
    router.push("/");
  }

  if (status === "authenticated") {
    return (
      <div className="pt-8">
        <Head>
          <title>Dashboard | View events</title>
        </Head>
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold md:text-4xl">Events</h1>
          {session.user.role === "organization" && (
            <Link href={"/add"}>
              <Button variant={"solid"} classNames={"hidden md:block"}>
                Create new event
              </Button>
            </Link>
          )}
          <Button variant={"solid"} classNames={"block px-2 py-2 md:hidden"}>
            <AiOutlinePlus className="w-5 h-5" />
          </Button>
        </div>
        <div className="mt-12">
          <div>
            <label
              htmlFor="hs-trailing-button-add-on-with-icon"
              className="sr-only"
            >
              Label
            </label>
            <div className="flex rounded-lg shadow-sm">
              <input
                type="text"
                id="hs-trailing-button-add-on-with-icon"
                name="hs-trailing-button-add-on-with-icon"
                placeholder="Search events"
                className="block w-full px-4 py-3 text-sm border-gray-200 shadow-md rounded-s-lg focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:focus:ring-gray-600"
              />
              <button
                type="button"
                className="inline-flex h-[2.875rem] w-[2.875rem] flex-shrink-0 items-center justify-center gap-x-2 rounded-e-md border border-transparent bg-blue-600 text-sm font-semibold text-white hover:bg-blue-700 disabled:pointer-events-none disabled:opacity-50 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              >
                <svg
                  className="flex-shrink-0 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx={11} cy={11} r={8} />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <Grid />
      </div>
    );
  }
}

Dashboard.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
