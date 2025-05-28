import '../globals.css';
import Header from './_components/Header';
import Footer from './_components/Footer';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 w-full bg-background">
        <div className="container mx-auto max-w-7xl">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
