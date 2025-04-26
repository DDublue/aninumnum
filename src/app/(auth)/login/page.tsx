import LoginCard from "../_components/LoginCard";
import SpotifySignInButton from "../_components/SpotifySignInButton";

export default async function LoginPage() {
  return (
    <LoginCard>
      <div className="mb-6 text-center text-gray-600">
        Sign in with your Spotify account to continue.
      </div>
      <SpotifySignInButton />
    </LoginCard>
  )
};
