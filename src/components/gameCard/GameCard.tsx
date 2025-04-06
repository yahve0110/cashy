import styles from "./GameCard.module.scss";
import { ICONS } from "@/assets/icons/links";

type GameCardProps = {
    title: string;
    image: string;
    coins: number;
    tickets: number;
    energyCost: number;
};

const GameCard = ({ title, image, coins, tickets, energyCost }: GameCardProps) => {
    return (
        <div className={styles.card}>
            <img src={image} alt="Game" className={styles.image} />

            <div className={styles.info}>
                <div className={styles.infoInner}>
                    <h3 className={styles.title}>{title}</h3>

                    <div className={styles.rewards}>
                        <div className={styles.reward}>
                            <img src={ICONS.coin} alt="Coins" />
                            <span className={styles.rewardText}>{coins}</span>
                        </div>
                        <div className={styles.reward}>
                            <img src={ICONS.ticket} alt="Tickets" />
                            <span className={styles.rewardText}>{tickets}</span>
                        </div>
                    </div>

                    <button className={styles.playButton}>
                        <img className={styles.lightning} src={ICONS.lightning} alt="Energy" />
                        <span>{energyCost}</span>
                        <span>Play</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GameCard;
