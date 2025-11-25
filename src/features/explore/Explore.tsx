import { Image, images } from "../../_mock/images";
import { useAuth } from "../../auth/AuthContext";
import { ImageCard } from "../../components/ImageCard";
import { useBoards } from "../boards/BoardsContext";

export function Explore() {
  const { user, isAuthenticated } = useAuth();
  const { boards, addImageToBoard } = useBoards();

  const handleAddToBoardClick = (image: Image) => {
    if (!user) {
      return;
    }

    const userBoards = boards.filter((board) => board.ownerId === user.id);

    if (userBoards.length === 0) {
      // no boards yet; TODO later: show a "create board" flow
      return;
    }
    //TODO add select board later
    const defaultBoard = userBoards[0];

    addImageToBoard(defaultBoard.id, image.id);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {images.map((image) => (
        <ImageCard
          key={image.id}
          image={image}
          actionSlot={
            isAuthenticated ? (
              <button
                type="button"
                onClick={() => handleAddToBoardClick(image)}
                className="cursor-pointer rounded-md bg-white/90 px-2 py-1 text-xs font-medium text-gray-900 shadow-sm hover:bg-white"
              >
                Add
              </button>
            ) : null
          }
        />
      ))}
    </div>
  );
}
