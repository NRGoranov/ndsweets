export default function AdminPlaceholderPage() {
  return (
    <div className="container flex min-h-[70vh] flex-col items-center justify-center text-center">
      <p className="text-sm uppercase tracking-[0.4em] text-primary/50">Admin</p>
      <h1 className="mt-4 font-display text-4xl text-primary">Future admin command center</h1>
      <p className="mt-3 max-w-2xl text-primary/70">
        This page is a placeholder. A dedicated dashboard for managing orders, inventory and
        seasonal menus will live here with authentication layered over the API.
      </p>
    </div>
  );
}

