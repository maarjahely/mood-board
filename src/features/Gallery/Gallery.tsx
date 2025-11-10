import { Link } from "react-router-dom";
import { images } from "../../_mock/images";

export function Gallery() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {images.map((image) => (
        <Link
          key={image.id}
          to={`/image/${image.id}`}
          className="group block overflow-hidden rounded-xl shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
        >
          <img
            src={image.src}
            alt=""
            className="h-48 w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </Link>
      ))}
    </div>
  );
}
