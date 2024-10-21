import Navbar from '@app/ui/meterials/navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-blue-900 h-full">
      <Navbar />
      {children}
    </div>
  );
}
