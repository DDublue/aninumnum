import {Button} from '@/components/ui/button';
import {
  NavigationMenu,
  // NavigationMenuContent,
  // NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  // NavigationMenuTrigger,
  // navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import {auth} from '@/lib/auth';
import {headers} from 'next/headers';
import Link from 'next/link';
import UserDropdownMenu from './header/UserDropdownMenu';

export default async function Header() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <header className="sticky top-0 left-0 z-50 w-full bg-neutral-light rounded-b-md border-b-0 border-b-border">
      <section className="container flex h-14 mx-auto max-w-7xl z-20 items-center gap-4 px-4 md:px-6 lg:px-8">
        {/* Name and redirect to landing page if clicked */}
        <div className="flex w-24 mr-8">
          <div className="flex items-center">
            <p className="text-xl">
              <Link href="/" prefetch={false}>
                Aninumnum
              </Link>
            </p>
          </div>
        </div>
        {/* navbar here with (potential) features (shadcn or nav) */}
        <NavigationMenu className="flex">
          <NavigationMenuList>
            <NavigationMenuLink asChild>
              <Link href="/create" prefetch={false}>
                Create
              </Link>
            </NavigationMenuLink>
          </NavigationMenuList>
        </NavigationMenu>
        {/* Account/setting/logout button */}

        <div className="ml-auto">
          {!session ? (
            <Button asChild>
              <Link href="/login" prefetch={false}>
                Login
              </Link>
            </Button>
          ) : (
            <UserDropdownMenu session={session} />
          )}
        </div>
      </section>
    </header>
  );
}
