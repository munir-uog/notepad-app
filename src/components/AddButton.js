import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as AddIcon } from "../assets/plus-icon.svg";

function AddButton() {
  return (
    <div className="flex justify-end">
      <div className="flex justify-center mr-5 space-x-2">
        <Link to={"/note/new"}>
          <button
            type="button"
            className="inline-block leading-normal bg-orange-500 rounded-full shadow-md hover:bg-orange-700 shadow-zinc-900 w-9 h-9"
          >
            <AddIcon className="w-4 mx-auto text-slate-200" />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default AddButton;
