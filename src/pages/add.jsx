import Button from "@/components/Button";
import Layout from "@/components/Navbar/layout";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Add() {
  const router = useRouter();
  const { status } = useSession();
  const [loading, setLoading] = useState(false);
  const [event, setEvent] = useState({
    eventName: "",
    eventGoals: "",
    eventExpectedTime: "",
    eventDescription: "",
  });

  async function clickHandle(e) {
    e.preventDefault();
    if (
      event.eventName === "" ||
      event.eventGoals === "" ||
      event.eventExpectedTime === "" ||
      event.eventDescription === ""
    ) {
      alert("Please fill all fields");
    }
    setLoading(true);
    const res = await fetch("/api/event", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(event),
    });
    setEvent({
      eventName: "",
      eventGoals: "",
      eventExpectedTime: "",
      eventDescription: "",
    });
    setLoading(false);
  }

  if (status === "loading") {
    return (
      <div className="absolute inset-0 flex animate-pulse items-center justify-center space-x-2 bg-white">
        <div className="h-8 w-8 rounded-full bg-blue-400"></div>
        <div className="h-8 w-8 rounded-full bg-blue-400"></div>
        <div className="h-8 w-8 rounded-full bg-blue-400"></div>
      </div>
    );
  }
  if (status === "unauthenticated") {
    router.push("/");
  }

  return (
    <>
      {loading && (
        <div className="absolute inset-0 flex animate-pulse items-center justify-center space-x-2 bg-white">
          <div className="h-8 w-8 rounded-full bg-blue-400"></div>
          <div className="h-8 w-8 rounded-full bg-blue-400"></div>
          <div className="h-8 w-8 rounded-full bg-blue-400"></div>
        </div>
      )}
      <div className="py-8">
        <h1 className="text-2xl font-semibold md:text-4xl">Add event</h1>
        <form className="mt-4 flex flex-col gap-6">
          <div>
            <label className="mb-2 block text-xl font-medium text-gray-700 dark:text-white">
              Event name
            </label>
            <input
              type="text"
              className="block w-full rounded-md border-transparent bg-gray-100 px-4 py-2 text-xl focus:border-gray-500 focus:ring-0 dark:bg-gray-800"
              placeholder="Event name"
              value={event.eventName}
              onChange={(e) =>
                setEvent({ ...event, eventName: e.target.value })
              }
            />
          </div>
          <div>
            <label className="mb-2 block text-xl font-medium text-gray-700 dark:text-white">
              Goals
            </label>
            <input
              type="text"
              className="block w-full rounded-md border-transparent bg-gray-100 px-4 py-2 text-xl focus:border-gray-500 focus:ring-0 dark:bg-gray-800"
              placeholder="Event goals"
              value={event.eventGoals}
              onChange={(e) =>
                setEvent({ ...event, eventGoals: e.target.value })
              }
            />
          </div>
          <div>
            <label className="mb-2 block text-xl font-medium text-gray-700 dark:text-white"></label>
            Expected time
            <input
              type="text"
              className="block w-full rounded-md border-transparent bg-gray-100 px-4 py-2 text-xl focus:border-gray-500 focus:ring-0 dark:bg-gray-800"
              placeholder="Expected time(in days)"
              value={event.eventExpectedTime}
              onChange={(e) =>
                setEvent({ ...event, eventExpectedTime: e.target.value })
              }
            />
          </div>
          <div>
            <label className="mb-2 block text-xl font-medium text-gray-700 dark:text-white">
              Event description
            </label>
            <textarea
              type="text"
              className="block h-44 w-full rounded-md border-transparent bg-gray-100 px-4 py-2 text-xl focus:border-gray-500 focus:ring-0 dark:bg-gray-800"
              placeholder="Description"
              value={event.eventDescription}
              onChange={(e) =>
                setEvent({ ...event, eventDescription: e.target.value })
              }
            />
          </div>
          <Button
            variant={"solid"}
            classNames={"mt-4"}
            clickHandle={clickHandle}
          >
            Submit
          </Button>
        </form>
      </div>
    </>
  );
}

Add.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
