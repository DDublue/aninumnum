'use client';

import {Button} from '@/components/ui/button';
import {auth} from '@/lib/auth';
import React, { ButtonHTMLAttributes } from 'react';
import {FaSpotify} from 'react-icons/fa';

interface SpotifySignInButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  showIcon?: boolean;
  disabled?: boolean;
  loading?: boolean;
}

export default function SpotifySignInButton({
  className,
  showIcon = true,
  disabled = false,
  loading = false,
  ...props
}: SpotifySignInButtonProps) {
  return (
    <Button
      type="submit"
      variant={"spotify"}
      className={className}
      disabled={disabled || loading}
      {...props}
    >
      {showIcon && <FaSpotify />}
      Sign in with Spotify
    </Button>
  )
};
