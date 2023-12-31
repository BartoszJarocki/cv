export function Group({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-x-2 text-base">
      {children}
    </div>
  );
}
