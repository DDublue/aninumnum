"use client";

import {signIn} from "@/lib/auth-client";
import {Button} from '@/components/ui/button';
import React, { ButtonHTMLAttributes } from 'react';
import {FaSpotify} from 'react-icons/fa';

interface SpotifySignInButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
}

export default function SpotifySignInButton({
  className,
  disabled = false,
  loading = false,
}: SpotifySignInButtonProps) {
  return (
    <Button
      type="submit"
      onClick={async () => {
        await signIn.social({
          provider: "spotify",
        })
      }}
      variant={"spotify"}
      className={className}
      disabled={disabled || loading}
    >
      <FaSpotify />
      Sign in with Spotify
    </Button>
  )
};
