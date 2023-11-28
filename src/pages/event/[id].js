import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

import Loader from "@/components/Loader";

export default function List() {
  const router = useRouter();
  const { data: session, status } = useSession();
  if (status === "loading") {
    return <Loader />;
  }
  if (status === "unauthenticated") {
    router.push("/");
  }

  if (status === "authenticated") {
    return <div>List</div>;
  }
}
