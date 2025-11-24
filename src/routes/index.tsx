import { createBrowserRouter } from "react-router-dom";

import RootLayout from "./layouts/RootLayout";
import NotFound from "../errors/NotFound";
import { Explore } from "../features/explore/Explore";
import ImageDetailRoute from "../features/ImageDetail/ImageDetailRoute";
import { BoardsListRoute } from "../features/boards/BoardsListRoute";
import { BoardDetailRoute } from "../features/boards/BoardsDetailRoute";
import { ProtectedRoute } from "../auth/ProtectedRoute";
import { LoginRoute } from "../auth/LoginRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Explore /> },
      {
        path: "image/:imageId",
        element: <ImageDetailRoute />,
      },
      {
        path: "boards",
        element: (
          <ProtectedRoute>
            <BoardsListRoute />
          </ProtectedRoute>
        ),
      },
      {
        path: "boards/:boardId",
        element: (
          <ProtectedRoute>
            <BoardDetailRoute />
          </ProtectedRoute>
        ),
      },
      {
        path: "login",
        element: <LoginRoute />,
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
