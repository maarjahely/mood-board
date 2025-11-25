import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./routes/index.tsx";
import { AuthProvider } from "./auth/AuthContext.tsx";
import { BoardsProvider } from "./features/boards/BoardsContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <BoardsProvider>
        <RouterProvider router={router} />
      </BoardsProvider>
    </AuthProvider>
  </StrictMode>
);
