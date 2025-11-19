import { Link } from "react-router-dom";
import { boards } from "../../_mock/boards";

export function BoardsListRoute() {
  const currentUserId = "demo-user-1";

  const userBoards = boards.filter((board) => board.ownerId === currentUserId);

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-semibold">Your boards</h1>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {userBoards.map((board) => (
          <Link
            key={board.id}
            to={`/boards/${board.id}`}
            className="block rounded-xl border p-4 shadow-sm hover:shadow-md transition"
          >
            <h2 className="font-medium">{board.title}</h2>
            {board.description && (
              <p className="mt-1 text-sm text-gray-600">{board.description}</p>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
