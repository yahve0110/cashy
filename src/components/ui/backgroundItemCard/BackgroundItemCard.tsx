import styles from "./BackgroundItemCard.module.scss";
import { ICONS } from "@/assets/iconComponents/links";
import selectedBadge from "@/assets/back.svg";
import checkMark from "@/assets/icons/checkMark.svg";
import lock from "@/assets/icons/lock.svg";
import { BackgroundItem } from "./types";

type Props = {
  bg: BackgroundItem;
  isSelected: boolean;
  onClick: () => void;
};

const BackgroundItemCard = ({ bg, isSelected, onClick }: Props) => {
  const isLocked = bg.status === "locked";
  const isBuy = bg.status === "buy";
  const isOwned = bg.status === "owned" || bg.status === "selected";

  return (
    <div
      className={`${styles.bgItem} ${isSelected ? styles.selected : ""} ${isLocked ? styles.locked : ""}`}
      style={{ backgroundImage: `url(${bg.image})` }}
      onClick={onClick}
    >
      <div className={styles.bgName}>{bg.name}</div>

      {isBuy && !isSelected && (
        <div className={styles.priceTag}>
          <img src={ICONS.coin} alt="coin" />
          <span>{bg.price}</span>
        </div>
      )}

      {isOwned && isSelected && (
        <div className={styles.selectedTag}>
          <img
            src={selectedBadge}
            alt="Selected"
            className={styles.selectedIcon}
          />
          <img
            src={checkMark}
            alt="checkMark"
            className={styles.selectedCheckMark}
          />
        </div>
      )}

      {isLocked && (
        <div className={styles.lockWrapper}>
          <div className={styles.lockIcon}>
            <img src={lock} alt="Locked" />
          </div>
          <div className={styles.lockNote}>{bg.note}</div>
        </div>
      )}

      {isOwned && !isSelected && !isBuy && (
        <span className={styles.owned}>Owned</span>
      )}
    </div>
  );
};

export default BackgroundItemCard;
