export function Footer() {
  return (
    <div className="flex items-center justify-right">
      <p className="text-sm text-slate-500">
        © Éric Létourneau {new Date().getFullYear()}
      </p>
    </div>
  );
}
