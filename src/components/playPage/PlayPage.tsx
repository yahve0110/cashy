import styles from "./PlayPage.module.scss";
import GameCard from "@/components/gameCard/GameCard";
import { ICONS } from "@/assets/icons/links";
import EditStyleModal from "@/components/editStyleModal/EditStyleModal";
import {useState} from "react";
import {games} from "@/components/playPage/gamesData";
import avatarImage from "@/assets/avatar.png";


const PlayPage = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <div className={styles.userInfo} onClick={() => setModalOpen(true)}>
                    <img className={styles.avatar} src={avatarImage} alt="Avatar" />

                    <span className={styles.username}>Jane Doe</span>
                </div>

                <div className={styles.energy}>
                    <img
                        src={ICONS.lightning}
                        alt="Energy"
                        className={styles.lightningIcon}
                    />
                    <span className={styles.energyAmount}>10</span>
                </div>
            </div>
            <EditStyleModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />

            <h2 className={styles.title}>Choose a Game</h2>

            <div className={styles.games}>
                {games.map((game, index) => (
                    <GameCard
                        key={index}
                        title={game.title}
                        image={game.image}
                        coins={game.coins}
                        tickets={game.tickets}
                        energyCost={game.energyCost}
                    />
                ))}
            </div>
        </div>
    );
};

export default PlayPage;
