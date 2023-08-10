import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session }: any = useSession();

  console.log("test-session", session);

  return (
    <>
      <h2 className="text-center">Mode: {process.env.NEXT_PUBLIC_MODE}</h2>
      <div className="flex gap-4">
        <dia>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => signIn("google")}
          >
            Google
          </button>
        </dia>
        <dia>
          <button
            className="bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => signIn("discord")}
          >
            Discord
          </button>
        </dia>
      </div>
      {session && (
        <>
          <div>
            <h3>user:{session.user?.email}</h3>
            <h3>name:{session.user?.name}</h3>
            <h3>id:{session.user?.id}</h3>
          </div>
          <dia>
            <button
              className="bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => signOut()}
            >
              signOut
            </button>
          </dia>
        </>
      )}
    </>
  );
}
