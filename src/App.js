import "./App.css";
import Editor from "./Pages/Code Analysis/Editor/Editor";
import Response from "./Pages/Code Analysis/Response/Response";
import { CodeExplanationContextProvider } from "./Store/CodeExplanationContext";
import SavedResponses from "./Pages/Saved Responses/SavedResponses";
import EditorSelection from "./Pages/Code Analysis/EditorSelection/EditorSelection";
import { RiGithubFill, RiLinkedinBoxFill, RiDiscordFill, RiInstagramLine } from "react-icons/ri";

function App() {
  return (
    <div className="App">
      <CodeExplanationContextProvider>
        <div className="container">
          <div>
            <EditorSelection />
          </div>
          <div className="editorColumn">
            <Editor />
          </div>
          <div className="response">
            <Response />
            <SavedResponses />
          </div>
        </div>
        <footer className="footer">
          <h3 className="contactMeSec">Contact Us</h3>
          <h3 className="email">chaudharysamirzafar@gmail.com</h3>
          <h3 className="socials">
            <a href="https://www.linkedin.com/in/samir-zafar-6b59111bb/">
              <RiLinkedinBoxFill />
            </a>
            <a href="https://github.com/ChaudharySamirZafar?tab=repositories">
              <RiGithubFill />
            </a>
            <a href="https://www.instagram.com/samirr.zafarr/">
              <RiInstagramLine />
            </a>
          </h3>
        </footer>
      </CodeExplanationContextProvider>
    </div>
  );
}

export default App;
