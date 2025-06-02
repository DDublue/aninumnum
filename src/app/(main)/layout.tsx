import '../globals.css';
import Header from './_components/Header';
import Footer from './_components/Footer';

export default function MainLayout({children}: {children: React.ReactNode}) {
  return (
    <div className="relative min-h-svh flex flex-col">
      <Header />
      <main className="flex-1 w-full bg-background">
        {children}
      </main>
      <Footer />
    </div>
  );
}
