import React, { useState } from "react";

const CodeExplanationContext = React.createContext({
  code: "",
  explanation: "",
  updateCode: (newCode) => {},
  updateExplanation: (newExplanation) => {},
  listOfExplanations: [],
  updateList: (newObject) => {},
  deleteObject: (object) => {},
  modalOpen: false,
  setModalOpen: (state) => {}
});

export const CodeExplanationContextProvider = (props) => {
  const initalCode = localStorage.getItem('code');
  const [code, setCode] = useState(initalCode);

  const initalExplanation = localStorage.getItem('explanation');
  const [explanation, setExplanation] = useState(initalExplanation);

  const initialListOfExplanations = localStorage.getItem('listOfExplanations');
  const [listOfExplanations, setListOfExplanations] = useState(JSON.parse(initialListOfExplanations) ?? []);

  const [modalOpen, setModalOpen] = useState(false);

  const updateCodeHandler = (newCode) => {
    setCode(newCode);
    localStorage.setItem('code', newCode)
  };

  const updateExplanationHandler = (newExplanation) => {
    setExplanation(newExplanation);
    localStorage.setItem('explanation', newExplanation)
  };

  const addExplanationToList = (newObject) => {
    setListOfExplanations((prevState) => [...prevState, newObject]);
    var list = [...listOfExplanations, newObject];
    localStorage.setItem('listOfExplanations', JSON.stringify(list)); 
  }

  const deleteExplanation = (object) => {
    var list = [...listOfExplanations];

    const objWithIdIndex = list.findIndex((obj) => obj.name === object.name);
    list.splice(objWithIdIndex, 1);

    setListOfExplanations(list);
    localStorage.setItem('listOfExplanations', JSON.stringify(list)); 
  }

  const contextValue = {
    code: code,
    explanation: explanation,
    updateCode: updateCodeHandler,
    updateExplanation: updateExplanationHandler,
    listOfExplanations: listOfExplanations,
    updateList: addExplanationToList,
    deleteObject: deleteExplanation,
    modalOpen: modalOpen,
    setModalOpen: setModalOpen
  };

  return (
    <CodeExplanationContext.Provider value={contextValue}>
      {props.children}
    </CodeExplanationContext.Provider>
  );
};

export default CodeExplanationContext;
