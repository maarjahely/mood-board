export type Board = {
  id: string;
  title: string;
  description?: string;
  imageIds: string[];
  ownerId: string;
};

export const boards: Board[] = [
  {
    id: "cozy-vibes",
    title: "Cozy vibes",
    description: "Warm, calm, slightly moody images.",
    imageIds: ["forest", "pumpkins"],
    ownerId: "demo-user-1",
  },
  {
    id: "canada-memories",
    title: "Canada memories",
    description: "Toronto and beyond.",
    imageIds: ["lake", "downtown"],
    ownerId: "demo-user-1",
  },
  {
    id: "empty-board",
    title: "Empty test board",
    description: "This one has no images yet.",
    imageIds: [],
    ownerId: "demo-user-1",
  },
];
