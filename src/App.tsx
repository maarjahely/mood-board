import "./global.css";

import { Gallery } from "./components/Gallery";
import { ThemeToggle } from "./components/ThemeToggle";

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <header className="flex items-center justify-between p-6">
        <h1 className="text-2xl font-semibold">My Moodboard ✨</h1>
        <ThemeToggle />
      </header>
      <Gallery />
    </div>
  );
}

export default App;
