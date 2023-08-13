import React from "react";
import Memos from "./Memo.mjs";
export default function Memo(props) {
  return (
    <>
      <div className="txts">
        <h2>{props.nme}</h2>
        <p>{props.mem}</p>
        <button className="del" onClick={() => props.onSelect(props.id)}>
          <i className="fa-solid fa-trash" />
        </button>
      </div>
    </>
  );
}
