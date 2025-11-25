import { Link } from "react-router-dom";
import type { Image } from "../_mock/images";
import { ReactNode } from "react";

type ImageCardProps = {
  image: Image;
  actionSlot?: ReactNode;
};

export function ImageCard({ image, actionSlot }: ImageCardProps) {
  return (
    <div className="relative group rounded-xl overflow-hidden shadow-sm">
      <Link to={`/image/${image.id}`}>
        <img
          src={image.src}
          alt={image.title}
          className="
            h-48 w-full object-cover
            transition-transform duration-300
            group-hover:scale-105
          "
        />
      </Link>

      <div
        className="
          pointer-events-none
          absolute inset-0 
          opacity-0 
          group-hover:opacity-100
        "
      >
        <div
          className="
            pointer-events-auto
            absolute inset-x-0 top-0 
            flex items-center justify-between 
            px-2 py-2
          "
        >
          <span className="rounded-md bg-black/40 px-2 py-1 text-xs text-white">
            {image.title}
          </span>

          {actionSlot}
        </div>
      </div>
    </div>
  );
}
