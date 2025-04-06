import {JSX, useState} from "react";
import styles from "./Menu.module.scss";
import Navbar from "@/components/navbar/Navbar";
import { TabType } from "@/types/tabs";
import PlayPage from "@/components/playPage/PlayPage";

const tabComponents: Record<TabType, JSX.Element> = {
    play: <PlayPage />,
    revards: <h2>Revards Content</h2>,
    learn: <h2>Learn Content</h2>,
    players: <h2>Players Content</h2>,
};

const Menu = () => {
    const [activeTab, setActiveTab] = useState<TabType>("play");

    return (
        <div className={styles.menu}>
            <div className={styles.content}>
                {tabComponents[activeTab] || <h2>404</h2>}
            </div>
            <div className={styles.navbar}>
                <Navbar activeTab={activeTab} onTabChange={setActiveTab} />
            </div>
        </div>
    );
};

export default Menu;
