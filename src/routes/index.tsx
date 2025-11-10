import { createBrowserRouter } from "react-router-dom";

import RootLayout from "./layouts/RootLayout";
import NotFound from "../errors/NotFound";
import { Gallery } from "../features/Gallery/Gallery";
import ImageDetailRoute from "../features/ImageDetail/ImageDetailRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Gallery /> },
      {
        path: "image/:imageId",
        element: <ImageDetailRoute />,
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
