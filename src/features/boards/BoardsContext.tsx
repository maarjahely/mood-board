import { createContext, useContext, useState, ReactNode } from "react";
import { boards as initialBoards, type Board } from "../../_mock/boards";
import type { Image } from "../../_mock/images";

type BoardsContextValue = {
  boards: Board[];
  addImageToBoard: (boardId: Board["id"], imageId: Image["id"]) => void;
  removeImageFromBoard: (boardId: Board["id"], imageId: Image["id"]) => void;
};

const BoardsContext = createContext<BoardsContextValue | undefined>(undefined);

type BoardsProviderProps = {
  children: ReactNode;
};

export function BoardsProvider({ children }: BoardsProviderProps) {
  const [boards, setBoards] = useState<Board[]>(initialBoards);

  const addImageToBoard = (boardId: Board["id"], imageId: Image["id"]) => {
    setBoards((previousBoards) =>
      previousBoards.map((board) => {
        if (board.id !== boardId) return board;

        if (board.imageIds.includes(imageId)) {
          return board;
        }

        return {
          ...board,
          imageIds: [...board.imageIds, imageId],
        };
      })
    );
  };

  const removeImageFromBoard = (boardId: Board["id"], imageId: Image["id"]) => {
    setBoards((previousBoards) =>
      previousBoards.map((board) => {
        if (board.id !== boardId) return board;

        return {
          ...board,
          imageIds: board.imageIds.filter(
            (existingImageId) => existingImageId !== imageId
          ),
        };
      })
    );
  };

  return (
    <BoardsContext.Provider
      value={{ boards, addImageToBoard, removeImageFromBoard }}
    >
      {children}
    </BoardsContext.Provider>
  );
}

export function useBoards(): BoardsContextValue {
  const context = useContext(BoardsContext);
  if (!context) {
    throw new Error("useBoards must be used within a BoardsProvider");
  }
  return context;
}
