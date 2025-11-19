import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMemoryRouter, RouterProvider } from "react-router-dom";

import { images } from "../../../_mock/images";
import { Explore } from "../Explore";
import ImageDetailRoute from "../../ImageDetail/ImageDetailRoute";

function renderWithRouter(initialPath: string = "/") {
  const routes = [
    { path: "/", element: <Explore /> },
    { path: "/image/:imageId", element: <ImageDetailRoute /> },
  ];
  const router = createMemoryRouter(routes, { initialEntries: [initialPath] });
  return render(<RouterProvider router={router} />);
}

test("renders all images with the correct alt text", () => {
  renderWithRouter();

  for (const image of images) {
    // Accessible because alt={image.title}
    const img = screen.getByRole("img", { name: image.title });
    expect(img).toBeInTheDocument();

    // And check that the link href is correct
    const link = img.closest("a");
    expect(link).toHaveAttribute("href", `/image/${image.id}`);
  }
});

test("clicking an image navigates to the detail view showing that image", async () => {
  const user = userEvent.setup();
  renderWithRouter();

  const firstImage = images[0];
  const imageElement = screen.getByRole("img", { name: firstImage.title });

  await user.click(imageElement);

  expect(
    await screen.findByRole("img", { name: firstImage.title })
  ).toBeInTheDocument();
  expect(screen.getByText(firstImage.description)).toBeInTheDocument();
});
