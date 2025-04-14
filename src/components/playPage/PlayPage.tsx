import styles from "./PlayPage.module.scss";
import GameCard from "@/components/ui/gameCard/GameCard";
import { ICONS } from "@/assets/iconComponents/links";
import emptyLightning from "@/assets/icons/emptyLightning.svg";
import { games } from "@/components/playPage/gamesData";
import avatarImage from "@/assets/avatar.jpg";
import { useRef, useState } from "react";
import EditStyleModal from "@/components/modals/editStyleModal/EditStyleModal";
import alarmIcon from "@/assets/icons/alarmIcon.svg";
import { GAME_UPDATE_INTERVAL_MS, ENERGY_RECOVERY_INTERVAL_MS } from "@/config";
import CountdownText from "@/components/ui/countDown/CountdownText";
import NotEnoughEnergyModal from "@/components/modals/notEnoughEnergyModal/NotEnoughEnergyModal";
import AddEnergyModal from "@/components/modals/addEnergyModal/AddEnergyModal";

const PlayPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [notEnoughEnergyOpen, setNotEnoughEnergyOpen] = useState(false);
  const [addEnergyModalOpen, setAddEnergyModalOpen] = useState(false);

  const [energy] = useState<number>(0);
  const [coins] = useState<number>(1560);

  const gameTargetRef = useRef<Date | null>(null);
  if (!gameTargetRef.current) {
    gameTargetRef.current = new Date(Date.now() + GAME_UPDATE_INTERVAL_MS);
  }

  const energyTargetRef = useRef<Date | null>(null);
  if (!energyTargetRef.current) {
    energyTargetRef.current = new Date(
      Date.now() + ENERGY_RECOVERY_INTERVAL_MS,
    );
  }

  const handleGameClick = (energyCost: number) => {
    if (energy < energyCost) {
      setNotEnoughEnergyOpen(true);
    } else {
      // if energy - start game logic here
      // ex: navigate(`/game/${id}`)
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.userInfo} onClick={() => setModalOpen(true)}>
          <img className={styles.avatar} src={avatarImage} alt="Avatar" />
          <span className={styles.username}>Jane D.</span>
        </div>

        <div className={styles.rightPart}>
          <div className={styles.containerCoins}>
            <img src={ICONS.coin} alt="Coins" className={styles.coinsIcon} />
            <span className={styles.coinsAmount}>
              {coins.toLocaleString("en-US").replace(/,/g, " ")}
            </span>
            <button className={styles.addEnergy}>+</button>
          </div>

          <div className={styles.containerEnergy}>
            <img
              src={energy > 0 ? ICONS.lightning : emptyLightning}
              alt="Energy"
              className={styles.lightningIcon}
            />
            <span className={styles.energyAmount}>{energy}</span>
            <button
              className={styles.addEnergy}
              onClick={() => setAddEnergyModalOpen(true)}
            >
              +
            </button>

            <span className={styles.timerUnderEnergy}>
              <CountdownText
                targetTime={energyTargetRef.current!}
                format="colon"
              />
            </span>
          </div>
        </div>
      </div>

      <EditStyleModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
      />

      <div className={styles.gamesHeader}>
        <h2 className={styles.title}>Choose a Game</h2>
        <div className={styles.timerRow}>
          <span className={styles.newGamesText}>NEW GAMES IN:</span>
          <div className={styles.timer}>
            <img src={alarmIcon} alt="alarmIcon" />
            <CountdownText targetTime={gameTargetRef.current!} format="hms" />
          </div>
        </div>
      </div>

      <div className={styles.games}>
        {games.map((game) => (
          <GameCard
            key={game.title}
            image={game.image}
            title={game.title}
            energyCost={game.energyCost}
            level={game.level}
            titleColor={game.titleColor}
            levelColor={game.levelColor}
            onClick={() => handleGameClick(game.energyCost)}
          />
        ))}
      </div>

      <NotEnoughEnergyModal
        isOpen={notEnoughEnergyOpen}
        onClose={() => setNotEnoughEnergyOpen(false)}
      />

      <AddEnergyModal
        isOpen={addEnergyModalOpen}
        onClose={() => setAddEnergyModalOpen(false)}
      />
    </div>
  );
};

export default PlayPage;
