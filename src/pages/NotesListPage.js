import React from "react";
import { useState, useEffect } from "react";
import AddButton from "../components/AddButton";
import ListItem from "../components/ListItem";

function NotesListPage() {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    getNotes();
  }, []);

  let getNotes = async () => {
    let response = await fetch("http://localhost:8000/notes/");
    let data = await response.json();
    setNotes(data);
  };

  return (
    <>
      <div className="flex items-center justify-between w-full h-16 rounded-t-md bg-orange-500 dark:bg-gray-800">
        <div className="ml-3 text-xl font-bold text-orange-900 dark:text-orange-500">
          &#9782; Notes
        </div>
        <div className="mr-5 text-xl font-bold text-orange-900 dark:text-orange-500 ">
          {notes.length}
        </div>
      </div>
      <div className="w-full bg-gray-100 border-t rounded-b-md h-96 dark:border-gray-700 dark:bg-gray-700">
        {notes.map((note, index) => (
          <ListItem key={index} note={note} />
        ))}
        <AddButton />
      </div>
    </>
  );
}

export default NotesListPage;
