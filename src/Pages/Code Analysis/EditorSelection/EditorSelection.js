import React, { useState } from "react";
import "./EditorSelection.css"

const EditorSelection = (props) => {
  const langSelectorHandler = (event) => {
    const newVal = event.target.value;
    localStorage.setItem("ideLang", newVal);
    props.setLang(newVal);
  }

  return (
    <div className="selection">
      <select defaultValue={props.lang} onChange={langSelectorHandler}>
        <option value="c_cpp">C & C++</option>
        <option value="java">Java</option>
        <option value="python">Python</option>
        <option value="javascript">Javascript</option>
        <option value="ruby">Ruby</option>
        <option value="php">PHP</option>
        <option value="typescript">Typescript</option>
        <option value="erlang">Erlang</option>
        <option value="dart">Dart</option>
      </select>
    </div>
  );
};

export default EditorSelection;
