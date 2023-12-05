import Link from "next/link";
export default function Card({ event }) {
  return (
    <Link href={`/event/${event.id}`}>
      <div className="group flex w-[350px] cursor-pointer flex-col overflow-hidden rounded-xl border bg-white shadow-sm dark:border-gray-700 dark:bg-slate-900 dark:shadow-slate-700/[.7]">
        <img
          className="h-auto w-full rounded-t-xl transition-all group-hover:scale-105"
          src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80"
          alt="Image Description"
        />
        <div className="p-4 md:p-5">
          <h3 className="text-center text-2xl font-semibold text-gray-800 dark:text-white">
            {event.eventname}
          </h3>
        </div>
      </div>
    </Link>
  );
}
