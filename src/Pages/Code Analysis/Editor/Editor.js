import React from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-ruby";
import "ace-builds/src-noconflict/mode-php";
import "ace-builds/src-noconflict/mode-typescript";
import "ace-builds/src-noconflict/mode-erlang";
import "ace-builds/src-noconflict/mode-dart";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
import "./Editor.css";
import CodeExplanationContext from "../../../Store/CodeExplanationContext";
import { useContext } from "react";

const Editor = (props) => {
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
        mode={props.lang}
        theme="monokai"
        name="blah2"
        maxLines={30}
        minLines={30}
        onChange={onChangeHandler}
        fontSize={14}
        showPrintMargin={false}
        showGutter={!context.modalOpen}
        wrapEnabled
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
