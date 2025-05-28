'use client';

import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {type User, type Session} from 'better-auth/types';
import {signOut} from '@/lib/auth-client';
import {useRouter} from 'next/navigation';
import React, {ButtonHTMLAttributes} from 'react';
import Link from 'next/link';

function getInitials(str: string): string {
  return str
    .split(' ')
    .filter(word => word.length > 0)
    .map(word => word[0].toUpperCase())
    .join('');
}

type SessionData = {
  session: Session;
  user: User;
} | null;

interface UserDropdownMenuProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  session: SessionData;
}

export default function UserDropdownMenu({session}: UserDropdownMenuProps) {
  const router = useRouter();
  let image;
  let initials;

  if (session) {
    image = session.user.image;
    initials = getInitials(session.user.name);
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus:outline-none focus:ring-[2px] focus:ring-offset-2 focus:ring-primary rounded-full bg-background shadow-md">
        <Avatar>
          {image ? <AvatarImage src={image} /> : ''}
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem asChild>
          <Link href="/account" prefetch={false}>
            Account
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          variant="destructive"
          onClick={async () => {
            await signOut({
              fetchOptions: {
                onSuccess: () => {
                  router.push('/');
                  router.refresh();
                },
              },
            });
          }}
        >
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
