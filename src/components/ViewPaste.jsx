import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";


const ViewPaste = () => {

  const {id} = useParams()
  const allPastes = useSelector((state) => state.paste.pastes)

  const paste = allPastes.filter((p) => p._id === id)
  console.log("xd",paste);
  
  return (


    <div>
      <div className="flex flex-row gap-7 place-content-between">
        <input
          className="p-2 rounded-2xl mt-2 w-[66%] pl-4"
          type="text"
          placeholder="Enter Title Here!"
          value={paste.title}
          disabled
         
        />
        {/* <button onClick={createPaste} className="p-2 rounded-2xl mt-2">
          {pasteId ? "Update My Paste" : "Create My Paste"}
        </button> */}
      </div>
      <div className="mt-8">
        <textarea
          className="rounded-2xl mt-4 min-w-[500px] p-4"
          value={paste.value}
          disabled
          placeholder="Enter Content Here!"
          onChange={(e) => setValue(e.target.value)}
          rows={20}
        />
      </div>
    </div>
  );
};


export default ViewPaste