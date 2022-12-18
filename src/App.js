import "./App.css";
import Editor from "./Pages/Code Analysis/Editor/Editor";
import Response from "./Pages/Code Analysis/Response/Response";
import { CodeExplanationContextProvider } from "./Store/CodeExplanationContext";
import SavedResponses from "./Pages/Saved Responses/SavedResponses";
import EditorSelection from "./Pages/Code Analysis/EditorSelection/EditorSelection";
import { useState } from "react";

function App() {
  const preSetLang = localStorage.getItem("ideLang");
  const [lang, setLang] = useState(preSetLang ?? "java");

  return (
    <div className="App">
      <CodeExplanationContextProvider>
        <div className="container">
          <div>
            <EditorSelection setLang={setLang} lang={lang}/>
          </div>
          <div className="editorColumn">
            <Editor lang={lang}/>
          </div>
          <div className="response">
            <Response />
            <SavedResponses />
          </div>
        </div>
      </CodeExplanationContextProvider>
    </div>
  );
}

export default App;
