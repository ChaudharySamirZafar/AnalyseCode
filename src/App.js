import "./App.css";
import Editor from "./Pages/Code Analysis/Editor/Editor";
import Response from "./Pages/Code Analysis/Response/Response";
import { CodeExplanationContextProvider } from "./Store/CodeExplanationContext";

function App() {
  return (
    <div className="App">
      <CodeExplanationContextProvider>
        <div className="container">
          <div className="editorColumn">
            <Editor />
          </div>
          <div className="response">
            <Response />
          </div>
        </div>
      </CodeExplanationContextProvider>
    </div>
  );
}

export default App;
