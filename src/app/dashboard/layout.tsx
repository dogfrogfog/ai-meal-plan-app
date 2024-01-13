export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mt-6 p-6 max-w-5xl mx-auto shadow bg-popover rounded-xl">
      {children}
    </div>
  );
}
