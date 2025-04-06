import styles from './Navbar.module.scss';
import HomeIcon from "@/assets/icons/HomeIcon";
import RewardsIcon from "@/assets/icons/RewardsIcon";
import LearnIcon from "@/assets/icons/LearnIcon";
import PlayersIcon from "@/assets/icons/PlayersIcon";
import { TabType } from "@/types/tabs";

type NavbarProps = {
    activeTab: TabType;
    onTabChange: (tab: TabType) => void;
};

function Navbar({ activeTab, onTabChange }: NavbarProps) {
    return (
        <nav className={styles.navbar}>
            <div
                className={styles.item}
                onClick={() => onTabChange("play")}
                style={{ color: activeTab === "play" ? "var(--primary-color)" : "" }}
            >
                <HomeIcon active={activeTab === "play"} width={32} height={32} />
                <span>Play</span>
            </div>

            <div
                className={styles.item}
                onClick={() => onTabChange("revards")}
                style={{ color: activeTab === "revards" ? "var(--primary-color)" : "" }}
            >
                <RewardsIcon active={activeTab === "revards"} width={32} height={32} />
                <span>Revards</span>
            </div>

            <div
                className={styles.item}
                onClick={() => onTabChange("learn")}
                style={{ color: activeTab === "learn" ? "var(--primary-color)" : "" }}
            >
                <LearnIcon active={activeTab === "learn"} width={32} height={32} />
                <span>Learn</span>
            </div>

            <div
                className={styles.item}
                onClick={() => onTabChange("players")}
                style={{ color: activeTab === "players" ? "var(--primary-color)" : "" }}
            >
                <PlayersIcon active={activeTab === "players"} width={32} height={32} />
                <span>Players</span>
            </div>
        </nav>
    );
}

export default Navbar;
