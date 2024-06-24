import React from "react";
import { Link } from "react-router-dom";

const getTitle = (note) => {
  if (!note.body) {
    return "";
  }
  const title = note.body.split("\n")[0];
  if (title.length > 35) {
    return title.slice(0, 35) + "...";
  }
  return title;
};

let getDate = (note) => {
  return new Date(note.updated).toLocaleDateString();
};

function ListItem(props) {
  return (
    <Link
      to={`/note/${props.note.id}`}
      className="flex items-center justify-between p-5 mx-3 my-3 font-semibold bg-orange-200 hover:bg-orange-500 hover:text-orange-900 text-orange-500 dark:text-gray-700 dark:bg-gray-300 rounded shadow-md cursor-pointer dark:shadow-gray-800 text-md dark:hover:bg-gray-500 dark:hover:text-white">
      <p>{getTitle(props.note)}</p>
      <p className="text-sm">{getDate(props.note)}</p>
    </Link>
  );
}

export default ListItem;
