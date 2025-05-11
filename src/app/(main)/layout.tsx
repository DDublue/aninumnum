import '../globals.css';
import Header from './_components/Header';
import Footer from './_components/Footer';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative">
      <Header />
      <main className="w-full bg-accent">
        <div className="container mx-auto max-w-7xl">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
