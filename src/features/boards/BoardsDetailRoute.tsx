import { Link, useParams } from "react-router-dom";
import { boards } from "../../_mock/boards";

export function BoardDetailRoute() {
  const currentUserId = "demo-user-1";

  const { boardId } = useParams<{ boardId: string }>();

  const board = boards.find(
    (board) => board.id === boardId && board.ownerId === currentUserId
  );

  if (!board) {
    return (
      <div className="p-4 border rounded-xl">
        <h2 className="text-lg font-semibold mb-2">Board not found</h2>
        <Link to="/" className="text-blue-600 underline">
          Back to gallery
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-semibold">{board.title}</h1>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {board.imageIds.map((imageId) => (
          <h4>{imageId}</h4>
        ))}
      </div>
    </div>
  );
}
