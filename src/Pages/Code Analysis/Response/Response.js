import React from "react";
import "./Response.css";
import CodeExplanationContext from "../../../Store/CodeExplanationContext";
import { useContext, useState } from "react";
import EndPoints from "../../../Store/EndPoints.json";
import LoadingSpinner from "../../../LoadingSpinner/LoadingSpinner";
import Modal from "../../../Store/Modal/Modal";

const Response = () => {
  const context = useContext(CodeExplanationContext);

  const setExplanation = (newExplanation) => {
    context.updateExplanation(newExplanation);
  };

  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const sendRunCodeRequest = () => {
    if (context.code.length === 0) return;
    setIsLoading(true);

    const code = JSON.stringify(context.code);

    const jsonBody = {
      model: "text-davinci-003",
      prompt: "explain this code\n" + code,
      max_tokens: 3000,
      temperature: 1,
    };

    fetch(EndPoints.Completions, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer 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",
      },
      body: JSON.stringify(jsonBody),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Message too long");
        }
      })
      .then((data) => {
        setExplanation(data.choices[0].text);
        setIsLoading(false);
        setIsError(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsError(true);
      });
  };

  const saveButtonHandler = (name, description) => {
    setIsOpen(false);
    context.updateList({
      name: name,
      description: description,
      explanation: context.explanation,
      code: context.code,
    });
  };

  const modalStructure = {
    setIsOpen: setIsOpen,
    isForm: true,
    heading: "Save Explanation",
    content: "Please provide a name and description",
    buttonText: "Save",
    buttonCallBack: saveButtonHandler,
  };

  return (
    <React.Fragment>
      <div className="explanationArea">
        <div className="buttonArea">
          <button className="explainBtn" onClick={sendRunCodeRequest}>
            Explain My Code
          </button>
          <button className="explainBtn" onClick={() => setIsOpen(true)}>
            Save Explanation
          </button>
        </div>
        <div className="explantionTextArea">
          {isLoading && <LoadingSpinner />}
          {!isLoading && !isError && (
            <h1 className="text"> {context.explanation} </h1>
          )}
          {!isLoading && isError && (
            <h1 className="text">
              The AI model that is being used to generate code only allows for
              4000 tokens. Your code at maximum can be 1000 tokens. Please check
              how many tokens your code is using
              <a href="https://beta.openai.com/tokenizer"> HERE</a>
            </h1>
          )}
          {isOpen && <Modal object={modalStructure} />}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Response;
