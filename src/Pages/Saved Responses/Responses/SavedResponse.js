import "./SavedResponse.css";
import React, { useState, useContext } from "react";
import ModalVariant from "../../../Store/ModalVariant/ModalVariant";
import CodeExplanationContext from "../../../Store/CodeExplanationContext";

const SavedResponse = (props) => {
  const context = useContext(CodeExplanationContext);
  const response = props.response;

  const [isOpen, setIsOpen] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  const saveButtonHandler = () => {
    setIsOpen(false);
    context.updateCode(response.code);
    context.updateExplanation(response.explanation);
    context.setModalOpen(false);
  };

  const setIsOpenHandler = () => {
    setIsOpen(false);
    context.setModalOpen(false);
  };

  const modalStructure = {
    setIsOpenHandler: setIsOpenHandler,
    heading: "View Explanation",
    content:
      "Are you sure you want to open this explanation? Any unsaved explanations will be lost",
    buttonText: "Yes",
    buttonCallBack: saveButtonHandler,
  };

  const deleteButtonHandler = () => {
    context.deleteObject(response);
    context.setModalOpen(false);
    setIsOpen(false);
  };

  const setIsDeleteHandler = () => {
    setIsDelete(false);
    context.setModalOpen(false);
  };

  const deleteModalStructure = {
    setIsOpenHandler: setIsDeleteHandler,
    heading: "Delete Explanation",
    content: "Are you sure you want to delete this explanation?",
    buttonText: "Yes",
    buttonCallBack: deleteButtonHandler,
  };

  return (
    <React.Fragment>
      <div className="savedResponseContainer">
        <h1>{response.name}</h1>
        <p>{response.description}</p>
        <button
          onClick={() => {
            setIsOpen(true);
            context.setModalOpen(true);
          }}
        >
          {" "}
          View Explanation{" "}
        </button>
        <button
          onClick={() => {
            setIsDelete(true);
            context.setModalOpen(true);
          }}
        >
          {" "}
          Delete Explanation{" "}
        </button>
      </div>
      {isOpen && <ModalVariant object={modalStructure} />}
      {isDelete && <ModalVariant object={deleteModalStructure} />}
    </React.Fragment>
  );
};

export default SavedResponse;
