import Navbar from "../components/Navbar";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: AuthLayoutProps) {
  return (
    <>
      <Navbar />
      <main className="flex justify-center items-start p-6 min-h-screen">
        {children}
      </main>
    </>
  );
}
