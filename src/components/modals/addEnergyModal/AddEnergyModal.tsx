import Modal from "@/components/modals/modal/Modal";
import styles from "./AddEnergyModal.module.scss";
import { ICONS } from "@/assets/iconComponents/links";
import twentyFive from "@/assets/icons/+25.png";
import monemon from "@/assets/icons/monemon.png";
import double from "@/assets/icons/x2.png";
import doubleWhite from "@/assets/icons/x2white.png";
import silverCoin from "@/assets/icons/silverCoin.png";
import greenBg from "@/assets/icons/greenBg.svg";

const AddEnergyModal = ({
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
          <div className={styles.modalUpper}>
            <span className={styles.modalUpperText}>Join the Club</span>
            <img className={styles.monemon} src={monemon} alt="monemon" />
          </div>

          <div className={styles.bottomContent}>
            <span className={styles.bottomContentText}>
              Gold Getters and Fund Flexers enjoy these perks:
            </span>

            <div className={styles.perks}>
              <div>
                <div className={styles.perkContainer}>
                  <img
                    className={styles.lightningIcon}
                    src={ICONS.lightning}
                    alt="lightningIcon"
                  />
                  <img
                    className={styles.perkBonus}
                    src={twentyFive}
                    alt="twentyFiveIcon"
                  />
                </div>
                <div className={styles.perkTextContainer}>
                  <span className={styles.perkText}>25 energy</span>
                  <span>now</span>
                </div>
              </div>

              <div className={styles.perks}>
                <div>
                  <div className={styles.perkContainer}>
                    <img
                      className={styles.lightningIcon}
                      src={ICONS.lightning}
                      alt="lightningIcon"
                    />
                    <img
                      className={styles.perkDouble}
                      src={double}
                      alt="doubleIcon"
                    />
                  </div>
                  <div className={styles.perkTextContainer}>
                    <span className={styles.perkText}>2x daily</span>
                    <span>energy</span>
                  </div>
                </div>
              </div>

              <div className={styles.perks}>
                <div>
                  <div className={styles.perkContainer}>
                    <img
                      className={styles.silverCoin}
                      src={silverCoin}
                      alt="silverCoinIcon"
                    />
                    <img
                      className={styles.perkDoubleWhite}
                      src={doubleWhite}
                      alt="doubleIcon"
                    />
                  </div>
                  <div className={styles.perkTextContainer}>
                    <span className={styles.perkText}>x2 monecoin</span>
                    <span>rewards</span>
                  </div>
                </div>
              </div>

              <div className={styles.perks}>
                <div className={styles.perkColumn}>
                  <div className={styles.perkContainer}>
                    <img
                      src={greenBg}
                      className={styles.greenBgIcon}
                      alt="greenBgIcon"
                    />
                  </div>
                  <div className={styles.perkTextContainer}>
                    <span className={styles.perkText}>Exclusive profile</span>
                    <span>background</span>
                  </div>
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
    </Modal>
  );
};

export default AddEnergyModal;
