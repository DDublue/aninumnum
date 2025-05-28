import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'aninumnum',
  description: 'Songs via MyAnimeList to Spotify',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="overscroll-y-none">{children}</body>
    </html>
  );
}
