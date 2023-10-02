import { signIn } from "next-auth/react";
export default function SignInButton({ children, classNames }) {
  return (
    <button
      onClick={() => signIn("google")}
      className={
        classNames
          ? classNames
          : "inline-flex items-center justify-center gap-x-3 rounded-md border border-transparent bg-blue-600 px-4 py-3 text-center text-sm font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800 lg:text-base"
      }
    >
      {children}
    </button>
  );
}
