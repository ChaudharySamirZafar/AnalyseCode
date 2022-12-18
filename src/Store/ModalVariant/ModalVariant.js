import React from "react";
import styles from "./ModalVariant.module.css";
import { RiCloseLine } from "react-icons/ri";

const ModalVariant = (props) => {
  const object = props.object;
  const setIsOpenHandler = object.setIsOpenHandler;

  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpenHandler()} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>{object.heading}</h5>
          </div>
          <button className={styles.closeBtn} onClick={() => setIsOpenHandler()}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className={styles.modalContent}>{object.content}</div>
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              <button
                className={styles.deleteBtn}
                onClick={() => object.buttonCallBack()}
              >
                {object.buttonText}
              </button>
              <button
                className={styles.cancelBtn}
                onClick={() => setIsOpenHandler()}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalVariant;
