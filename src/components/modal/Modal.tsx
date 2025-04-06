import { useEffect, useState } from "react";
import styles from "./Modal.module.scss";

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
};

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
    const [animateIn, setAnimateIn] = useState(false);

    useEffect(() => {
        if (isOpen) {
            requestAnimationFrame(() => {
                setAnimateIn(true);
            });
        } else {
            setAnimateIn(false);
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div
                className={`${styles.modal} ${animateIn ? styles.modalEnter : ""}`}
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>

            <button className={styles.closeButton} onClick={onClose}>
                <span className={styles.line1}></span>
                <span className={styles.line2}></span>
            </button>
        </div>
    );
};

export default Modal;
