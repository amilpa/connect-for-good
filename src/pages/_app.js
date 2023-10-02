import "@/styles/globals.css";
import { useEffect } from "react";
import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const getLayout = Component.getLayout || ((page) => page);
  useEffect(() => {
    import("preline");
  }, []);
  return (
    <SessionProvider session={session}>
      {getLayout(<Component {...pageProps} />)}
    </SessionProvider>
  );
}
