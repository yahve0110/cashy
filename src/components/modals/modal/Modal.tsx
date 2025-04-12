import { useEffect, useState } from "react";
import styles from "./Modal.module.scss";
import ReactDOM from "react-dom";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  hideCloseButton?: boolean;
  customStyle?: boolean;
};

const Modal = ({
  isOpen,
  onClose,
  children,
  hideCloseButton = true,
  customStyle = false,
}: ModalProps) => {
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      requestAnimationFrame(() => setAnimateIn(true));
    } else {
      document.body.style.overflow = "";
      setAnimateIn(false);
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className={`${styles.overlay} ${customStyle ? styles.customOverlay : ""}`} onClick={onClose}>
      <div
        className={`${styles.modal} ${animateIn ? styles.modalEnter : ""} ${customStyle ? styles.customModal : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>

      {!hideCloseButton && (
        <button className={styles.closeButton} onClick={onClose}>
          <span className={styles.line1}></span>
          <span className={styles.line2}></span>
        </button>
      )}
    </div>,
    document.getElementById("modal-root")!,
  );
};

export default Modal;
