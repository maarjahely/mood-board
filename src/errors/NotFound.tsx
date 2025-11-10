import { isRouteErrorResponse, useRouteError, Link } from "react-router-dom";

export default function NotFound() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>
          {error.status} — {error.statusText}
        </h1>
        <p>{error.data || "Something went wrong."}</p>
        <Link to="/">Go home</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>Not Found</h1>
      <p>The page you’re looking for doesn’t exist.</p>
      <Link to="/">Go home</Link>
    </div>
  );
}
