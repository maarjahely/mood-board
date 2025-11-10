import { Outlet } from "react-router-dom";
import { ThemeToggle } from "../../components/ThemeToggle";

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <header className="flex items-center justify-between p-6">
        <h1 className="text-2xl font-semibold">My Moodboard ✨</h1>

        <ThemeToggle />
      </header>

      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
}
