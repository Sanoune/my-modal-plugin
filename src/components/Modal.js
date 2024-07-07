import PropTypes from "prop-types";
import React from "react";
import styles from "./Modal.module.css";

const Modal = ({
  isOpen,
  onClose,
  children,
  overlayStyle,
  contentStyle,
  closeButtonStyle,
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.modalOverlay} style={overlayStyle}>
      <div className={styles.modalContent} style={contentStyle}>
        <button
          className={styles.closeButton}
          style={closeButtonStyle}
          onClick={onClose}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  overlayStyle: PropTypes.object,
  contentStyle: PropTypes.object,
  closeButtonStyle: PropTypes.object,
};

export default Modal;
