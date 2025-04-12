import Modal from "@/components/modals/modal/Modal";
import styles from "./NotEnoughEnergyModal.module.scss";

const NotEnoughEnergyModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={styles.modalContent}>
        <div className={styles.modalInner}>
          <h2 className={styles.title}>Out of Energy</h2>

          <div className={styles.refreshInfo}>
            REFRESH IN: <span className={styles.timer}>2d 4h 45m 41s</span>
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
              <div className={styles.perkList}>
                <img src="/icons/bolt-plus.png" alt="+25 Energy" />
                <img src="/icons/bolt-daily.png" alt="x2 Daily Energy" />
                <img src="/icons/coin-rewards.png" alt="x2 Rewards" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default NotEnoughEnergyModal;
