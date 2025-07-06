import { auth } from "@/lib/auth"
import { headers } from "next/headers";
import SongSearchBar from "../_components/SongSearchBar";


export default async function MALFullPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <section className="min-h-svh">
      <div className="container mx-auto max-w-7xl min-h-full">
        <div className="grid grid-cols-2">
          <SongSearchBar />
          <SongSearchBar />
          <SongSearchBar />
          <SongSearchBar />
          <SongSearchBar />
        </div>
      </div>
    </section>
  )
}
