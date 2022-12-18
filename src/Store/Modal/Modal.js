import React, { useState } from "react";
import styles from "./Modal.module.css";
import { RiCloseLine } from "react-icons/ri";

const Modal = (props) => {
  const modalInfo = props.object;
  const setIsOpen = modalInfo.setIsOpen;
  const isForm = modalInfo.isForm;
  const buttonCallBack = modalInfo.buttonCallBack;

  const [name, setName] = useState("");
  const [description, setDesription] = useState("");

  var validName = false;
  var validDescription = false;

  const nameHandler = (newValue) => {
    setName(newValue.target.value);
  };

  const descriptionHandler = (newValue) => {
    setDesription(newValue.target.value);
  };

  if (name.length > 0) {
    validName = true;
  }

  if (description.length > 0) {
    validDescription = true;
  }

  return (
    <React.Fragment>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>{modalInfo.heading}</h5>
          </div>
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className={styles.modalContent}>
            {modalInfo.content}
            {isForm && (
              <div className={styles.form}>
                <ul>
                  <li>
                    <label>Name</label>
                    <br />
                    <input
                      className={styles.input}
                      type="text"
                      onChange={nameHandler}
                    />
                  </li>
                  <li>
                    <label>Description</label>
                    <br />
                    <textarea
                      className={styles.input}
                      rows={8}
                      onChange={descriptionHandler}
                    />
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              <button
                className={styles.deleteBtn}
                onClick={() => buttonCallBack(name, description)}
                disabled={(!validName || !validDescription) && isForm}
              >
                {modalInfo.buttonText}
              </button>
              <button
                className={styles.cancelBtn}
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Modal;
