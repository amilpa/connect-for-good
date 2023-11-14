import Card from "./Card";
import { useState, useEffect } from "react";
export default function Grid() {
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/event", { method: "GET" });
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
  }, []);
  if (loading) {
    return (
      <div className="absolute inset-0 flex animate-pulse items-center justify-center space-x-2 bg-white">
        <div className="h-8 w-8 rounded-full bg-blue-400"></div>
        <div className="h-8 w-8 rounded-full bg-blue-400"></div>
        <div className="h-8 w-8 rounded-full bg-blue-400"></div>
      </div>
    );
  }
  return (
    <div className="my-12 grid grid-cols-1 place-items-center gap-y-9 md:grid-cols-3">
      {events.map((event) => {
        return <Card key={event.id} event={event} />;
      })}
      <Card event={{ eventname: "Beach cleaning" }} />
      <Card event={{ eventname: "Beach cleaning" }} />
      <Card event={{ eventname: "Beach cleaning" }} />
      <Card event={{ eventname: "Beach cleaning" }} />
      <Card event={{ eventname: "Beach cleaning" }} />
      <Card event={{ eventname: "Beach cleaning" }} />
      <Card event={{ eventname: "Beach cleaning" }} />
      <Card event={{ eventname: "Beach cleaning" }} />
      <Card event={{ eventname: "Beach cleaning" }} />
      <Card event={{ eventname: "Beach cleaning" }} />
      <Card event={{ eventname: "Beach cleaning" }} />
    </div>
  );
}
