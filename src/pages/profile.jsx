import Layout from "@/components/Navbar/layout";
import { useSession } from "next-auth/react";
import Button from "@/components/Button";
import { CiEdit } from "react-icons/ci";
import { FaCheck } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Profile() {
  const { data: session, status } = useSession();
  console.log(session);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    let ignore = true;
    const fetchUser = async () => {
      setLoading(true);
      const res = await fetch("/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const user = await res.json();
      console.log(user);
      if (ignore) setUserData(user);
      setLoading(false);
    };
    fetchUser();
    return () => {
      ignore = false;
    };
  }, [session]);

  if (status === "loading") return null;
  if (status === "unauthenticated") router.push("/");

  return (
    <div className="mt-8 flex min-h-[800px] rounded-lg shadow-lg">
      <div className="relative flex flex-col items-center gap-6 bg-slate-100 px-12 pt-12">
        {session ? (
          <img
            className="h-40 w-40 rounded-full"
            src={session.user.image}
            alt="profile picture"
          />
        ) : null}
        <Button variant={"solid"}>
          Edit profile
          <CiEdit />
        </Button>
        <div className="mt-4 flex gap-12">
          <div>
            <h1 className="text-xl font-semibold">Last event:</h1>
            <p className="mt-1 text-base">Seven months ago</p>
          </div>
          <div>
            <h1 className="text-xl font-semibold">Location:</h1>
            <p className="mt-1 text-base">Kochi</p>
          </div>
        </div>
        <div className="mt-4 flex flex-col items-center gap-1">
          <p className="flex items-center gap-1 text-lg">
            <SlCalender />
            Joined 4th September 2023
          </p>
          <p className="flex items-center gap-1 text-lg">
            <FaCheck />
            35 event completed
          </p>
        </div>
      </div>
      <div className="flex-grow px-12 pt-16">
        <h1 className="text-2xl font-semibold md:text-4xl">Profile details</h1>
        <form className="mt-4 flex flex-col gap-6">
          <div>
            <label className="mb-2 block text-xl font-medium text-gray-700 dark:text-white">
              Name
            </label>
            <input
              type="text"
              className="block w-full rounded-md border-transparent bg-gray-100 px-4 py-2 text-xl focus:border-gray-500 focus:ring-0 dark:bg-gray-800"
              placeholder="Event name"
              // value={event.eventName}
              // onChange={(e) =>
              //   setEvent({ ...event, eventName: e.target.value })
              // }
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
              // value={event.eventGoals}
              // onChange={(e) =>
              //   setEvent({ ...event, eventGoals: e.target.value })
              // }
            />
          </div>
          <div>
            <label className="mb-2 block text-xl font-medium text-gray-700 dark:text-white"></label>
            Expected time
            <input
              type="text"
              className="block w-full rounded-md border-transparent bg-gray-100 px-4 py-2 text-xl focus:border-gray-500 focus:ring-0 dark:bg-gray-800"
              placeholder="Expected time(in days)"
              // value={event.eventExpectedTime}
              // onChange={(e) =>
              //   setEvent({ ...event, eventExpectedTime: e.target.value })
              // }
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
              // value={event.eventDescription}
              // onChange={(e) =>
              //   setEvent({ ...event, eventDescription: e.target.value })
              // }
            />
          </div>
          <Button
            variant={"solid"}
            classNames={"mt-4"}
            // clickHandle={clickHandle}
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}

Profile.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
