import { useParams } from "react-router-dom";
import { boards } from "../../_mock/boards";
import { images } from "../../_mock/images";
import { ImageCard } from "../../components/ImageCard";

export function BoardDetailRoute() {
  const currentUserId = "demo-user-1";

  const { boardId } = useParams<{ boardId: string }>();

  const board = boards.find(
    (board) => board.id === boardId && board.ownerId === currentUserId
  );

  if (!board) {
    return (
      <div className="p-6">
        <h1 className="text-xl font-semibold">Board not found</h1>
        <p className="mt-2 text-gray-600">
          We could not find a board with this id.
        </p>
      </div>
    );
  }

  const boardImages = images.filter((image) =>
    board.imageIds.includes(image.id)
  );

  return (
    <div className="p-6">
      <header className="mb-6">
        <h1 className="text-2xl font-semibold">{board.title}</h1>
        {board.description && (
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            {board.description}
          </p>
        )}
      </header>

      {boardImages.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-300">
          This board does not have any images yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {boardImages.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>
      )}
    </div>
  );
}
