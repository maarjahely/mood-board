import { Link } from "react-router-dom";
import type { Image } from "../_mock/images";

type ImageCardProps = {
  image: Image;
};

export function ImageCard({ image }: ImageCardProps) {
  return (
    <Link
      to={`/image/${image.id}`}
      className="group block overflow-hidden rounded-xl shadow-sm relative focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
    >
      <img
        src={image.src}
        alt={image.title}
        className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />

      <div
        className="
          absolute inset-0 
          bg-black/30
          opacity-0 
          flex items-start 
          transition-opacity 
          duration-300 
          group-hover:opacity-100
        "
      >
        <p className="p-3 text-sm text-white">{image.title}</p>
      </div>
    </Link>
  );
}
