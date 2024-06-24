import "./App.css";
import { Routes, Route } from "react-router-dom";
import "../src/global.css";

import NotesListPage from "./pages/NotesListPage";
import NotePage from "./pages/NotePage";

function App() {
  return (
    <div className="mt-10 flex justify-center items-center w-full">
      <div className="flex flex-col w-2/5 rounded-md items-center shadow-xl shadow-zinc-700">
        <Routes>
          <Route path="/" element={<NotesListPage />} />
          <Route path="/note/:id" element={<NotePage />} />
        </Routes>
        {/* <NotesListPage /> */}
      </div>
    </div>
  );
}

export default App;
