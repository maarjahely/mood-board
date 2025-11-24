import { Link } from "react-router-dom";
import { boards } from "../../_mock/boards";
import { images } from "../../_mock/images";

export function BoardsListRoute() {
  const currentUserId = "demo-user-1";

  const userBoards = boards.filter((board) => board.ownerId === currentUserId);

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-semibold">Your boards</h1>

      {userBoards.length === 0 ? (
        <p className="text-gray-600">
          You do not have any boards yet. Start by creating your first board.
        </p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {userBoards.map((board) => {
            const coverImageId = board.imageIds[0];
            const coverImage = images.find(
              (image) => image.id === coverImageId
            );
            const imageCount = board.imageIds.length;

            return (
              <Link
                key={board.id}
                to={`/boards/${board.id}`}
                className="block overflow-hidden rounded-xl border shadow-sm transition hover:shadow-md"
              >
                {coverImage && (
                  <img
                    src={coverImage.src}
                    alt={coverImage.title}
                    className="h-40 w-full object-cover"
                  />
                )}

                <div className="p-4">
                  <h2 className="font-medium">{board.title}</h2>
                  {board.description && (
                    <p className="mt-1 text-sm text-gray-600">
                      {board.description}
                    </p>
                  )}
                  <p className="mt-2 text-xs text-gray-500">
                    {imageCount === 0
                      ? "No images yet"
                      : imageCount === 1
                        ? "1 image"
                        : `${imageCount} images`}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
