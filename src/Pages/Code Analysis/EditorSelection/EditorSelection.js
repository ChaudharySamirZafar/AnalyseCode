import React, { useContext } from "react";
import "./EditorSelection.css";
import CodeExplanationContext from "../../../Store/CodeExplanationContext";

const EditorSelection = (props) => {
  const ctx = useContext(CodeExplanationContext);

  const langSelectorHandler = (event) => {
    const newVal = event.target.value;
    ctx.setLanguageSelected(newVal);
  }

  return (
    <div className="selection">
      <select value={ctx.languageSelected} onChange={langSelectorHandler}>
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
