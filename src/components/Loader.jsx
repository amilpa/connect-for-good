export default function Loader({ classNames }) {
  return (
    <div
      className={`${classNames} absolute inset-0 flex animate-pulse items-center justify-center space-x-2 bg-white`}
    >
      <div className="h-8 w-8 rounded-full bg-blue-400"></div>
      <div className="h-8 w-8 rounded-full bg-blue-400"></div>
      <div className="h-8 w-8 rounded-full bg-blue-400"></div>
    </div>
  );
}
