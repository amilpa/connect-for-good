import { useEffect, useState } from "react";

import { FaBuilding } from "react-icons/fa6";
import { MdVolunteerActivism } from "react-icons/md";

import Loader from "@/components/Loader";

import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function Choose() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { data: session, status } = useSession();
  useEffect(() => {
    if (session) {
      if (session.user.role !== "not registered") router.push("/dashboard");
      else setLoading(false);
    }
  }, [router, session]);
  if (status === "unauthenticated") router.push("/");
  if (status === "loading") return null;

  async function handleClick(option) {
    setLoading(true);
    const res = await fetch("/api/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: session.user.name,
        email: session.user.email,
        role: option,
      }),
    });
    setLoading(false);
    if (res.status === 200) router.push("/dashboard");
  }
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="min-h-screen">
          <div className="absolute left-1/2 top-20 -translate-x-1/2 md:top-40">
            <h1 className="text-center text-4xl font-semibold">
              Choose your user type
            </h1>
            <div className="mt-12 flex flex-col gap-16 md:flex-row">
              <div
                onClick={() => handleClick("organization")}
                className="flex h-[250px] w-[300px] cursor-pointer flex-col gap-2 rounded-lg border-4 border-blue-500 p-4 transition-all hover:bg-blue-500 hover:text-white"
              >
                <FaBuilding className="text-2xl font-semibold" />
                <h1 className="text-2xl font-semibold">Organization</h1>
                <p className="text-justify">
                  A non-profit organization that does not operate for the
                  primary purpose of generating non-profit.
                </p>
              </div>
              <div
                onClick={() => handleClick("volunteer")}
                className="flex h-[250px] w-[300px] cursor-pointer flex-col gap-2 rounded-lg border-4 border-blue-500 p-4 transition-all hover:bg-blue-500 hover:text-white"
              >
                <MdVolunteerActivism className="text-2xl font-semibold" />
                <h1 className="text-2xl font-semibold">Volunteer</h1>
                <p className="text-justify">
                  A volunteer is someone who chooses to offer their time and
                  skills willingly, motivated by a desire to make a positive
                  impact on others and the community at large.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
