import React from "react";
import { useState, useEffect, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ReactComponent as ArrowLeftRound } from "../assets/round-back-icon.svg";

function NotePage() {
  let params = useParams();
  let navigate = useNavigate();
  let noteId = params.id;
  const [note, setNote] = useState(null);

  const getNote = useCallback(async () => {
    let response = await fetch(`http://localhost:8000/notes/${noteId}`);
    let data = await response.json();
    setNote(data);
  }, [noteId]);

  useEffect(() => {
    if (noteId !== "new") {
      getNote();
    }
  }, [noteId, getNote]);

  let updateNote = async () => {
    await fetch(`http://localhost:8000/notes/${noteId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...note, updated: new Date() }),
    });
  };

  let createHandler = async () => {
    await fetch(`http://localhost:8000/notes/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...note, updated: new Date() }),
    });
    navigate("/");
  };

  let submitHandler = () => {
    if (noteId !== "new") {
      if (!note.body) {
        deleteHandler();
      } else {
        updateNote();
      }
    } else if (noteId === "new" && note !== null) {
      createHandler();
    }
    navigate("/");
  };

  let deleteHandler = async () => {
    await fetch(`http://localhost:8000/notes/${noteId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
    navigate("/");
  };

  // let note = notes.find((note) => note.id === Number(noteId));
  return (
    <>
      <div className="flex items-center justify-between w-full h-16 rounded-t-md bg-orange-500 dark:bg-gray-800">
        <ArrowLeftRound
          onClick={submitHandler}
          className="ml-5 cursor-pointer w-7 fill-orange-200 dark:fill-orange-500 dark:hover:fill-orange-900 hover:fill-orange-900"
        />

        <button
          onClick={noteId !== "new" ? deleteHandler : createHandler}
          className="px-4 py-2 mr-5 text-sm font-bold dark:text-white text-orange-500 dark:bg-orange-500 bg-gray-200 rounded hover:bg-orange-900 dark:hover:text-orange-500 hover:text-orange-200">
          {noteId !== "new" ? "Delete" : "Done"}
        </button>
      </div>
      <div className="w-full bg-gray-100 border-t rounded-b-md h-96 dark:border-gray-700 dark:bg-gray-700">
        <textarea
          onChange={(ev) => {
            setNote({ ...note, body: ev.target.value });
          }}
          value={note?.body}
          className="w-full h-full p-5 text-gray-900 dark:text-white bg-transparent outline-none resize-none hover:border-none"
        />
      </div>
    </>
  );
}

export default NotePage;
