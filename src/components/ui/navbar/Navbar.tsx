import styles from "./Navbar.module.scss";
import HomeIcon from "@/assets/iconComponents/HomeIcon";
import RewardsIcon from "@/assets/iconComponents/RewardsIcon";
import LearnIcon from "@/assets/iconComponents/LearnIcon";
import PlayersIcon from "@/assets/iconComponents/PlayersIcon";
import { TabType } from "@/types/tabs";

type NavbarProps = {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
};

function Navbar({ activeTab, onTabChange }: NavbarProps) {
  const tabs: { id: TabType; label: string; Icon: any }[] = [
    { id: "play", label: "Play", Icon: HomeIcon },
    { id: "revards", label: "Revards", Icon: RewardsIcon },
    { id: "learn", label: "Learn", Icon: LearnIcon },
    { id: "players", label: "Players", Icon: PlayersIcon },
  ];

  return (
    <nav className={styles.navbar}>
      {tabs.map(({ id, label, Icon }) => {
        const isActive = activeTab === id;

        return (
          <div
            key={id}
            className={`${styles.item} ${isActive ? styles.active : ""}`}
            onClick={() => onTabChange(id)}
          >
            <div className={styles.iconContainer}>
              <div
                className={`${styles.iconWrapper} ${
                  isActive ? styles.activeIconWrapper : ""
                }`}
              >
                <Icon
                  active={isActive}
                  width={isActive ? 32 : 24}
                  height={isActive ? 32 : 24}
                />
              </div>
            </div>
            <span className={styles.label}>{label}</span>
          </div>
        );
      })}
    </nav>
  );
}

export default Navbar;
