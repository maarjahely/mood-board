import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import ImageDetailRoute from "../ImageDetailRoute";
import { images } from "../../../_mock/images";

function renderDetailAt(path: string) {
  const routes = [{ path: "/image/:imageId", element: <ImageDetailRoute /> }];
  const router = createMemoryRouter(routes, { initialEntries: [path] });
  return render(<RouterProvider router={router} />);
}

test("renders details for a valid image id", async () => {
  const knownImage = images.find((candidate) => candidate.id === "lake")!;
  renderDetailAt("/image/lake");

  expect(
    await screen.findByRole("img", { name: knownImage.title })
  ).toBeInTheDocument();
  expect(screen.getByText(knownImage.description)).toBeInTheDocument();
  // Back link exists
  const backLink = screen.getByRole("link", { name: /back to gallery/i });
  expect(backLink).toHaveAttribute("href", "/");
});

test("shows 'Image not found' for an unknown id and offers a back link", async () => {
  renderDetailAt("/image/does-not-exist");

  expect(await screen.findByText(/image not found/i)).toBeInTheDocument();
  const backLink = screen.getByRole("link", { name: /back to gallery/i });
  expect(backLink).toHaveAttribute("href", "/");
});
