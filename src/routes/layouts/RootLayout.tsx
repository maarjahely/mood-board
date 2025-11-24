import { Link, Outlet } from "react-router-dom";
import { ThemeToggle } from "../../components/ThemeToggle";
import { useAuth } from "../../auth/AuthContext";

export default function RootLayout() {
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <header className="flex items-center justify-between p-6">
        <div className="flex items-center gap-6">
          <Link
            to="/"
            className="text-2xl font-semibold hover:opacity-80 transition"
          >
            My Moodboard ✨
          </Link>

          <nav className="flex items-center gap-4 text-sm">
            <Link to="/" className="hover:opacity-75 transition">
              Explore
            </Link>

            <Link to="/boards" className="hover:opacity-75 transition">
              Boards
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />

          {isAuthenticated && user ? (
            <div className="flex items-center gap-3 text-sm">
              <span className="opacity-80">Hi, {user.name}</span>

              <button
                type="button"
                onClick={logout}
                className="rounded-md border border-gray-300 dark:border-gray-700 px-3 py-1 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                Log out
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="rounded-md border border-gray-300 dark:border-gray-700 px-3 py-1 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              Log in
            </Link>
          )}
        </div>
      </header>

      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
}
