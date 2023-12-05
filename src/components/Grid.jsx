import Card from "./Card";
import Loader from "./Loader";

import { useEffect, useState } from "react";

export default function Grid({ filter }) {
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState([]);
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const res = await fetch(`/api/event?name=${filter}`, { method: "GET" });
      const data = await res.json();
      if (!ignore) {
        setEvents(data);
        setLoading(false);
      }
    }
    let ignore = false;
    fetchData();
    return () => {
      ignore = true;
    };
  }, [filter]);
  if (loading) {
    return <Loader />;
  }
  return (
    <div className="my-12 grid grid-cols-1 place-items-center gap-y-9 md:grid-cols-3">
      {events.map((event) => {
        return <Card key={event.id} event={event} />;
      })}
    </div>
  );
}
