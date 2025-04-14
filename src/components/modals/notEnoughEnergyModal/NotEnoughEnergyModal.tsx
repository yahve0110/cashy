import Modal from "@/components/modals/modal/Modal";
import styles from "./NotEnoughEnergyModal.module.scss";
import alarmIcon from "@/assets/icons/alarmIcon.svg";
import CountdownText from "@/components/ui/countDown/CountdownText";
import { useRef } from "react";
import { GAME_UPDATE_INTERVAL_MS } from "@/config";
import monemon from "@/assets/icons/monemon.png";
import lightning from "@/assets/icons/lightning.svg";
import twentyFive from "@/assets/icons/twentyFive.svg";
import double from "@/assets/icons/x2green.svg";
import silverCoin from "@/assets/icons/silverCoin.svg";
import doubleWhite from "@/assets/icons/x2.svg";

const NotEnoughEnergyModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const gameTargetRef = useRef<Date | null>(null);
  if (!gameTargetRef.current) {
    gameTargetRef.current = new Date(Date.now() + GAME_UPDATE_INTERVAL_MS);
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} customStyle>
      <div className={styles.modalWrapper}>
        <div className={styles.modalContent}>
          <div className={styles.modalInner}>
            <h2 className={styles.title}>Out of Energy</h2>

            <div className={styles.refreshInfo}>
              <span className={styles.refreshText}>REFRESH IN: </span>
              <div className={styles.refreshRight}>
                <img src={alarmIcon} alt="alarmIcon" />
                <CountdownText
                  targetTime={gameTargetRef.current!}
                  format="hms"
                />
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.left}>
                <span className={styles.description}>
                  Go to Players to send
                </span>
                <span className={styles.description}> and receive energy!</span>
                <button className={styles.button}>Go to Players</button>
              </div>

              <div className={styles.right}>
                <span className={styles.modalUpperText}>Join the Club</span>
                <img className={styles.monemon} src={monemon} alt="monemon" />
                <div className={styles.perkList}>
                  <div className={styles.perkItem}>
                    <div className={styles.perkContainer}>
                      <img
                        alt={"lightningIcon"}
                        className={styles.lightningIcon}
                        src={lightning}
                      />
                      <img
                        alt={"twentyFive"}
                        className={styles.perkBonus}
                        src={twentyFive}
                      />
                    </div>
                    <div className={styles.perkTextContainer}>
                      <span>25 energy</span>
                      <span>now</span>
                    </div>
                  </div>

                  <div className={styles.perkItem}>
                    <div className={styles.perkContainer}>
                      <img
                        alt={"lightningIcon"}
                        className={styles.lightningIcon}
                        src={lightning}
                      />
                      <img
                        alt={"perkDoubleIcon"}
                        className={styles.perkDouble}
                        src={double}
                      />
                    </div>
                    <div className={styles.perkTextContainer}>
                      <span>2x daily</span>
                      <span>energy</span>
                    </div>
                  </div>

                  <div className={styles.perkItem}>
                    <div className={styles.perkContainer}>
                      <img
                        className={styles.silverCoin}
                        alt={"coinIcon"}
                        src={silverCoin}
                      />
                      <img
                        className={styles.perkDoubleWhite}
                        alt={"doubleIcon"}
                        src={doubleWhite}
                      />
                    </div>
                    <div className={styles.perkTextContainer}>
                      <span>x2 monecoin</span>
                      <span>rewards</span>
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
      </div>
    </Modal>
  );
};

export default NotEnoughEnergyModal;
