export default function Button({ children, classNames, variant, clickHandle }) {
  let classValues = "";
  if (variant == "solid") {
    classValues =
      "inline-flex items-center justify-center gap-2 rounded-md border border-transparent bg-blue-500 px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800";
  }
  if (variant == "soft") {
    classValues =
      "inline-flex items-center justify-center gap-2 rounded-md border border-transparent bg-blue-100 px-4 py-3 text-sm font-semibold text-blue-500 ring-offset-white transition-all hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2";
  }

  return (
    <button onClick={clickHandle} className={`${classValues} ${classNames}`}>
      {children}
    </button>
  );
}
