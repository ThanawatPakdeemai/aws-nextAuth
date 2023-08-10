import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  console.log("test-env-mode", process.env.NEXT_PUBLIC_MODE);
  console.log("test-env-url", process.env.NEXTAUTH_URL);
  console.log("test-env-url-public", process.env.NEXT_PUBLIC_NEXTAUTH_URL);
  console.log("test-env-id", process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID);
  console.log("test-env-secret", process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET);

  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
