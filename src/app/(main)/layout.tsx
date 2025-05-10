import '../globals.css';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="">
      {children}
    </div>
  );
}
