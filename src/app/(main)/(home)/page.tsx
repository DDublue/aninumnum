import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import {headers} from 'next/headers';
import Link from "next/link";

export default async function HomePage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <section className="w-full bg-accent-dark h-[500px] sm:h-[450px] md:h-[400px]">
      <div className="container mx-auto max-w-7xl h-full flex flex-col justify-center items-center">
        <div className="flex flex-col items-center gap-3">
          <div className="text-3xl">Get Songs into Your Spotify!</div>
          <Button>
            {!session ? (
              <Link href="/login" prefetch={false}>
                Get Started
              </Link>
            ) : (
              <Link href="/create" prefetch={false}>
                Create a Playlist
              </Link>
            )}
          </Button>
        </div>
      </div>
    </section>
  );
}
