import LoginCard from '../_components/LoginCard';
import SpotifySignInButton from '../_components/SpotifySignInButton';

export default async function LoginPage() {
  return (
    <LoginCard>
      <SpotifySignInButton />
    </LoginCard>
  );
}
