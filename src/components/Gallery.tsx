export function Gallery() {
  const images = [
    "/images/forest.jpg",
    "/images/lake.jpeg",
    "/images/pumpkins.jpeg",
    "/images/downtown.jpeg",
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {images.map((src, i) => (
        <div key={i} className="overflow-hidden rounded-xl shadow-sm">
          <img
            src={src}
            alt=""
            className="h-48 w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      ))}
    </div>
  );
}
