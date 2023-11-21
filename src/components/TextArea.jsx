export default function TextArea({ name, value, readonly, onchange }) {
  return (
    <div>
      <label className="mb-2 block text-xl font-medium text-gray-700 dark:text-white">
        {name}
      </label>
      <textarea
        type="text"
        className={`${
          readonly ? "pointer-events-none" : null
        } block h-44 w-full rounded-md border-transparent bg-gray-100 px-4 py-2 text-xl focus:border-gray-500 focus:ring-0 dark:bg-gray-800`}
        value={value}
        onChange={readonly ? undefined : onchange}
      />
    </div>
  );
}
