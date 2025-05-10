import '../globals.css';

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col min-h-svh">
      <div className="flex flex-auto items-center justify-center">
        {children}
      </div>
    </div>
  );
}
