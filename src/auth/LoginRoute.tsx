import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./AuthContext";

type LocationState = {
  from?: { pathname: string };
};

export function LoginRoute() {
  const { loginAsDemoUser, isAuthenticated } = useAuth();
  const location = useLocation();

  const locationState = location.state as LocationState | null;
  const redirectPathName = locationState?.from?.pathname ?? "/";

  if (isAuthenticated) {
    return <Navigate to={redirectPathName} replace />;
  }

  const handleLoginClick = () => {
    loginAsDemoUser();
  };

  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="w-full max-w-sm rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm text-gray-900 dark:text-gray-100">
        <h1 className="text-xl font-semibold">Log in</h1>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
          This is a demo login. We will just sign you in as a fake user so you
          can create and view boards.
        </p>

        <button
          type="button"
          onClick={handleLoginClick}
          className="mt-6 w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition"
        >
          Log in as Demo User
        </button>
      </div>
    </div>
  );
}
