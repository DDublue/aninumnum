'use client';

import {Button} from '@/components/ui/button';
import {signIn} from '@/lib/auth-client';
import {FaSpotify} from 'react-icons/fa';

export default function SpotifySignInButton() {
  // Sign in function
  const handleSignIn = () => {
    signIn();
  };

  return (
    <Button
      onClick={handleSignIn}
      variant="spotify"
      className="w-full flex items-center justify-center gap-2"
    >
      <FaSpotify className="text-xl" />
      Sign in with Spotify
    </Button>
  )
};
