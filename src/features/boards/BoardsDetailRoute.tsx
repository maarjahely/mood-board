import { useParams } from "react-router-dom";
import { Image, images } from "../../_mock/images";
import { ImageCard } from "../../components/ImageCard";
import { useAuth } from "../../auth/AuthContext";
import { useBoards } from "./BoardsContext";

export function BoardDetailRoute() {
  const { user } = useAuth();
  const { boards, removeImageFromBoard } = useBoards();

  const { boardId } = useParams<{ boardId: string }>();

  const board = boards.find(
    (board) => board.id === boardId && board.ownerId === user?.id
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

  const handleRemoveFromBoardClick = (image: Image) => {
    removeImageFromBoard(board.id, image.id);
  };

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
            <ImageCard
              key={image.id}
              image={image}
              actionSlot={
                <button
                  type="button"
                  onClick={() => handleRemoveFromBoardClick(image)}
                  className="cursor-pointer rounded-md bg-white/90 px-2 py-1 text-xs font-medium text-gray-900 shadow-sm hover:bg-white"
                >
                  Remove
                </button>
              }
            />
          ))}
        </div>
      )}
    </div>
  );
}
