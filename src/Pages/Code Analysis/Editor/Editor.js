import React from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
import "./Editor.css";
import CodeExplanationContext from "../../../Store/CodeExplanationContext";
import { useContext } from "react";

const Editor = () => {
  const context = useContext(CodeExplanationContext);

  const onChangeHandler = (value) => {
    context.updateCode(value);
  };

  return (
    <React.Fragment>
      <AceEditor
        width="75%"
        className="editor"
        placeholder="Place your code in here, then hit the 'Explain My Code' button"
        mode="java"
        theme="monokai"
        name="blah2"
        maxLines={30}
        minLines={30}
        onChange={onChangeHandler}
        fontSize={14}
        showPrintMargin={false}
        showGutter={true}
        highlightActiveLine={true}
        value={context.code}
        setOptions={{
          enableBasicAutocompletion: false,
          enableLiveAutocompletion: false,
          enableSnippets: true,
          showLineNumbers: true,
          tabSize: 2,
        }}
      />
    </React.Fragment>
  );
};

export default Editor;
