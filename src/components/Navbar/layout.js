import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 sm:px-8">{children}</main>
    </>
  );
}
