import React from "react";
import "./savedResponse.css";
import SavedResponse from "./Responses/SavedResponse";
import CodeExplanationContext from "../../Store/CodeExplanationContext";
import { useContext } from "react";

const SavedResponses = () => {
  const ctx = useContext(CodeExplanationContext);
  const listOfSavedResponses = ctx.listOfExplanations; 
  
  return (
    <div className="savedArea">
      <h1 className="title"> Saved Explanations</h1>
      <div className="savedAreaGrid">
        {listOfSavedResponses.map((individualResponse) => (
          <SavedResponse response={individualResponse} key={individualResponse.name}/>
        ))}
      </div>
    </div>
  );
};

export default SavedResponses;
