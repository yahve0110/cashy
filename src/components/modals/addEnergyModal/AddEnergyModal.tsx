import Modal from "@/components/modals/modal/Modal";
import styles from "./AddEnergyModal.module.scss";

const AddEnergyModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} customStyle>
      <div className={styles.modalWrapper}>
        <div className={styles.modalContent}>
          <div className={styles.modalInner}>
            <h2 className={styles.title}>Out of Energy</h2>

            <div className={styles.refreshInfo}>
              REFRESH IN: <span>2d 4h 45m 41s</span>
            </div>

            <div className={styles.row}>
              <div className={styles.left}>
                <p className={styles.description}>
                  Go to Players to send and receive energy!
                </p>
                <button className={styles.button}>Go to Players</button>
              </div>

              <div className={styles.right}>
                <div className={styles.perksTitle}>Join the Club</div>
                <div className={styles.perkLabel}>MONEMON</div>
                <div className={styles.perks}>
                  <div className={styles.perk} data-label="+25 energy now">
                    <img src="/icons/bolt-plus.png" alt="+25 energy now" />
                  </div>
                  <div className={styles.perk} data-label="Double daily energy">
                    <img src="/icons/bolt-daily.png" alt="Double daily energy" />
                  </div>
                  <div className={styles.perk} data-label="x2 monecoin rewards">
                    <img src="/icons/coin-rewards.png" alt="x2 monecoin rewards" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button className={styles.closeButton} onClick={onClose}>
            <span className={styles.line1}></span>
            <span className={styles.line2}></span>
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default AddEnergyModal;
