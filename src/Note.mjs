import React, { useState } from "react";
import Memo from "./Memo.mjs";

export default function Note() {
  const [note, setNote] = useState({
    title: "",
    memo: "",
  });

  const getNote = (e) => {
    const value = e.target.value;
    const nam = e.target.name;
    setNote((prev) => {
      return {
        ...prev,
        [nam]: value,
      };
    });
  };

  const [newnt, setNew] = useState([]);
  const clicked = (e) => {
    e.preventDefault();

    setNew((val) => {
      return [...val, note];
    });

    setNote({
      title: "",
      memo: "",
    });
  };

  const del = (id) => {
    setNew((pr) => {
      return pr.filter((avs, index) => {
        return index !== id;
      });
    });
  };
const plus=()=>{
  unhidr(true)
}
  const [hide, unhidr] = useState(false);

  return (
    <>
      <div className="main">
        <div className="container">
          {hide ? (
            <input
              type="text"
              onChange={getNote}
              value={note.title}
              name="title"
              placeholder="Title"
            />
          ) : null}

          <textarea
            rows=" "
            name="memo"
            value={note.memo}
            onChange={getNote}
            cols=""
            onClick={plus}
            placeholder="enter your note"
          />

          {hide ? (
            <button onClick={clicked}>
              <i className="fa-solid fa-plus"></i>
            </button>
          ) : null}
        </div>
      </div>

      <div className="slide">
        {newnt.map((re, ind) => (
          <Memo
            nme={re.title}
            key={ind}
            id={ind}
            onSelect={del}
            mem={re.memo}
          />
        ))}
      </div>
    </>
  );
}
