import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Button from "@/components/Button";
import Layout from "@/components/Navbar/layout";

import Loader from "@/components/Loader";

export default function List() {
  const router = useRouter();
  const { id } = router.query;
  const { data: session, status } = useSession();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let ignore = false;
    const fetchUser = async () => {
      setLoading(true);
      const res = await fetch(`/api/event/${id}`, {
        method: "GET",
      });
      if (ignore) return;
      const data = await res.json();
      if (data.error === "Event not found") {
        router.push("/dashboard");
      }
      setEvent(data);
      setLoading(false);
    };
    if (session) {
      fetchUser();
    }
    return () => {
      ignore = true;
    };
  }, [session, id, router]);

  async function register(e) {
    e.preventDefault();
    console.log("Register");
  }

  async function deleteEvent(e) {
    e.preventDefault();
    setLoading(true);
    const res = await fetch(`/api/event/${id}`, {
      method: "DELETE",
    });
    setLoading(false);
    router.push("/dashboard");
  }

  if (status === "loading") {
    return <Loader />;
  }
  if (status === "unauthenticated") {
    router.push("/");
  }

  if (!event) return <Loader />;

  if (status === "authenticated") {
    return (
      <div className="py-8">
        <h1 className="text-2xl font-semibold md:text-4xl">Event details</h1>
        <form className="mt-4 flex flex-col gap-6">
          <div>
            <label className="mb-2 block text-xl font-medium text-gray-700 dark:text-white">
              Event name
            </label>
            <input
              type="text"
              className="block w-full rounded-md border-transparent bg-gray-100 px-4 py-2 text-xl focus:border-gray-500 focus:ring-0 dark:bg-gray-800"
              placeholder="Event name"
              value={event.eventname}
              readOnly={true}
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
              value={event.eventgoals}
              readOnly={true}
            />
          </div>
          <div>
            <label className="mb-2 block text-xl font-medium text-gray-700 dark:text-white"></label>
            Expected time
            <input
              type="text"
              className="block w-full rounded-md border-transparent bg-gray-100 px-4 py-2 text-xl focus:border-gray-500 focus:ring-0 dark:bg-gray-800"
              placeholder="Expected time(in days)"
              value={event.eventexpectedtime}
              readOnly={true}
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
              value={event.eventdescription}
              readOnly={true}
            />
          </div>
          {session.user.role === "volunteer" ? (
            <Button
              variant={"solid"}
              classNames={"mt-4"}
              clickHandle={register}
            >
              Register
            </Button>
          ) : (
            <>
              <Button
                variant={"solid"}
                classNames={"mt-4"}
                clickHandle={deleteEvent}
              >
                See applications
              </Button>
              <Button variant={"solid"} clickHandle={deleteEvent}>
                Delete event
              </Button>
            </>
          )}
        </form>
      </div>
    );
  }
}

List.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
