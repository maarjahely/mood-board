import "./global.css";

import { Gallery } from "./components/Gallery";

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <header className="p-6 text-2xl font-semibold">My Moodboard ✨</header>

      <Gallery />
    </div>
  );
}

export default App;
