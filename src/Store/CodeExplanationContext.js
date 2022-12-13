import React, { useState } from "react";

const CodeExplanationContext = React.createContext({
  code: "",
  explanation: "",
  updateCode: (newCode) => {},
  updateExplanation: (newExplanation) => {}
});

export const CodeExplanationContextProvider = (props) => {
  const initalCode = localStorage.getItem('code');
  const [code, setCode] = useState(initalCode);

  const initalExplanation = localStorage.getItem('explanation');
  const [explanation, setExplanation] = useState(initalExplanation);

  const updateCodeHandler = (newCode) => {
    setCode(newCode);
    localStorage.setItem('code', newCode)
  };

  const updateExplanationHandler = (newExplanation) => {
    setExplanation(newExplanation);
    localStorage.setItem('explanation', newExplanation)
  };

  const contextValue = {
    code: code,
    explanation: explanation,
    updateCode: updateCodeHandler,
    updateExplanation: updateExplanationHandler,
  };

  return (
    <CodeExplanationContext.Provider value={contextValue}>
      {props.children}
    </CodeExplanationContext.Provider>
  );
};

export default CodeExplanationContext;
