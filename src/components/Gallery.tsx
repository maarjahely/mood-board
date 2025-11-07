export function Gallery() {
  const placeholders = Array.from({ length: 8 });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {placeholders.map((_, i) => (
        <div
          key={i}
          className="h-40 bg-gray-200 dark:bg-gray-700 rounded-xl shadow-sm"
        ></div>
      ))}
    </div>
  );
}
