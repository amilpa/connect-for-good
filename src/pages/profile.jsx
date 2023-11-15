import { useSession } from "next-auth/react";

import Button from "@/components/Button";
import Layout from "@/components/Navbar/layout";
import Loader from "@/components/Loader";
import Input from "@/components/Input";
import TextArea from "@/components/TextArea";

import { CiEdit } from "react-icons/ci";
import { FaCheck } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";

import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Profile() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [update, setUpdate] = useState(false);
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
        body: JSON.stringify({ email: session.user.email }),
      });
      const data = await res.json();
      console.log(data);
      setUserData(data.data);
      if (ignore) setUserData(data.data);
      setLoading(false);
    };
    if (session) {
      fetchUser();
    }
    return () => {
      ignore = false;
    };
  }, [session]);

  if (status === "loading") return null;
  if (status === "unauthenticated") router.push("/");

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="mt-8 flex h-[800px] rounded-lg shadow-lg">
          <div className="relative flex flex-col items-center gap-6 bg-slate-100 px-12 pt-12">
            {session ? (
              <img
                width={40}
                height={40}
                className="h-40 w-40 rounded-full"
                src={session.user.image}
                alt="profile picture"
              />
            ) : null}
            <Button clickHandle={() => setUpdate(true)} variant={"solid"}>
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
          <div className="h-[800px] flex-grow overflow-y-scroll px-12 py-16">
            <h1 className="text-2xl font-semibold md:text-4xl">
              Profile details
            </h1>
            <form className="mt-4 flex flex-col gap-6">
              <Input
                name={"Name"}
                value={userData.name}
                readonly={"readOnly"}
              />
              <Input
                name={"Email"}
                value={userData.email}
                readonly={"readOnly"}
              />
              <Input
                name={"Experience"}
                value={
                  userData.experience ? userData.experience : "(Not given)"
                }
                readonly={"readOnly"}
              />
              <Input
                name={"Education"}
                value={userData.education ? userData.education : "(Not given)"}
                readonly={"readOnly"}
              />
              <Input
                name={"Occupation"}
                value={
                  userData.occupation ? userData.occupation : "(Not given)"
                }
                readonly={"readOnly"}
              />
              <TextArea
                name={"About"}
                value={userData.about ? userData.about : "(Not given)"}
                readonly={"readOnly"}
              />

              {update ? (
                <Button
                  variant={"solid"}
                  classNames={"mt-4"}
                  // clickHandle={clickHandle}
                >
                  Submit
                </Button>
              ) : null}
            </form>
          </div>
        </div>
      )}
    </>
  );
}

Profile.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
