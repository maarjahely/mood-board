export type Board = {
  id: string;
  title: string;
  description?: string;
  imageIds: string[];
  ownerId: string;
};

export const boards: Board[] = [
  {
    id: "cozy-living-room",
    title: "Cozy living room",
    description: "Warm neutrals and soft textures",
    imageIds: ["img1", "img3", "img7"],
    ownerId: "demo-user-1",
  },
  {
    id: "tattoo-ideas",
    title: "Tattoo ideas",
    imageIds: ["img2", "img8"],
    ownerId: "demo-user-1",
  },
];
