import { Link, useParams } from "react-router-dom";
import { images } from "../../_mock/images";

export default function ImageDetailRoute() {
  const { imageId } = useParams<{ imageId: string }>();

  const image = images.find((img) => img.id === imageId);

  if (!image) {
    return (
      <div className="p-4 border rounded-xl">
        <h2 className="text-lg font-semibold mb-2">Image not found</h2>
        <Link to="/" className="text-blue-600 underline">
          Back to gallery
        </Link>
      </div>
    );
  }

  return (
    <article className="mt-6 p-4 border rounded-xl">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-semibold">{image.title}</h2>
        <Link to="/" className="text-blue-600 underline">
          Back to gallery
        </Link>
      </div>

      <div className="aspect-4/3 overflow-hidden rounded-lg border">
        <img
          src={image.src}
          alt={image.title}
          className="w-full h-full object-cover"
        />
      </div>

      <p className="mt-3 text-sm text-gray-700 dark:text-gray-300">
        {image.description}
      </p>
    </article>
  );
}
