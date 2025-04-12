import styles from "./GameCard.module.scss";
import { ICONS } from "@/assets/iconComponents/links";

type GameCardProps = {
  image: string;
  title: string;
  energyCost: number;
  level: string | number;
  titleColor?: string;
  levelColor?: string;
  onClick?: () => void;
};

const GameCard = ({
  image,
  title,
  energyCost,
  level,
  titleColor,
  levelColor,
  onClick,
}: GameCardProps) => {
  return (
    <div className={styles.card} onClick={onClick}>
      <img src={image} alt="Game" className={styles.image} />

      <div className={styles.overlay}>
        <div className={styles.title} style={{ color: titleColor }}>
          {title}
        </div>

        <div className={styles.energyWrapper}>
          <img
            src={ICONS.lightning}
            alt="Energy"
            className={styles.lightning}
          />
          <span className={styles.energy}>{energyCost}</span>
        </div>

        <div className={styles.levelWrapper}>
          <span className={styles.lvlLabel}>LVL. </span>
          <span className={styles.level} style={{ color: levelColor }}>
            {level}
          </span>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
